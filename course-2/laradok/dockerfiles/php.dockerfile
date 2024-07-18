FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

#COPY ./src /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

#CMD  php artisan migrate --seed

#RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
#
#USER laravel