from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, User
from werkzeug.security import generate_password_hash
import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'users.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()
    

@app.route('/')
def home():
    return "Servidor Flask listo 🚀"

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not name or not email or not password:
        return jsonify({"error": "Todos los campos son obligatorios."}), 400

    if len(password) < 6:
        return jsonify({"error": "La contraseña debe tener al menos 6 caracteres."}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "El correo ya está registrado."}), 400
    hashed_password = generate_password_hash(password)

    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario creado correctamente."}), 201

@app.route('/users', methods=['GET'])
def get_users(): 
    users = User.query.all()
    users_list = [
        {
            "name": user.name,
            "email": user.email
        } for user in users
    ]
    return jsonify(users_list), 200
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)