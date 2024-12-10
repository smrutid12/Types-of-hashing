from flask_restx import Namespace, Resource
from flask import request
import hashlib

# Define the namespace
md5_algo = Namespace('Hashing algorithm with md5')

class Md5Algorithm(Resource):
    def get(self):
        """
        This method accepts a string input and returns its MD5 hash.
        """
        # Retrieve the input string from the query parameters
        input_string = request.args.get('input', '')

        # Check if input is provided
        if not input_string:
            return {'message': 'Input string is required.'}, 400
        
        # Calculate MD5 hash
        md5_hash = hashlib.md5(input_string.encode('utf-8')).hexdigest()

        return {'input': input_string, 'md5_hash': md5_hash}, 200

# Add the resource to the namespace
md5_algo.add_resource(Md5Algorithm, '/md5_algo')