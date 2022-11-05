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
    descripcion = db.Column (db.String(250), nullable=True)
    tipo_mascota = db.Column (db.String(250), nullable=False)
    cantidad_mascota = db.Column (db.String(250), nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def user_serialize(self):
        return {
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "imagen": self.imagen,
            "descripcion": self.descripcion
            "tipo_mascota": self.tipo_mascota,
            "cantidad_mascota": self.cantidad_mascota
            # do not serialize the password, its a security breach
        }

class Cuidador(User):
    id = db.Column(db.Integer, primary_key=True)
    ubicacion = db.Column (db.String(250), nullable=False)
    precio_hora = db.Column (db.String(250), nullable=True)
    precio_dia = db.Column (db.String(250), nullable=True)
    
    
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "ubicacion": self.ubicacion,
            "tipo_mascota": self.tipo_mascota,
            "cantidad_mascota": self.cantidad_mascota,
            "imagen": self.imagen,
            "descripcion": self.descripcion,
            "precio_hora": self.precio_hora,
            "precio_dia": self.precio_dia

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
            "imagen": self.imagen,
            "descripcion": self.descripcion
            "tipo_mascota": self.tipo_mascota,
            "cantidad_mascota": self.cantidad_mascota
          
        }
