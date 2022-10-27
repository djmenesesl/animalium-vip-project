from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __abstract__=True
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(480), unique=False, nullable=False)
    nombre= db.Column (db.String(250), nullable=False)
    apellido = db.Column (db.String(250), nullable=False)
    telefono = db.Column (db.String(250), nullable=False)
    salt = db.Column(db.String(250), nullable=False)
    imagen = db.Column (db.String(250), nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def user_serialize(self):
        return {
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "imagen": self.imagen
            # do not serialize the password, its a security breach
        }

class Cuidador(User):
    id = db.Column(db.Integer, primary_key=True)
    ubicacion = db.Column (db.String(250), nullable=False)
    tipoMascota = db.Column (db.String(250), nullable=False)
    cantidadMascota = db.Column (db.String(250), nullable=False)
    
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "ubicacion": self.ubicacion,
            "tipoMascota": self.tipoMascota,
            "cantidadMascota": self.cantidadMascota,
            "imagen": self.imagen
        }

class Cliente(User):
    id = db.Column(db.Integer, primary_key=True)
        
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "imagen": self.imagen
          
        }
