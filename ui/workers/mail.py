# -*- coding: utf-8 -*-
#
# Copyright (c) 2012 feilong.me. All rights reserved.
#
# @author: Felinx Lee <felinx.lee@gmail.com>
# Created on  Jun 30, 2012
#
import sys

# Keep Python from creating .pyc files
sys.dont_write_bytecode = True
import re
import logging
import smtplib
import time
from datetime import datetime, timedelta
from email import encoders
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.utils import COMMASPACE
from email.utils import formatdate
#from gm import logger
from tornado.escape import utf8
from tornado.options import options

__all__ = ("send_email", "EmailAddress")

# borrow email re pattern from django
_email_re = re.compile(
    r"(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*"  # dot-atom
    r'|^"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-011\013\014\016-\177])*"'  # quoted-string
    r')@(?:[A-Z0-9]+(?:-*[A-Z0-9]+)*\.)+[A-Z]{2,6}$', re.IGNORECASE)  # domain


def send_email(frstr, tostr, fr, to, subject, body, html=None):
    logger.info("Ok we got new email to send out to: %s"%(to))
    # Create a text/plain message
    if html:
        msg = MIMEMultipart("alternative")
        msg.attach(MIMEText(body, "plain"))
        msg.attach(MIMEText(html, "html"))
    else:
        msg =  MIMEText('%s'%(body))

    # from == the sender's email address
    # to == the recipient's email address
    msg['Subject'] = '%s'%(subject)
    msg['From'] = '%s'%(fr)
    msg['To'] = '%s'%(to)

    # Send the message via our own SMTP server, but don't include the
    # envelope header.
    s = smtplib.SMTP(options.smtp_host)
    s.sendmail(frstr, tostr, msg.as_string())



class EmailAddress(object):
    def __init__(self, addr, name=""):
        assert _email_re.match(addr), "Email address(%s) is invalid." % addr

        self.addr = addr
        if name:
            self.name = name
        else:
            self.name = addr.split("@")[0]

    def __str__(self):
        return '%s <%s>' % (utf8(self.name), utf8(self.addr))
