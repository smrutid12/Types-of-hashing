from flask_restx import Namespace, Resource
from flask import request
import hashlib

# Define the namespace
sha_algo = Namespace('Hashing algorithm with sha256')

class Sha256Algorithm(Resource):
    def get(self):
        """
        This method accepts a string input and returns its SHA-256 hash.
        """
        # Retrieve the input string from the query parameters
        input_string = request.args.get('input', '')

        # Check if input is provided
        if not input_string:
            return {'message': 'Input string is required.'}, 400
        
        # Calculate SHA-256 hash
        sha256_hash = hashlib.sha256(input_string.encode('utf-8')).hexdigest()

        return {'input': input_string, 'sha256_hash': sha256_hash}, 200
    

class Sha224Algorithm(Resource):
    def get(self):
        """
        This method accepts a string input and returns its SHA-224 hash.
        """
        # Retrieve the input string from the query parameters
        input_string = request.args.get('input', '')

        # Check if input is provided
        if not input_string:
            return {'message': 'Input string is required.'}, 400
        
        # Calculate SHA-256 hash
        sha224_hash = hashlib.sha224(input_string.encode('utf-8')).hexdigest()

        return {'input': input_string, 'sha224_hash': sha224_hash}, 200


class Sha384Algorithm(Resource):
    def get(self):
        """
        This method accepts a string input and returns its SHA-384 hash.
        """
        # Retrieve the input string from the query parameters
        input_string = request.args.get('input', '')

        # Check if input is provided
        if not input_string:
            return {'message': 'Input string is required.'}, 400
        
        # Calculate SHA-256 hash
        sha384_hash = hashlib.sha384(input_string.encode('utf-8')).hexdigest()

        return {'input': input_string, 'sha384_hash': sha384_hash}, 200
    

class Sha512Algorithm(Resource):
    def get(self):
        """
        This method accepts a string input and returns its SHA-512 hash.
        """
        # Retrieve the input string from the query parameters
        input_string = request.args.get('input', '')

        # Check if input is provided
        if not input_string:
            return {'message': 'Input string is required.'}, 400
        
        # Calculate SHA-256 hash
        sha512_hash = hashlib.sha512(input_string.encode('utf-8')).hexdigest()

        return {'input': input_string, 'sha512_hash': sha512_hash}, 200


# Add the resource to the namespace
sha_algo.add_resource(Sha256Algorithm, '/sha256_algo')
sha_algo.add_resource(Sha224Algorithm, '/sha224_algo')
sha_algo.add_resource(Sha384Algorithm, '/sha384_algo')
sha_algo.add_resource(Sha512Algorithm, '/sha512_algo')