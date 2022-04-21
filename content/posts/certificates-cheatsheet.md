---
title: "Useful commands when working with certificates"
date: 2022-04-01T21:29:32-04:00
draft: false
tags: 
- openssl
---
I have been using `openssl` command line for past few weeks to rotate some of the yearly expiring certs on our internal platforms. If you are one of my co-worked reading this, then you know what I am talking about :grin:.

So I thought this can make a good blog post as well as it can also serve as a cheatsheet/reference for future myself.

[This list](https://www.sslshopper.com/article-most-common-openssl-commands.html) of most common OpenSSL commands from SSLShopper covers more of the what I have below.

---
#### **Command to generate a new .txt file for creating a Certificate Signing Request config.**
```bash
export SITE_NAME="mydomain.com"

echo "
[req]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = req_distinguished_name

[req_distinguished_name]
C=CA
ST=Ontario
L=Toronto
O=Personal
OU=Stuff
emailAddress=example@gmail.com
CN=${SITE_NAME}

[req_ext]
subjectAltName = @alt_names

[alt_names]
DNS.1 = www.${SITE_NAME}" > ${SITE_NAME}.csr.txt
```
The above would generate a new config file which can be passed onto openssl to create a new CSR request

---
#### **Create a new private key :key: and Certificate Signing Request from config `${SITE_NAME}.csr.txt`**
```bash
openssl req -new -sha256 -nodes -out ${SITE_NAME}.csr \
    -newkey rsa:2048 -keyout ${SITE_NAME}.key \
    -config ${SITE_NAME}.csr.txt
```

---
#### **Check for expiry date of cert on a domain**
```bash
openssl s_client -connect google.com:443 -servername google.com 2> /dev/null | openssl x509 -dates -noout
```

---
#### **Check for expiry date of cert that you have somewhere local on disk**
```bash
openssl x509 -dates -noout -in myDomain.crt
```

---
#### **Check SAN/DNS listed on a cert present locally**
```bash
openssl x509 -text -noout -in myDomain.crt | grep DNS
```

---
#### **Check SAN/DNS listed on a remote domain**
```bash
openssl s_client -connect google.com:443 -servername google.com 2> /dev/null | openssl x509 -text -noout  | grep DNS
```


