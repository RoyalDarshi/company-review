const path=require("path");

const rootDir=require("../util/path");
const Company=require("../model/company");
const Rating=require("../model/rating");

module.exports.sendFile=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","index.html"))
}

module.exports.createRating=async (req,res,next)=>{
    const name=req.body.name;
    const pros=req.body.pros;
    const cons=req.body.cons;
    const rate=req.body.rating;
    await Company.findAll({where:{name:name}}).then(async comp => {
        let cid = 0;
        //console.log(comp[0])
        if (!comp[0]) {
            console.log("condition verified")
            await Company.create({name: name}).then(data => {
                console.log(data)
                cid = data.dataValues.id;
            }).catch(err => {
                console.log(err);
            })
        }
        if (cid === 0) {
            console.log(comp)
            cid = comp[0].dataValues.id;
        }
        await Rating.create({pros: pros, cons: cons, rating: rate, companyId: cid})
        res.status(201).json({comp})
    })
}

module.exports.getRating=(req,res,next)=>{
    const name=req.params.name;
    Company.findAll({where:{name:name}}).then(data=>{
        if(!data[0]){
            return res.status(201).json(undefined);
        }
        Rating.findAll({where:{companyId:data[0].dataValues.id}}).then(data1=>{
            res.status(201).json({company:data[0],rating:data1});
        })
    })
}