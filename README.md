## NodeJS - Nginx - Docker Example 

Easy Setup HTTPS & Scale Your Server: Nginx NodeJS Docker
See more [Nginx]()

Before All:
  - Make sure you have [Docker](https://www.docker.com) on your machine
  - Good with [NodeJS](https://nodejs.org)

#### Local & Nomal not with Nginx:
```
> yarn start
http://localhost:3000 to see your results
```

#### Docker apply Nginx with NodeJS

###### Set up Nginx

* Generate Certificate
```
> ./nginx/command.sh
```

```
> docker-compose up

https://localhost to see your results
```