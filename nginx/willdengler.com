server {
  listen 443 http2 default_server;
  listen [::]:443 http2 default_server;

  root /var/www/html/will-dengler-dot-com;

  index index.html;

  server_name willdengler.com www.willdengler.com;

  location / {
    try_files $uri /index.html;
  }

  # Setup HTTPS
  ssl on;
  ssl_certificate /etc/letsencrypt/live/willdengler.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/willdengler.com/privkey.pem;
}

# Redirect HTTP to HTTPS
server {
  listen 0.0.0.0:80;
  server_name willdengler.com www.willdengler.com;
  rewrite ^ https://$host$request_uri? permanent;
}
