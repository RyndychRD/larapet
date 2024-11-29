FROM php:8.3-fpm

ARG DOCKER_LARAVEL_WORKDIR=${DOCKER_LARAVEL_WORKDIR}
ARG USER_NAME=www-data
ARG GROUP_NAME=www-data
ARG DOCKER_LARAVEL_NODE_MAJOR_VERSION=${DOCKER_LARAVEL_NODE_MAJOR_VERSION}
ARG DOCKER_LARAVEL_USER_ID=${DOCKER_LARAVEL_USER_ID}

# Install system dependencies
RUN apt-get check && apt-get clean && apt-get update && apt-get install -y \
    git \
    curl \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmemcached-dev \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    openssh-server \
    zip \
    unzip \
    supervisor \
    sqlite3  \
    nano \
    cron


# Install Nodejs
RUN apt-get update && apt-get install -y ca-certificates curl gnupg
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$DOCKER_LARAVEL_NODE_MAJOR_VERSION.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update &&  apt-get install nodejs -y


# Install PHP extensions zip, mbstring, exif, bcmath, intl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install  zip mbstring exif pcntl bcmath -j$(nproc) gd intl

# Install the php memcached extension
RUN pecl install memcached && docker-php-ext-enable memcached

# Install the PHP pdo_pgsql extention
RUN docker-php-ext-install pdo_pgsql

# Install PHP Opcache extention
RUN docker-php-ext-install opcache

# Install xdebug
RUN pecl install xdebug-3.4.0beta1

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -Rf /var/www/*

RUN usermod -u ${DOCKER_LARAVEL_USER_ID} ${USER_NAME} && \
 groupmod -g ${DOCKER_LARAVEL_USER_ID} ${GROUP_NAME} && \
 chown -R ${USER_NAME}:${GROUP_NAME} /var/www && \
  chown -R ${USER_NAME}:${GROUP_NAME} /var/log/ && \
  chown -R ${USER_NAME}:${GROUP_NAME} /etc/supervisor/conf.d/ && \
  chown -R ${USER_NAME}:${GROUP_NAME} $PHP_INI_DIR/conf.d/ && \
  chown -R ${USER_NAME}:${GROUP_NAME} /tmp

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR $DOCKER_LARAVEL_WORKDIR

CMD [ "php-fpm" ]