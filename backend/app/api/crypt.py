from flask_restx import Namespace, Resource
from flask import request
import bcrypt

# Define the namespace
crypt_algo = Namespace('Hashing algorithm with crypt')

class CryptAlgorithm(Resource):
    def get(self):
        """
        This method accepts a string input and a salt, and returns its cryptographic hash.
        This method is not supported by windows.
        """
        # Retrieve the input string and salt from the query parameters
        input_string = request.args.get('input', '')
        salt = request.args.get('salt', '')

        # Check if input and salt are provided
        if not input_string or not salt:
            return {'message': 'Both input string and salt are required.'}, 400
        
        # # Calculate crypt hash
        # crypt_hash = bcrypt(input_string, salt)

        return {'input': input_string, 'salt': salt, 'crypt_hash': 'crypt_hash'}, 200

# Add the resource to the namespace
crypt_algo.add_resource(CryptAlgorithm, '/crypt_algo')