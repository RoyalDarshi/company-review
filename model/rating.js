const Sequelize=require("sequelize");

const sequelize = require("../util/database");

const rating=sequelize.define("rating",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    pros:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cons:{
        type:Sequelize.STRING,
        allowNull: false
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports=rating;