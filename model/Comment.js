const { Sequelize , DataTypes } = require('sequelize');
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
  
//   Comment.belongsTo(Post);
//   Comment.belongsTo(User);
  module.exports = Comment;