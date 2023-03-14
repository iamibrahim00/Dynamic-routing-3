const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product])=>{
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title,
      path: '/products'
    });
  }).catch(err => console.log(err))
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData])=>{
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    }).catch(err => console.log(err))
  };


exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getContact = (req, res, next) => {
  res.render('contact', {
    path: '/contact',
    pageTitle: 'Contact Details'
  });
};

exports.postContact = (req, res, next) => {
  res.redirect('/success') 
 
};
exports.getsuccess = (req, res, next) => {
  res.render('success', {
    pageTitle: 'success',
    path: '/success',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
 
};
 