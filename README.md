# Módulos Javascript

Os módulos são um padrão de projeto que ajuda a manter as unidades de código de um projeto separadas e organizadas de maneira limpa (OSMANI, 2012).

Em JavaScript temos várias formas de implementar um módulo.

## Módulos no mesmo arquivo

Não tem uma estratégia para separar o código em vários arquivos.

### Objeto literal

Um ojbeto literal ou de notação literal é quando fazemos um objeto em JS usando `{}`, a forma mais comum de usar. Um objeto permite ser externamente alterado.

```js
const weAreTheChampionsMusic = {
  lyrics: 'we are the champions, my friend...',

  sing: function() {
    console.log(this.lyrics);
  }
};

// we are the champions, my friend...
weAreTheChampionsMusic.sing();

weAreTheChampionsMusic.lyrics = 'We are the champions, my friends. And we'll keep on fighting till the end.'

// We are the champions, my friends. And we'll keep on fighting till the end.
weAreTheChampionsMusic.sing();
```

O objeto como módulo foi incorporado pela função auto contida.

### Função auto invocada

É uma "evolução do objeto literal, pois evita acessos externos e permite valores privados. Tudo que pode ser acessado vai no retorno da função. Essa técnica simula como é com uma classe com métodos e atributos públicos e privados.

```js
const Counter = (function () {
  let counter = 0;
  
  function increment() {
    counter++;
  }
  
  function reset() {
    counter = 0;
  }
  
  function print() {
    console.log(counter);
  }
  
  return {
    increment,
    reset,
    print,
  }
})();

// 0
Counter.print();

// undefined
Counter.counter;

Counter.increment();

// 1
Counter.print();
```

Essa abordagem é muito usada em GTM

```js
;(function() {

})();
```

## Módulos multi arquivos

Agora através de técnicas, ferramentas e novas especificações é possível separar o código em vários arquivos.

- Global
- AMD
- CommonJS
- UMD
- SystemJS
- Nativo / ES6 / Vanilla

### Global

Criar "namespaces" globais. Jquery, Inputmask, RequireJS são módulos que são colocados no objeto window.

Essa abordagem ainda é muito utilizada, principalmente para tornar o código compatível com navegadores antigos.

Para quem for fazer manualmente essa implementação, é recomendado ter cuidado com a nomenclatura das variáveis globais, principalmente encapsular tudo em uma variável com um nome mais específco. Por exemplo criar um objeto global com o nome `MyGlobalModuleXPTO`, e tudo mais que for do projeto incluir ali. É importante isso ser seguido, se não pode acontecer a substituição ou modificação de alguma variável importante para outras partes da aplicação. Um exemplo de acontecido disso foi com a variável "declare" que é usada pela biblioteca RequireJS, e uma equipe inexperiente criou globalmente uma variável com o mesmo nome.

#### Aplicações

- GTM
- Fornecer dados a terceiros

> Somente declarar uma variável torna-a global, ou precisa incluir no objeto window?

**Exemplo da função import usando webpack:** quando colocamos na configuração do webpack para ele gerar módulos globais ele gera o código abaixo, que nada mais é que ir inserindo tags scrips no HTML e deixar tudo global. Obviamente o Webpack vem preparado para nao dar conflitos de nomenclatura que já foi mencionado acima.

```js
// start chunk loading
var script = document.createElement('script');
script.src = jsonpScriptSrc(chunkId);
```

**Exemplo do resultado de uma dependência do RequireJS**

```html
<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="counter.js" src="counter.js"></script>
```

Por baixo dos panos as ferramentas de módulos fazem a mesma coisa, `<script></script>` e colocam o conteúdo no objeto global (window).

### AMD (Asynchronous Module Definition)

[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) é uma especificação para definição de módulos e dependências assíncronas.

```js
define(id?, dependencies?, factory);
```

Variáveis globais **define**, **require**.

#### Implementações

- [RequireJS](https://requirejs.org/)
- [curl.js](https://github.com/cujojs/curl)

### CommonJS

```js
module.exports = counter; // equivalente a export default
// export.counter = counter; // equivalente a export counter

var counter = require('./counter');
var $ = require('jquery');
```

Módulos server-side, proposto pelo grupo [CommonJS](http://www.commonjs.org/). Não precisa de funções "wrappers", pois não tem window.

É usado para gerar bibliotecas que são publicadas no npm.

#### Implementações

Usado nativamente no Node.js. Ou no front fazendo transpilando para outro formato.

- [Webpack](https://webpack.js.org/)
- [Browserify](http://browserify.org/)

### UMD

Criado por Addy Osmany, escritor do livro *Learning JavaScript Design Patterns*, criou esse modelo de módulo para ser compatível todas as abordagens de módulos que existiam até o momento, AMD, CommonJS, Objeto Global.

```js
function ( root, factory ) {
    if ( typeof exports === 'object' ) {
        // CommonJS
        factory( exports, require('b') );
    } else if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( ['exports', 'b'], factory);
    } else {
        // Browser globals
        factory( (root.commonJsStrict = {}), root.b );
    }
}(this, function ( exports, b ) {
    //use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```

### ES6 Módulos

- Precisa de servidor
- Não é de escopo global

Para que continue funcionando em navegadores que não tenham ES2015 podemos transpilar esse código com Typescript.
O formato UMD é especial para isso, pois funcionará tanto por uma ferramenta de build como webpack como também funcionará diretamente importada por um módulo AMD.
```json
{
  "compilerOptions": {
    "module": "umd",
    "outDir": "dist",
    "allowJs": true
  },
  "files": [
    "src/index.js",
    "src/counter.js"
  ]
}
```

ou

Babel
```json
"@babel/cli": "^7.6.0",
"@babel/core": "^7.6.0",
"@babel/plugin-transform-modules-umd": "^7.5.0",
"@babel/preset-env": "^7.6.0"
```

```json
{
  "plugins": ["@babel/plugin-transform-modules-umd"]
}
```

```json
"start": "babel src -d dist"
```

## Referências

- OSMANY, A. Learning JavaScript Design Patterns. Versão 1.7.0. O’Reilly Media, 2012. Disponível em: <https://addyosmani.com/resources/essentialjsdesignpatterns/book/>
- ALMAN, B. Immediately-Invoked Function Expression (IIFE). Disponível em: <http://benalman.com/news/2010/11/immediately-invoked-function-expression/>
- [Módulos globais avançados](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

## Respostas

- **Somente declarar uma variável torna-a global, ou precisa incluir no objeto window?** Sim e justamente por isso colocamos tudo que fazemos dentro de módulo, para não haver concorrências no objeto global.
