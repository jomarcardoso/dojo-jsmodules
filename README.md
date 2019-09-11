# Módulos Javascript

## Tipos

- Global
- AMD
- CommonJS
- Nativo / ES6 / Vanilla

## Global

Criar "namespaces" no objeto window.

### Aplicações

- GTM
- import dinâmico com webpack

**Exemplo da função import usando webpack:**

```js
// start chunk loading
var script = document.createElement('script');
script.timeout = 120;
script.src = jsonpScriptSrc(chunkId);

var timeout = setTimeout(function(){
	onScriptComplete({ type: 'timeout', target: script });
}, 120000);
```

## AMD (Asynchronous Module Definition)

[AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) é uma especificação para definição de módulos e dependências assíncronas.

### Implementações

- [RequireJS](https://requirejs.org/)
- [curl.js](https://github.com/cujojs/curl)

## CommonJS

Módulos server-side, proposto pelo grupo [CommonJS](http://www.commonjs.org/). Não precisa de funções "wrappers", pois não tem window.

### Implementações

Apenas fazendo "bundle".

- [Webpack](https://webpack.js.org/)
- [Browserify](http://browserify.org/)

[Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
[Módulos globais avançados](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
