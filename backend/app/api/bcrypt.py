from flask_restx import Namespace, Resource
from flask import request
import bcrypt

# Define the namespace
bcrypt_algo = Namespace('Hashing algorithm with bcrypt')

class BcryptAlgorithm(Resource):
    def post(self):
        """
        This method accepts a password input and returns its bcrypt hash.
        """
        # Retrieve the input string (password) from the request body
        input_password = request.json.get('password', '')

        # Check if the password is provided
        if not input_password:
            return {'message': 'Password is required.'}, 400
        
        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(input_password.encode('utf-8'), bcrypt.gensalt())

        return {'password': input_password, 'bcrypt_hash': hashed_password.decode('utf-8')}, 200


class BcryptVerifyAlgorithm(Resource):
    def post(self):
        """
        This method accepts a password and a bcrypt hash, and verifies if they match.
        """
        # Retrieve the input password and stored bcrypt hash from the request body
        input_password = request.json.get('password', '')
        stored_hash = request.json.get('stored_hash', '')

        # Check if both password and stored hash are provided
        if not input_password or not stored_hash:
            return {'message': 'Both password and stored hash are required.'}, 400

        # Check if the input password matches the stored hash using bcrypt
        if bcrypt.checkpw(input_password.encode('utf-8'), stored_hash.encode('utf-8')):
            return {'message': 'Password matches the stored hash.'}, 200
        else:
            return {'message': 'Password does not match the stored hash.'}, 400


# Add the resources to the namespace
bcrypt_algo.add_resource(BcryptAlgorithm, '/bcrypt_algo')
bcrypt_algo.add_resource(BcryptVerifyAlgorithm, '/verify_bcrypt_hash')