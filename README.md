# evalify

browserify transform to eval modules before exporting.

stolen from [mmckegg/web-audio-school](https://github.com/mmckegg/web-audio-school/blob/master/lib/evalify.js).

## how to

### install

```bash
npm i --save evalify
```

### use

using the `browserify` cli:

```
browserify entry.js -t [ evalify -f to-eval.js ]
```

using your `package.json`:

```
"transform": [
  ["evalify", { files: [ "to-eval.js" ] } ]
]
```

### test

```
npm test
```

## license

ISC
