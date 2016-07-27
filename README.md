# evalify

browserify transform to eval modules before exporting.

```bash
npm i --save evalify
```

stolen from [mmckegg/web-audio-school](https://github.com/mmckegg/web-audio-school/blob/master/lib/evalify.js).

## example

given a module:

```js
// cats.js
var catNames = require('cat-names')

var cats = []
for (var i = 0; i < 10; i++) {
  cats.push(catNames.random())
}

module.exports = cats
```

compile using `browserify` using `-t [ evalify -f '**/cats.js' ]`

```shell
browserify ./cats.js -t [ evalify -f '**/cats.js' ]
```

`cats.js` file is transformed to

```js
module.exports = ["Cali","Rascal","Jack","Jasmine","Kitty","Nala","Jack","Cookie","Jack","Buster"]
```

## usage

`evalify` is a browserify transform with the following options:

- `files` (`f`): a list of [`minimatch`](https://github.com/isaacs/minimatch) paths to determine whether to evaluate a given file.

using the `browserify` cli:

```
browserify entry.js -t [ evalify -f '**/to-eval.js' ]
```

using your `package.json`:

```
"transform": [
  ["evalify", { files: [ "**/to-eval.js" ] } ]
]
```

## license

ISC
