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
    ubicacion = db.Column (db.String(250), nullable=True)
    descripcion = db.Column (db.String(250), nullable=True)
    tipo_mascota = db.Column (db.String(250), nullable=True)
    cantidad_mascota = db.Column (db.String(250), nullable=True)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def user_serialize(self):
        return {
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "imagen": self.imagen,
            "descripcion": self.descripcion,
            "tipo_mascota": self.tipo_mascota,
            "cantidad_mascota": self.cantidad_mascota
            # do not serialize the password, its a security breach
        }

class Cuidador(User):
    id = db.Column(db.Integer, primary_key=True)
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
            "ubicacion": self.ubicacion,
            "descripcion": self.descripcion,
            "tipo_mascota": self.tipo_mascota,
            "cantidad_mascota": self.cantidad_mascota
          
        }

class Solicitud(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_cuidador = db.Column(db.Integer)
    id_cliente = db.Column(db.Integer)
    status = db.Column (db.String(250), nullable=False)
    fecha_inicial = db.Column (db.Date)
    fecha_fin = db.Column (db.Date)

    def serialize(self):
        return {
            "id": self.id,
            "id_cuidador": self.id_cuidador,
            "id_cliente": self.id_cliente,
            "status": self.status,
            "fecha_inicial":self.fecha_inicial,
            "fecha_fin": self.fecha_fin
        }