# HALLEY

- POC using node with redis
- Node (Express) + NGINX

- [HALLEY](#halley)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Acesso](#acesso)
    - [Aplicação](#aplicação)

## Requisitos

- [Docker](https://www.docker.com/get-started) (Windows)
- [Docker Compose](https://docs.docker.com/compose/install/) (Linux)

## Instalação

- Clone este repositório

```bash
$ git clone https://github.com/faxina-projects/halley.git
```

- Acesse a pasta do projeto

```bash
$ cd halley
```

- Build da imagem e criação do container

```bash
$ docker-compose up --build
```

## Acesso

### Aplicação

- nginx: http://localhost:3005
- app: http://localhost:3000
