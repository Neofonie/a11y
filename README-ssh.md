# Wenn der Service von alleine starten soll nach dem neustart musst du ihn enable setzen:

systemctl enable nginx.service
systemctl start nginx.service
systemctl status nginx.service

# kann man sich auch anschauen ob der port auf ist mit

netstat -tulpn

# wenn du ihn wieder deaktiviert moechtest dann:

systemctl disable nginx.service

## Validieren config
nginx -t

## Restart
systemctl restart nginx
systemctl reload nginx

## Nginx Config
cd etc/nginx/sites-available/
nano default

```
map $query_string $proxy_host {
"~^url=(.*)" $1;
default $query_string;
}

server {

        listen 443 ssl;
        server_name a11y.neofonie.de;

        root /var/www/html;
        index index.html;

        ssl_certificate /etc/ssl/neofonie/fullchain.pem;
        ssl_certificate_key /etc/ssl/neofonie/privkey.pem;

        # a11y.neofonie.de/cors-hirse?url=google.com

        location /cors-ng {
          rewrite ^/cors-ng(.*) /$1 break;
          resolver 8.8.8.8 valid=1h;
          proxy_pass https://$proxy_host;
        }

        location /cors-js {
          rewrite ^/cors-js(.*) /$1 break;
          proxy_pass_request_headers on;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_pass http://a11y.neofonie.de:8443/https://$proxy_host;
        }

        location /cors {
           proxy_pass http://a11y.neofonie.de:1337;
        }
}
```
