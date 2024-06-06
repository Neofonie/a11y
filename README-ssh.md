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

