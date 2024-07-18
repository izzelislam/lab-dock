FROM php:fpm-alpine

# Install Nginx and Supervisor
RUN apk update && apk add nginx supervisor curl && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    docker-php-ext-install pdo_mysql pdo && \
    rm -rf /var/cache/apk/*

COPY ./config/supervisord.conf /etc/supervisord.conf

COPY ./nginx/default.conf /etc/nginx/nginx.conf

# EXPOSE 80

# * * * * * cd /var/www/sunni_spp && php artisan schedule:run >> /dev/null 2>&1

# Start Supervisor when the container starts
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]