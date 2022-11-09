"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cuidador, Cliente, Solicitud
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
import os, bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/clientes', methods=['GET'])
def showUsuarios():
    get_usuarios = User.query.all()
    lista_usuarios = list(map(lambda usuarios: usuarios.serialize(), get_usuarios))
    print(lista_usuarios)
    return jsonify(lista_usuarios), 200

@api.route('/cuidadores', methods=['GET'])
def showCuidadores():
    print(request.args.get("ubicacion"))
    print(request.args.get("tipomascota"))
    print(request.args.get("cantidadmascota"))
    ubicacion = request.args.get("ubicacion")
    tipomascota = request.args.get("tipomascota")
    cantidadmascota = request.args.get("cantidadmascota")
    landingcuidador = request.args.get("landingcuidador")
    get_cuidadores = []
    if landingcuidador is not None:
        get_cuidadores = Cuidador.query.limit(6).all()
        print(get_cuidadores)
    if ubicacion is not None:
        get_cuidadores = Cuidador.query.filter(Cuidador.ubicacion==ubicacion, Cuidador.tipo_mascota==tipomascota, Cuidador.cantidad_mascota>=cantidadmascota )
    lista_cuidadores = list(map(lambda cuidadores: cuidadores.serialize(), get_cuidadores))
    
    return jsonify(lista_cuidadores), 200

@api.route('/user', methods=['POST'])
def create_user():
    body = request.json
    salt_bytes = bcrypt.gensalt()
    salt = salt_bytes.decode()
    print(body)
    hashed_password = generate_password_hash(f'{body["password"]}{salt}')
    new_user = Cliente(
                        email=body["email"],
                        nombre=body["nombre"],
                        apellido=body["apellido"],
                        telefono=body["telefono"], 
                        hashed_password=hashed_password,
                        salt=salt,
                        
                    )
    db.session.add(new_user)
    db.session.commit()
    print("User: ", new_user)
    print("User serialized: ", new_user.serialize())
    return jsonify(new_user.serialize()), 201

@api.route('/cuidador', methods=['POST'])
def create_cuidador():
    body = request.json
    salt_bytes = bcrypt.gensalt()
    salt = salt_bytes.decode()
    print(body)
    hashed_password = generate_password_hash(f'{body["password"]}{salt}')
    new_cuidador = Cuidador(
                        email=body["email"],
                        nombre=body["nombre"],
                        apellido=body["apellido"],
                        telefono=body["telefono"], 
                        ubicacion=body["ubicacion"], 
                        tipo_mascota=body["tipo_mascota"], 
                        cantidad_mascota=body["cantidad_mascota"], 
                        hashed_password=hashed_password,
                        salt=salt,
                        
                    )
    db.session.add(new_cuidador)
    db.session.commit()
    print("User: ", new_cuidador)
    print("User serialized: ", new_cuidador.serialize())
    return jsonify(new_cuidador.serialize()), 201

@api.route('/login', methods=['POST'])
def login():
    body = request.json
    cliente = Cliente.query.filter_by(email=body["email"]).one_or_none()
    cuidador = Cuidador.query.filter_by(email=body["email"]).one_or_none()
    if cliente is None and cuidador is None:
        return jsonify({
            "message": "Invalid credentials, email"
        }), 400 

    user = cliente if cuidador is None else cuidador
    password_is_valid = check_password_hash(user.hashed_password, f'{body["password"]}{user.salt}')
    if not password_is_valid:
        return jsonify({
            "message": "Invalid credentials, password"
        }), 400
    
    print("Password is valid: ", password_is_valid)
    
    access_token = create_access_token(identity=user.id)
    
    print(access_token)
    
    return jsonify({
        "token": access_token,
        "role": "cliente" if isinstance(user, Cliente) else "cuidador",
        "id": user.id
    }), 201

