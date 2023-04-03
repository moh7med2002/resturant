const Admin = require('./Admin');
const User = require('./User');
const Market = require('./Market');
const Product = require('./Product');
const Department = require('./Department');
const Rate = require('./Rate');
const Cart = require('./Cart');
const CartProduct = require('./CartProduct');
const Order = require('./Order');
const ProductOrder = require('./ProductOrder');



// market relationship
Market.hasMany(Department);
Market.hasMany(Rate);

// Department relationship
Department.belongsTo(Market);
Department.hasMany(Product);

// product relationship
Product.belongsTo(Department);
Product.belongsToMany(Cart, { through: CartProduct });


// user relationship
User.hasMany(Rate);
User.hasOne(Cart);
User.hasOne(Order);


// rate relationship
Rate.belongsTo(Market);
Rate.belongsTo(User);

// cart relationship
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartProduct });

// order relationship
Order.belongsTo(User);
Order.hasMany(ProductOrder);

// product order relationship
ProductOrder.belongsTo(Order);



module.exports = {
    Admin,
    User,
    Market,
    Department,
    Product,
    Rate,
    Cart,
    CartProduct,
    ProductOrder,
    Order
};