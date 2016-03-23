#!/usr/bin/python
import sys
sys.path.append("/srv/dev/datio")
import tornado
from tornado.options import define, options
import re
import json
from mail import EmailAddress
import smtplib
from email.mime.text import MIMEText as text
from email.mime.multipart import MIMEMultipart
from ui.libs.libsmq import JSONGearmanWorker
import requests as res
from ui import backend_url, app
from ui.handlers.models.user import Users, User
from flask import current_app
import datetime
import base64
import hashlib
import pdfkit
from ui.handlers.models.user import User, Users
import logging
from logging.config import dictConfig

logging_config = dict(
    version = 1,
    formatters = {
        'f': {'format':
              '%(asctime)s %(name)-12s %(levelname)-8s %(message)s'}
        },
    handlers = {
        'h': {'class': 'logging.StreamHandler',
              'formatter': 'f',
              'level': logging.DEBUG}
        },
    loggers = {
        'root': {'handlers': ['h'],
                 'level': logging.DEBUG}
        }
)

dictConfig(logging_config)
logger = logging.getLogger(__name__)

define('jobserver', default='localhost:4730', help='Job Server host:port', type=str)
define("smtp_host", default="smtp.mandrillapp.com", help="smtp host", type=str)
define("smtp_user", default="ebottabi@siqueries.com", help="smtp username", type=str)
define("smtp_password", default="B8d4j-UsxOfYXvbp_XgG3g", help="smtp password", type=str)
define("smtp_port", default=587, help="smtp port", type=int)
define("smtp_duration", default=30, help="smtp duration", type=int)
define("smtp_tls", default=True, help="smtp tls", type=bool)


class JobHelper(object):

    def __init__(self):
        self._urls = list()
        self._gm_job = None
        self._gm_worker = JSONGearmanWorker([options.jobserver])
        self._gm_worker.register_task('session.register', self._session_register)
        self._gm_worker.register_task('session.forgot', self._session_forgot)
        self._gm_worker.register_task('settings.password', self._settings_password)
        self._gm_worker.register_task('settings.invites', self._send_invite)
        self._gm_worker.register_task('billing', self._send_billing)
        self._gm_worker.register_task('receipt', self._send_receipt)
        try:
            logger.info('Background job workers initialized and ready for work')
            self._gm_worker.work()
        except KeyboardInterrupt:
            logger.info('Exiting')
            pass
        except Exception, e:
            logger.error('Exiting - %s' % e)

    def _session_register(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data['content']
        names = data['name']
        to = data['email']
        subject = "Ebot Tabi from SiQueries Datio Science - Amazing to have you on board!"
        print "good here %s" % to
        self.send_email(names, "hello@siqueries.com", to, subject, body)

    def _session_forgot(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data['content']
        names = data['name']
        to = data['email']
        subject = "SiQueries - Reset your password!"
        print "good here %s" % to
        self.send_email(names, "hello@siqueries.com", to, subject, body)

    def _settings_password(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data["content"]
        names = data["names"]
        to = data["email"]
        subject = "[Security Notification] You changed your password"
        print "good here %s" % to
        self.send_email(names, "security@siqueries.com", to, subject, body)

    def _send_invite(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data["content"]
        names = data["names"]
        to = data["email"]
        subject = "SiQueries QuickSense"
        print "good here %s" % to
        self.send_email(names, "hello@siqueries.com", to, subject, body)

    def _send_billing(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data["content"]
        names = data["names"]
        to = data["email"]
        subject = "Wow! Excited to have you on our Awesome plan."
        print "good here %s" % to
        try:
            self.send_email(names, "hello@siqueries.com", to, subject, body)
        except Exception, e:
            print e

    def _send_receipt(self, gm_worker, gm_job):
        data = json.loads(gm_job.data)
        body = data["billing_content"]
        receipt = data["billing_receipt"]
        file_name = "/tmp/receipt_{0}.pdf".format(data['charge_id'])
        options = {
            'page-size': 'A3',
            'page-height': '6in',
            'page-width': '8.6in',
            'encoding': "UTF-8",
            'no-outline': None
        }
        try:
            pdfkit.from_string(receipt, file_name, options=options)
        except Exception, e:
            print e
        names = data["names"]
        to = data["email"]
        subject = "Thanks for your payment. You are making SiQueries possible! :-)"
        #print "good here %s" % to
        self.send_email(names, "hello@siqueries.com", to, subject, body)

    @staticmethod
    def send_email(names, from_address, to_address, subject, body):
        #print "about to send email to %s" % to_address
        m = MIMEMultipart("alternative")
        #m.attach(text(body, "plain"))
        m.attach(text(body, "html"))
        m['Subject'] = subject
        m['From'] = str(EmailAddress(from_address, "SiQueries"))
        m['To'] = str(EmailAddress(to_address, names))

        logger.info(m)

        smtp_server = 'smtp.mandrillapp.com'
        smtp_username = 'ebottabi@siqueries.com'
        smtp_password = 'B8d4j-UsxOfYXvbp_XgG3g'
        smtp_port = '587'
        smtp_do_tls = True

        server = smtplib.SMTP(
            host=smtp_server,
            port=smtp_port,
            timeout=10
        )
        #server.set_debuglevel(1)
        server.starttls()
        server.ehlo()
        server.login(smtp_username, smtp_password)
        server.sendmail(from_address, to_address, m.as_string())
        server.quit()
        logger.info("email should have gone")

if __name__ == '__main__':
    tornado.options.parse_command_line()
    JobHelper()

