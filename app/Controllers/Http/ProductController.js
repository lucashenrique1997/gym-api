'use strict'
const Product = use("App/Models/Product");
const Logger = use("Logger");

class ProductController {
  index() {
    return Product.all();
  }

  async store({request}) {
    const data = request.only(["name", "value", "quantity"]);
    const product = await Product.create(data);

    Logger.info('Produto adicionado!', {
      data: product.toJSON()
    });

    return product
  }
}

module.exports = ProductController
