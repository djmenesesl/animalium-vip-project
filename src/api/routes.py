"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cuidadores
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
import os, bcrypt

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def showUsuarios():
    get_usuarios = User.query.all()
    lista_usuarios = list(map(lambda usuarios: usuarios.serialize(), get_usuarios))
    print(lista_usuarios)
    return jsonify(lista_usuarios), 200

@api.route('/cuidadores', methods=['GET'])
def showCuidadores():
    get_cuidadores = Cuidadores.query.all()
    lista_cuidadores = list(map(lambda cuidadores: cuidadores.serialize(), get_cuidadores))
    print(list_cuidadores)
    return jsonify(lista_cuidadores), 200

@api.route('/user', methods=['POST'])
def create_user():
    body = request.json
    salt_bytes = bcrypt.gensalt()
    salt = salt_bytes.decode()
    print(body)
    hashed_password = generate_password_hash(f'{body["password"]}{salt}')
    new_user = User(
                        email=body["email"],
                        nombre=body["nombre"],
                        apellido=body["apellido"],
                        telefono=body["telefono"], 
                        password=hashed_password,
                        salt=salt,
                        
                    )
    db.session.add(new_user)
    db.session.commit()
    print("User: ", new_user)
    print("User serialized: ", new_user.serialize())
    return jsonify(body), 200