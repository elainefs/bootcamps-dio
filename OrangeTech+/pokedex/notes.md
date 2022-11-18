## Configuração do ambiente

Criar o servido http  
`$ npm install -g http-server`

Subir o servidor http  
`$ http-server ./pasta`

## Normalize CSS
Padronização do CSS para todos os navegadores

É como se fosse um reset do CSS

### normalize.css
O normalize.css pode ser instalado via npm `npm install normalize.css` ou via cdn, usar a primeira opção do site [cdnjs.com](https://cdnjs.com/libraries/normalize)

No cnd, copiar a primeira opção e colar no head do index.html

## Protocolo HTTP

URL: https://pokeapi.co/api/v2/pokemon
     ${IP}/${path = caminho de identificação do recurso}

IP: https://pokeapi.co

PATH: api/v2/pokemon

### Tipos de requisição

Request Method: GET | POST | PUT | DELETE | PATCH

### Query String

URL: https://pokeapi.co/api/v2/pokemon?type=grass&name=1
     ${IP}/${path = caminho de identificação do recurso}${?}

As query string são do tipo chave-valor e inicia com ?, se for usar mais de uma query string usa & para concatenar

### Headers

Request e Response Headers: Configurações

### Body

É o corpo da requisição.  
O GET não possui body.  
