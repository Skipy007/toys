'use strict'

const express = require('express');
const User = require('../models/users');

module.exports = {
    isAdmin: isAdmin,
    getUsers: getUsers,
	postUsers: postUsers,
    createUser: createUser,
	getUsersById: getUsersById,
    deleteUsersById: deleteUsersById,
    responseToJSON: responseToJSON
};

function isAdmin(req, res, next){										 
    const isAdminVal = true;
    if(isAdminVal){
        return next();
    }
    return res.send('Current user does not have access!');
}

function getUsers(req, res, next){									  
    User.find({"details.role":req.query.role},function(err, result){											 
        if(err){											 
            return res.json(err);
        }
        req.resources.users = result;
        return next();      
    })
}

function postUsers(req, res, next){				 
    console.log('post users second middleware', req.body);
    next();
}						
										   
									 
			  
	

function createUser(req, res, next){
    const addUser = req.body;
    addUser.details = JSON.parse(addUser.details);
    addUser.documents = JSON.parse(addUser.documents);    
    const user = new User(addUser);
    user.save(function(err, result){
        if(err){
            console.log('error:', err);
            return res.json(err);
        }
        req.resources.addUser = result;
        return next();
    })
}

function getUsersById(req, res, next){
    User.find({_id:req.params.id}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resources.users = result;
        return next();
    })
}

function deleteUsersById(req, res, next){												  
    User.deleteOne({_id:'<id>'}, function(err, result){
        if(err){
																	
            return res.json(err);
        }
        req.resources.users = result;
        return next();
    })
}

function responseToJSON(prop) {
    console.log('prop: ', prop);  
    return function(req, res, next) {
      return res.json(req.resources[prop]);    
    }
  }