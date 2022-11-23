const { Sequelize , DataTypes } = require('sequelize');
const sequelize = require("../utils/db");

const Post_Category = sequelize.define("posts_categories", 
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id:{
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

  module.exports = Post_Category;