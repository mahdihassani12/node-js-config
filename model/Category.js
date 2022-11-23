const { Sequelize , DataTypes } = require('sequelize');
const sequelize = require("../utils/db");

const Post = require("./Post"); 
const Post_Category = require("./Post_Category"); 

const Category = sequelize.define("categories", 
    {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      title: {
      type: DataTypes.STRING(100),
      allowNull: false
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at:{
          allowNull: false,
          type: Sequelize.DATE, 
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
  );

//   Category.belongsToMany(Post, { as: 'Post', through: { model: Post_Category }, foreignKey: 'category_id' });
  
  module.exports = Category;