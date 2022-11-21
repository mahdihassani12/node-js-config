const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db");
const Post = require("./Post");
const Comment = require("./Comment");

const User = sequelize.define("users", 
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        remember_me: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
  );

  Post.belongsTo(User);
  Comment.belongsTo(User);
  module.exports = User;