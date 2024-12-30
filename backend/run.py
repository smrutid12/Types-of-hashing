import os
from flask import Flask
from flask_cors import CORS
from app.api import api
# from model.URLmapping import db

app = Flask(__name__)

# POSTGRES_USERNAME = os.getenv('POSTGRES_USERNAME')
# POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
# POSTGRES_HOST = os.getenv('POSTGRES_HOST')
# POSTGRES_DATABASE = os.getenv('POSTGRES_DATABASE')
# POSTGRES_PORT = os.getenv('POSTGRES_PORT')

# # App configuration
# app.config['SQLALCHEMY_DATABASE_URI'] = F'postgresql://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DATABASE}'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)
# CORS(app)
api.init_app(app)

if __name__ == "__main__":
   app.run(debug=True, host='0.0.0.0', port=5000)