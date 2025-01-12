
# Steps to configure nginx as load balancer




## Setup server in aws EC2
- Launch two instance from aws ec2, name it as server-1 and server-2
- Allow the traffic on specific ports, you can configure it from security-groups


## Execute below commands in both the server (Ubuntu)

Update the ubuntu 

```bash
  sudo apt update -y 
```
Install nodejs

```bash
  sudo apt install nodejs -y
  sudo apt install npm -y
```
Do git clone and install pm2 service in order to run the server in daemon. 
pm2 is used to run the process in background so that terminal is not messy.

```bash
  git clone  <repo>
  cd repo
  npm i
  sudo npm i -g pm2
  pm2 start server.js
```



## setup nginx server in aws ec2

- Launch one instance from aws ec2, name it as nginx server
- Allow the http traffic
## Execute below commands in nginx server (Ubuntu)


Update the ubuntu
```bash
  sudo apt update -y 
```
Install nginx

```bash
  sudo apt install nginx -y
```
Start the nginx service

```bash
  sudo systemctl start nginx
```
Stop the nginx service

```bash
  sudo systemctl stop nginx
```
Check the status of nginx service

```bash
  sudo systemctl status nginx
```
Configure the nginx default file 
```bash
  sudo nano /etc/nginx/sites-available/default
```
setup upstream and set location so that nginx can route the request
```bash
upstream backend {
        server 44.203.169.178:3000;  # <ip of server 1:port> backend server 1
        server 54.163.131.197:3000; # <ip of server 1:port>backend server 2
}
server {
.......
........

  location / {
                proxy_pass http://backend;           #pass he request to upstream groups
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}
.......
......
```

Check for any syntax issue
```bash
  sudo nginx -t
```
Finally reload the nginx
```bash
  sudo sytemctl reload nginx
```

## Simply visit the nginx ip and check if we are getting routed to the server 
hhtp://<nginx-server-ip>



