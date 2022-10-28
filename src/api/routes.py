"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cuidador, Cliente
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
    get_cuidador = Cuidador.query.all()
    lista_cuidadores = list(map(lambda cuidadores: cuidadores.serialize(), get_cuidadores))
    print(lista_cuidadores)
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

@api.route("/user", methods=['GET'])
@jwt_required()
def get_user_info():
    cliente_id = get_jwt_identity()
    cliente = Cliente.query.get(cliente_id)
    if not cliente:
        return jsonify({
            "message": "Not found",
            "user_id": None
        }), 404
    return jsonify({
            "message": "Ruta protegida",
            "user": cliente.serialize()
        }), 200