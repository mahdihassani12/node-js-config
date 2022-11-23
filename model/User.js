const { Sequelize , DataTypes } = require('sequelize');
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
        username: {
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

  // User.hasMany(Post, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //     as: "user"
  //   }
  // });

  // User.hasMany(Comment, {
  //   foreignKey: {
  //     name: "user_id",
  //     allowNull: false,
  //     as: "user"
  //   }
  // });
  
  module.exports = User;