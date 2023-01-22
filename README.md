# ImBrad.com

This repo is a [personal portfolio site](http://imbrad.com) that demonstrates my knowledge in technologies such as Angular 2, ES6, Typescript, CSS/SASS, Docker, Continuous Integration, etc.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Docker and continuous integration

Commits pushed to this remote will trigger an automated deployment at cloud.docker.com.  [Watchtower](https://github.com/v2tec/watchtower) is installed on my server and pulls down new docker images when necessary. 


If you want to run image on your local machine you can change into root directory and:

```
$ docker build -f Dockerfile -t imbrad .
```


Then start the container.

```
$ docker rm -fv imbrad; docker run -d \
--name=imbrad \
-p 80:80 \
-p 443:443 \
that1guy/imbrad
```

You can also start the container in conjunction with [nginx-proxy container](https://github.com/jwilder/nginx-proxy) and the companion [lets-encrypt container](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) 

```
docker rm -fv imbrad; docker run -d \
--name=imbrad \
-e VIRTUAL_PORT=32400 \
-e VIRTUAL_HOST=imbrad.com,*.imbrad.com \
-e LETSENCRYPT_HOST=imbrad.com,*.imbrad.com \
-e LETSENCRYPT_EMAIL=myemail@email.com \
-e HTTPS_METHOD=noredirect \
-p 1234:80 \
that1guy/imbrad
```

triggering GH action
