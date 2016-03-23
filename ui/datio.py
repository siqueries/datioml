import sys
sys.dont_write_bytecode = True
import os
from ui import app
import sys
from OpenSSL import SSL
context = SSL.Context(SSL.SSLv23_METHOD)
#context.use_privatekey_file('/srv/stunnel.key')
#context.use_certificate_file('/srv/stunnel.cert')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5050))
    # app.run(host='0.0.0.0', port=port, ssl_context=context)
    app.run(host='0.0.0.0', port=port)
