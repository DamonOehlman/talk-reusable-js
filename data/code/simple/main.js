// shim String.trim for browsers that don't support it
if (! String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

function sayHello(name) {
  console.log('Hello ' + name.trim() + '!');
}