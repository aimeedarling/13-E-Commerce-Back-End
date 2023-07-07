// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: '',
  onDelete: 'CASCADE',
})
// Categories have many Products
Categories.hasMany(Product, {
  foreignKey: 'product_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'tag_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
