import sys
import json
import logging
import base64
import hashlib
import random
import gearman
import Crypto
from Crypto.Cipher import AES

logger = logging.getLogger(__name__)

sys.dont_write_bytecode = True


MASTER_KEY = "fgAqj6mCROyLOPsmRphQLH9g41bJgUo1vpXKPdbLXl8="

def encrypt_val(clear_text):
    enc_secret = AES.new(MASTER_KEY[:16])
    tag_string = (str(clear_text) +
                  (AES.block_size -
                   len(str(clear_text)) % AES.block_size) * "\0")
    cipher_text = base64.b64encode(enc_secret.encrypt(tag_string))

    return cipher_text


def decrypt_val(cipher_text):
    dec_secret = AES.new(MASTER_KEY[:16])
    raw_decrypted = dec_secret.decrypt(base64.b64decode(cipher_text))
    clear_val = raw_decrypted.rstrip("\0")
    return clear_val


def get_activation_hash():
    result = base64.b64encode(hashlib.sha256(str(random.getrandbits(256))).digest(),
                              random.choice(['rA', 'aZ', 'gQ', 'hH', 'hG', 'aR', 'DD'])).rstrip('==').rstrip('/')
    return result


def get_token(num):
    result = base64.b64encode(hashlib.sha256(str(random.getrandbits(num))).digest(),
                              random.choice(['rA', 'aZ', 'gQ', 'hH', 'hG', 'aR', 'DD', 'Pr', 'Go', 'Eb', 'Ev'])).rstrip('==')
    return result

class JSONDataEncoder(gearman.DataEncoder):

    @classmethod
    def encode(cls, encodable_object):
        return json.dumps(encodable_object)

    @classmethod
    def decode(cls, decodable_string):
        return json.loads(decodable_string)


class JSONGearmanClient(gearman.GearmanClient):
    data_encoder = JSONDataEncoder


class JSONGearmanWorker(gearman.GearmanWorker):
    data_encoder = JSONDataEncoder