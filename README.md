# Módulos Javascript

Os módulos são um padrão de projeto que ajuda a manter as unidades de código de um projeto separadas e organizadas de maneira limpa (OSMANI, 2012).

**Objeto de notação literal**
```js
var myObjectLiteral = {
  variableKey: variableValue,

  functionKey: function () {
    // ...
  }
};
```

O objeto como módulo foi incorporado pela função auto contida.

**Função auto contida:**
```js
var testModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
})();

testModule.incrementCounter();
testModule.resetCounter();
```

Essa abordagem é muito usada em GTM

```js
;(function() {

})();
```

> Qual a diferença dessa abordagem sobre o objeto literal?

## Tipos

- Global
- AMD
- CommonJS
- UMD
- Nativo / ES6 / Vanilla

## Global

Criar "namespaces" globais.
Jquery, Inputmask, RequireJS são módulos que são colocados no objeto window.

### Aplicações

- GTM
- Fornecer dados a terceiros

> Somente declarar uma variável torna-a global, ou precisa incluir no objeto window?

**Exemplo da função import usando webpack:**

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

## AMD (Asynchronous Module Definition)

[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) é uma especificação para definição de módulos e dependências assíncronas.

```js
define(id?, dependencies?, factory);
```

Variáveis globais **define**, **require**.

### Implementações

- [RequireJS](https://requirejs.org/)
- [curl.js](https://github.com/cujojs/curl)

## CommonJS

```js
module.exports = counter; // equivalente a export default
// export.counter = counter; // equivalente a export counter

var counter = require('./counter');
var $ = require('jquery');
```

Módulos server-side, proposto pelo grupo [CommonJS](http://www.commonjs.org/). Não precisa de funções "wrappers", pois não tem window.

É usado para gerar bibliotecas que são publicadas no npm.

### Implementações

Usado nativamente no Node.js. Ou no front fazendo transpilando para outro formato.

- [Webpack](https://webpack.js.org/)
- [Browserify](http://browserify.org/)

## UMD

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

## ES6 Módulos

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

- OSMANY, A. Learning JavaScript Design Patterns. Versão 1.7.0. O’Reilly Media, 2012. [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Módulos globais avançados](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

## Respostas

- **Qual a diferença dessa abordagem sobre o objeto literal?** A função tem seu escopo protegido e pode acessar o seu conteúdo interno.
- **Somente declarar uma variável torna-a global, ou precisa incluir no objeto window?** Sim e justamente por isso colocamos tudo que fazemos dentro de módulo, para não haver concorrências no objeto global.
