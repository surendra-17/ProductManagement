/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'products',
  primaryKey: 'id',
  attributes: {
    name: {
      type: 'string',
      required: true,
      columnType: 'varchar(100)',
      columnName: 'name'
    },
    productCode: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'product_code'
    },
    description: {
      type: 'string',
      allowNull: true,
      columnName: 'description'
    },
    price: {
      type: 'number',
      required: true,
      columnType: 'FLOAT',
      columnName: 'price'
    }
  }

};
