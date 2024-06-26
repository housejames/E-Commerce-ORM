// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Assuming category_id is the foreign key in the Product table
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Assuming category_id is the foreign key in the Product table
  onDelete: 'CASCADE'
});

// Categories have many Tags
Category.belongsToMany(Tag, {
  through: 'ProductTag', // Assuming there's a ProductTag table for the many-to-many relationship
  foreignKey: 'category_id', // Assuming category_id is the foreign key in the ProductTag table
  onDelete: 'CASCADE'
});

// Tags belongToMany Categories
Tag.belongsToMany(Category, {
  through: 'ProductTag', // Assuming there's a ProductTag table for the many-to-many relationship
  foreignKey: 'tag_id', // Assuming tag_id is the foreign key in the ProductTag table
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag', // Assuming there's a ProductTag table for the many-to-many relationship
  foreignKey: 'product_id', // Assuming product_id is the foreign key in the ProductTag table
  onDelete: 'CASCADE'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag', // Assuming there's a ProductTag table for the many-to-many relationship
  foreignKey: 'tag_id', // Assuming tag_id is the foreign key in the ProductTag table
  onDelete: 'CASCADE'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
