const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db");
const User = require("./User");
const Comment = require("./Comment");

const Category = require("./Category"); 
const Post_Category = require("./Post_Category"); 

const Post = sequelize.define("posts", 
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
        description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
  );

  User.hasMany(Post, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
      as: "user"
    }
  });

  Category.belongsToMany(Post, { as: 'Post', through: { model: Post_Category }, foreignKey: 'post_id' });

  Comment.belongsTo(Post);
  module.exports = Post;