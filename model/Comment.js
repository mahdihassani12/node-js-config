const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db");
const User = require("./User");
const Post = require("./Post");

const Comment = sequelize.define("comments", 
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
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
  
  Post.hasMany(Comment, {
    foreignKey: {
      name: "post_id",
      allowNull: false,
      as: "user"
    }
  });

  User.hasMany(Comment, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
      as: "user"
    }
  });
  module.exports = Comment;