https://www.songonha.com/2022/12/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04.html

1/ Install Ngins
=> sudo apt install nginx

2/ Install Nodejs 18
=> curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
=> sudo apt-get install -y nodejs
=> node -v (v18.16.0)

3/ Nginx reverse for Node App
=> cd /etc/nginx/sites-available
=> sudo nano ecdsa.saigontoken.com
  (Copy this code to server)
=============================
sudo nano /etc/nginx/sites-available/ecdsa.saigontoken.com
server {
  listen 80;
  listen [::]:80;
  
  root /var/www/ecdsa.saigontoken.com/html;
  index index.html index.htm index.nginx-debian.html;
  
  server_name ecdsa.saigontoken.com;
  
  location / {
    proxy_pass http://localhost:5173;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    
  }
}
=========================
=> sudo unlink default
=> sudo ln -s /etc/nginx/sites-available/ecdsa.saigontoken.com /etc/nginx/sites-enabled/
=> sudo systemctl status nginx.service
  
  
