function logProduct(a, b) {
  console.log(a*b);
}

var moduleMessage = 'The product is shown on the console.';

module.exports.logProduct = logProduct;
module.exports.moduleMessage = moduleMessage;
