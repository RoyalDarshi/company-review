const path=require("path");

const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const db=require("./util/database");
const adminRouter=require("./routes/admin");
const errorController=require("./controller/error");
const Company=require("./model/company");
const Rating=require("./model/rating");

const app=express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.use(adminRouter);

app.use(errorController.pageNotFound);

Rating.belongsTo(Company,{constraints:true,onDelete:"CASCADE"});
Company.hasMany(Rating);

db.sync().then(()=>{
    app.listen(3000);
})