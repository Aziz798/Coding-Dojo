const Jokes = require('../models/jokes');

module.exports.createJoke=(req,res)=>{
    Jokes.create(req.body).then(joke=>res.json(joke)).catch(err=>res.json(err));
};

module.exports.seeAllJokes=(req,res)=>{
    Jokes.find().then(allJokes=>res.json(allJokes)).catch(err=>res.json(err));
};

module.exports.seeOneJoke=(req,res)=>{
    Jokes.findById({_id:req.params.id}).then(oneJoke=>res.json(oneJoke)).catch(err=>res.json(err));
};

module.exports.deleteOneJoke=(req,res)=>{
    Jokes.deleteOne({_id:req.params.id}).then(result=>res.json(result)).catch(err=>res.json(err));
};

module.exports.updateJoke=(req,res)=>{
    Jokes.updateOne({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(onePirate=>res.json(onePirate)).catch(err=>res.json(err));
};

module.exports.getOneRandomJoke = (req, res) => {
    Jokes.countDocuments().exec((err, count) => {
        if (err) {
            return res.json(err);
        }
        const randomIndex = Math.floor(Math.random() * count);
        Jokes.findOne().skip(randomIndex)
            .then(randomJoke => res.json(randomJoke))
            .catch(err => res.json(err));
    });
};
