var through = require('through2')
var fs = require('fs')
var path = require('path')
var minimatch = require('minimatch')

module.exports = function(filename, opts) {
  var files = opts && opts.files || opts.f

  if (typeof files == 'string') {
    files = [files]
  }

  if (!files || !inPaths(filename, files)) {
    return through()
  }

  return through(
    function transform (chunk, enc, next) {
      next()
    },
    function flush (done) {
      delete require.cache[filename]
      var moduleBody = 'module.exports = ' + JSON.stringify(require(filename))
      this.push(moduleBody)
      this.push(null)
      done()
    }
  )
}

function inPaths(file, paths) {
  return paths.some(function(path){
    return minimatch(file, path)
  })
}
