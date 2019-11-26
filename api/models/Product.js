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
    name:{
      type:'string',
      required:true,
      columnType:'varchar(100)',
      columnName:'name'
    },
    prductCode:{
      type:'string',
      required:true,
      unique:true,
      columnName:'product_code'
    },
    description:{
      type:'string',
      allowNull: true,
      columnName:'description'
    },
    price:{
      type:'number',
      required:true,
      columnType:'FLOAT',
      columnName:'price'
    },
    productImage:{
      type:'string',
      allowNull: true,
      columnName:'product_image'
    },
    createdAt: {
      type: 'string',
      autoCreatedAt: true,
      columnName: 'created_at',
      columnType: 'datetime'
    },
    updatedAt: {
      type: 'string',
      autoUpdatedAt: true,
      columnName: 'updated_at',
      columnType: 'datetime'
    }
  }

};

