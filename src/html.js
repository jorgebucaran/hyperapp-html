var h = require('hyperapp').h

var TAG_NAMES = ['div', 'h1']

TAG_NAMES.forEach(function(tag) {
  Object.defineProperty(exports, tag, { value: function() {
    var args = [], len = arguments.length
    while (len--) args[len] = arguments[len]

    return h.apply(void 0, [tag].concat(args))
  }})
})
