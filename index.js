var through = require('through2')
var fs = require('fs')
var path = require('path')

module.exports = function(filename, opts) {

  var files = opts && opts.files || opts.f

  console.log("filename", filename, "opts", opts)

  if (typeof files == 'string') {
    files = [files]
  }

  if (!files || !inPaths(filename, files, process.cwd())) {
    return through()
  }

  return through(
    function transform(chunk, enc, next) {
      next()
    },
    function flush(done) {
      delete require.cache[filename]
      var moduleBody = 'module.exports = ' + JSON.stringify(require(filename))
      this.push(moduleBody)
      this.push(null)
      done()
    }
  )
}

function inPaths(file, paths, cwd) {
  return paths.some(function(p){
    return path.resolve(cwd, p) === path.resolve(cwd, file)
  })
}
