const { Sequelize , DataTypes } = require('sequelize');
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

  // Association
  // Post.belongsTo(User);  
  // Post.belongsToMany(Category, { as: 'Post', through: { model: Post_Category }, foreignKey: 'post_id' });
  // Post.hasMany(Comment, {
  //   foreignKey: {
  //     name: "post_id",
  //     allowNull: false,
  //     as: "user"
  //   }
  // });
  module.exports = Post;