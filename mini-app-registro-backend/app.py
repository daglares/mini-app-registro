from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, User
from werkzeug.security import generate_password_hash
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'users.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    print("Creando base de datos y tablas...")
    db.create_all()
    

@app.route('/')
def home():
    return "Servidor Flask funcionando correctamente 🚀"

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

    # Verificar si el correo ya está registrado
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "El correo ya está registrado."}), 400

    
if __name__ == '__main__':
    app.run(debug=True)