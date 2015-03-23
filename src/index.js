var shelljs = require('shelljs')
var {
  docopt
} = require('docopt')
var promise = require('bluebird')
var _ = require('lodash')
var fs = require('fs')

var getOption = (a, b, def, o) => {
  "use strict"
  if (!_.isUndefined(o[a])) {
    return o[a]
  } else {
    if (!_.isUndefined(o[b])) {
      return o[b]
    } else {
      return def
    }
  }
}



var getOptions = doc => {
  var o = docopt(doc)
  var help = getOption('-h', '--help', false, o)
  return {
    help
  }
}

var doc = fs.readFileSync(__dirname + "/docs/usage.md", 'utf8')

var main = () => {
  var {
    help
  } = (getOptions(doc))
}

main()