from flask_restx import Api

from app.api.md5 import md5_algo
from app.api.sha import sha_algo
from app.api.crypt import crypt_algo
from app.api.bcrypt import bcrypt_algo

api = Api(
    title='MeSH',
    version='1.0',
    description='A proxy service which redirects the incoming request to the respective RSP platform based on the input'
)

api.add_namespace(md5_algo, path='/')
api.add_namespace(sha_algo, path='/')
api.add_namespace(crypt_algo, path='/')
api.add_namespace(bcrypt_algo, path='/')