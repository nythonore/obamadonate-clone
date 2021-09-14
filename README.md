# Obama Donate Clone UI

This repository contains code for Obama Donate (landing page and payment page) UI in ReactJS and Bootstrap.\
view demo: https://works.nythonore.me/obamadonate

![alt text](https://nythonore.me/work/obamadonate.png)

### Prerequisites
Make sure you have already installed Docker Engine. You don’t need to install Nginx or YARN, as both are provided by Docker images.

```
$ docker -v
Docker version 20.10.7, build f0df350
```

### Installing

```
$ git clone https://github.com/nythonore/obama-donate-clone.git
```

```
$ cd nythonore-web
```

```
$ docker-compose -f docker-compose.prod.yml build
```

```
$ docker run -p 80:80 --name nythonore-prod nythonore-prod
```

Go to [http://localhost](http://localhost)

### Built With
* [ReactJS](https://reactjs.org/) - Front-end Framework
* [React Bootstrap](https://react-bootstrap.github.io/) - CSS Framework
* [Nginx](https://nginx.org/en/) - Web Server
* [Docker](https://www.docker.com/) - Containerization

### Author

**Honore Niyitegeka** (https://nythonore.me)

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
