# Módulos Javascript

Módulo é um padrão de projeto para manter o código separado e organizado.

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

**Hora de codar**

> Somente declarar uma variável torna-a global, ou precisa incluir no objeto window?

Material útil:
```html
  <script
  src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
  crossorigin="anonymous"></script>
```

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

## AMD (Asynchronous Module Definition)

[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) é uma especificação para definição de módulos e dependências assíncronas.

```js
define(id?, dependencies?, factory);
```

Variáveis globais **define**, **require**.

### Implementações

- [RequireJS](https://requirejs.org/)
- [curl.js](https://github.com/cujojs/curl)

**Hora de codar**

Material útil:
```html
  <script data-main="index.js" src="https://requirejs.org/docs/release/2.3.6/minified/require.js"></script>
```

## CommonJS

Módulos server-side, proposto pelo grupo [CommonJS](http://www.commonjs.org/). Não precisa de funções "wrappers", pois não tem window.

### Implementações

Usado nativamente no Node.js. Fazendo bundle ou transpilando para outro formato.

- [Webpack](https://webpack.js.org/)
- [Browserify](http://browserify.org/)

**Hora de codar**

Material útil:
```js
const path = require('path');

exports.default = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist")
  }
}
```

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

**Hora de codar**

> Por que não funcionou?

Material útil:

Typescript
```json
{
  "compilerOptions": {
    "module": "amd",
    "outDir": "dist",
    "allowJs": true
  },
  "files": [
    "src/index.js",
    "src/counter.js"
  ]
}
```

Babel
```json
"@babel/cli": "^7.6.0",
"@babel/core": "^7.6.0",
"@babel/plugin-transform-modules-amd": "^7.5.0",
"@babel/preset-env": "^7.6.0"
```

```json
{
  "plugins": ["@babel/plugin-transform-modules-amd"]
}
```

```json
"start": "babel src -d dist"
```

## Referências

[Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
[Módulos globais avançados](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

## Respostas

Qual a vantagem dessa abordagem sobre objeto literal?
