from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Create the Flask app
app = Flask(__name__)

# Allow Cross-Origin requests
CORS(app)

# Add configuration settings for the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy object
db = SQLAlchemy(app)