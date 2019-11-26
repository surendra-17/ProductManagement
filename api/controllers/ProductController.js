/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * Show create view for product
   * @param {*} req 
   * @param {*} res 
   */
  create: function (req, res) {
    res.view('pages/product/create');
  },

  /**
   * Show list of products
   * @param {*} req 
   * @param {*} res 
   */
  list: function (req, res) {
    Product.find({}).exec(function (err, products) {
      if (err) {
        res.send(500, 'Database Error');
      }
      res.view('pages/product/list', {
        products: products
      });
    })
  },

  /**
   * Save new product to database
   * @param {*} req 
   * @param {*} res 
   */
  store: function (req, res) {
    product = {
      name: req.body.name,
      productCode: req.body.product_code,
      description: req.body.description,
      price: req.body.price
    };

    Product.create(product).exec(function (err) {
      if (err) {
        res.send(500, "Database Error");
      }
      res.redirect('/product/list');
    });
  },

  /**
   * Delete a product by product id
   * @param {*} req 
   * @param {*} res 
   */
  delete: function (req, res) {
    Product.destroy({
      id: req.params.id
    }).exec(function (err) {
      if (err) {
        res.send(500, "Database Error");
      }
      res.redirect('/product/list');
    });
    return false;
  },

  /**
   * Edit product view
   * @param {*} req 
   * @param {*} res 
   */
  edit: function (req, res) {
    Product.findOne({
      id: req.params.id
    }).exec(function (err, product) {
      if (err) {
        res.send(500, 'Product Not Found');
      }
      res.view('pages/product/edit', {
        product: product
      });
    })
  },

  /**
   * Update product details
   * @param {*} req 
   * @param {*} res 
   */
  update: function (req, res) {
    product = {
      name: req.body.name,
      productCode: req.body.product_code,
      description: req.body.description,
      price: req.body.price
    };

    Product.update({
      id: req.params.id
    }, product).exec(function (err) {
      if (err) {
        res.send(500, "Database Error");
      }
      res.redirect('/product/list');
    });

    return false;
  }
};
