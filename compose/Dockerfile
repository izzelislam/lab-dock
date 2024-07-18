FROM php:8.1-fpm
LABEL authors="bangfkr"

#vreate user as root
RUN usermod -u 1000 www-data

USER www-data

WORKDIR /var/www

COPY ./src .

EXPOSE 9000
CMD sudo ["php-fpm"]