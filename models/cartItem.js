'use strict';

const { INTEGER } = require("sequelize");
const Cart = require("./cart");
const Product = require("./product");

module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  }, {
    tableName: 'cart_items',
    timestamps: false,
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, { foreignKey: 'cartId' });
    CartItem.belongsTo(models.product, { foreignKey: 'productId' });
  };

  return CartItem;
};