@api.route("/cliente", methods=['GET'])
@jwt_required()
def get_cliente_info():
    cliente_id = get_jwt_identity()
    cliente = Cliente.query.get(cliente_id)
    if not cliente:
        return jsonify({
            "message": "Not found",
            
        }), 404
    return jsonify({
            "message": "Ruta protegida",
            "user": cliente.serialize()
        }), 200

@api.route("/cuidador", methods=['GET'])
@jwt_required()
def get_cuidador_info():
    cuidador_id = get_jwt_identity()
    cuidador = Cuidador.query.get(cuidador_id)
    if not cuidador:
        return jsonify({
            "message": "Not found",
            
        }), 404
    return jsonify({
            "message": "Ruta protegida",
            "user": cuidador.serialize()
        }), 200

@api.route("/cuidador/<id>", methods=['GET'])
def get_cuidador_public(id):
    cuidador = Cuidador.query.get(id)
    if not cuidador:
        return jsonify({
            "message": "Not found",
            
        }), 404
    return jsonify({
            "message": "Ruta protegida",
            "user": cuidador.serialize()
        }), 200

@api.route('/cliente', methods=['PATCH'])
@jwt_required()
def update_cliente():
    body = request.json
    print(body)
    cliente_id = get_jwt_identity()
    cliente = Cliente.query.get(cliente_id)
    cliente.imagen=body["imagen"],
    cliente.descripcion=body["descripcion"],
    cliente.ubicacion=body["ubicacion"],               
    cliente.tipo_mascota=body["tipoMascota"],               
    cliente.cantidad_mascota=body["cantidadMascota"],               
                                            
    db.session.commit()
    print("Actualización: ", cliente)
    print("Actualización serialized: ", cliente.serialize())
    return jsonify(cliente.serialize()), 201

@api.route('/cuidador', methods=['PATCH'])
@jwt_required()
def update_cuidador():
    body = request.json
    print(body)
    cuidador_id = get_jwt_identity()
    cuidador = Cuidador.query.get(cuidador_id)
    cuidador.imagen=body["imagen"],
    cuidador.descripcion=body["descripcion"],
    cuidador.ubicacion=body["ubicacion"],               
    cuidador.tipo_mascota=body["tipoMascota"],               
    cuidador.cantidad_mascota=body["cantidadMascota"],               
    cuidador.precio_dia=body["tarifa"],               
                                            
    db.session.commit()
    print("Actualización: ", cuidador)
    print("Actualización serialized: ", cuidador.serialize())
    return jsonify(cuidador.serialize()), 201
       
         
@api.route('/solicitud', methods=['POST'])
@jwt_required()
def create_solicitud():
    cliente_id = get_jwt_identity()
    body = request.json
    salt_bytes = bcrypt.gensalt()
    salt = salt_bytes.decode()
    print(body)
    new_solicitud = Solicitud(
                        id_cuidador=body["id_cuidador"],
                        id_cliente= cliente_id,
                        status=body["status"],
                        fecha_inicial=body["fecha_inicial"], 
                        fecha_fin=body["fecha_fin"], 
                    )
    db.session.add(new_solicitud)
    db.session.commit()
    return jsonify(new_solicitud.serialize()), 201

@api.route("/solicitud", methods=['GET'])
def get_solicitud_info():
    solicitudes = Solicitud.query.all()
    lista_solicitudes = list(map(lambda solicitud: solicitud.serialize(), solicitudes))
    print(lista_solicitudes)
    return jsonify(lista_solicitudes), 200

@api.route('/solicitud/aprobar/<solicitud_id>', methods=['PATCH'])
@jwt_required()
def update_solicitud_aprobar(solicitud_id):
    solicitud = Solicitud.query.get(solicitud_id) 
    solicitud.status = "Aprobado"
    db.session.commit()
    return jsonify(solicitud.serialize()), 201

@api.route('/solicitud/rechazar/<solicitud_id>', methods=['PATCH'])
@jwt_required()
def update_solicitud_rechazar(solicitud_id):
    solicitud = Solicitud.query.get(solicitud_id) 
    solicitud.status = "Cancelado"
    db.session.commit()
    return jsonify(solicitud.serialize()), 201