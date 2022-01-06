# KEPLER

- POC using ngins as reverse-proxy
- Node (Express) + NGINX

- [KEPLER](#kepler)
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
$ git clone https://github.com/faxina-projects/kepler.git
```

- Acesse a pasta do projeto

```bash
$ cd kepler
```

- Build da imagem e criação do container

```bash
$ docker-compose up --build
```

## Acesso

### Aplicação

- nginx: http://localhost:3005
- app: http://localhost:3000
