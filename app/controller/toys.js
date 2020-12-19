'use strict'

const Toys = require('../models/toys');

module.exports = {
    getToys : getToys ,
    postToys : postToys,
    createToy: createToy,
    getToysById: getToysById,
    deleteToysById: deleteToysById,
    responseToJSON: responseToJSON
};

function getToys(req, res, next) {
    Toys
    .find()    
    .populate('user', 'email name documents.name details.age')
    .exec(function(err, result){
        if(err){
            return res.json(err);
        }
        req.resources.toys = result;
        return next();        
    })
}

function postToys(req, res, next){
    console.log('post toys second midelware', req.body);
    next();
}

function createToy(req, res, next){
    const toys = new Toys(req.body);

    toys.save(function(err, result){
        if(err){
            console.log('error: ', err);
        }
        req.resources.cars = result;
        return next();
    })
}

function getToysById(req, res, next){
    Toys.find({_id:'<id>'}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resources.toys = result;
        return next();
    })
}

function deleteToysById(req, res, next){
    Cars.deleteOne({_id:'<id>'}, function(err, result){
        if(err){
            console.log('toy does not exist', err);
            return res.json(err);
        }
        req.resources.cars = result;
        return next();
    })
}

function responseToJSON(prop) {
    console.log('prop', prop);
  
    return function(req, res, next) {
      return res.json(req.resources[prop]);
    }
  }