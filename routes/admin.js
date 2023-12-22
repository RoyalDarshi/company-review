const express=require("express");

const adminController=require("../controller/admin");

const router=express.Router();

router.get("/",adminController.sendFile);

router.post("/add-rating",adminController.createRating);

<<<<<<< HEAD
router.post("/get-rating",adminController.getRating);
=======
router.get("/get-rating/:name",adminController.getRating);
>>>>>>> 77dcd5b (changes get rating method type)

module.exports=router;