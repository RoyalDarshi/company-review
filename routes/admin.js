const express=require("express");

const adminController=require("../controller/admin");

const router=express.Router();

router.get("/",adminController.sendFile);

router.post("/add-rating",adminController.createRating);

router.get("/get-rating/:name",adminController.getRating);

module.exports=router;