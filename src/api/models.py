from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(480), unique=False, nullable=False)
    nombre= db.Column (db.String(250), nullable=False)
    apellido = db.Column (db.String(250), nullable=False)
    telefono = db.Column (db.String(250), nullable=False)
    salt = db.Column(db.String(250), nullable=False)
    imagen = db.Column (db.String(250), nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "imagen": self.imagen
            # do not serialize the password, its a security breach
        }

class Cuidadores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column (db.String(250), nullable=False)
    password = db.Column (db.String(250), nullable=False)
    nombre= db.Column (db.String(250), nullable=False)
    apellido = db.Column (db.String(250), nullable=False)
    telefono = db.Column (db.String(250), nullable=False)
    ubicacion = db.Column (db.String(250), nullable=False)
    tipo_de_mascota = db.Column (db.String(250), nullable=False)
    cantidad_de_mascotas = db.Column (db.String(250), nullable=False)
    imagen = db.Column (db.String(250), nullable=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "ubicacion": self.ubicacion,
            "tipo de mascota": self.tipo_de_mascota,
            "cantidad de mascotas": self.cantidad_de_mascotas,
            "imagen": self.imagen
        }