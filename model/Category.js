const { DataTypes } = require('sequelize');
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
        }
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
  );

  Category.belongsToMany(Post, { as: 'Post', through: { model: Post_Category }, foreignKey: 'post_id' });
  module.exports = Category;