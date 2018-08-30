module.exports = (app) => {
    const User = require('../models/user.model.js');
//validation
    app.post('/login', function(req ,res) {
        var name = req.body.username;
        var pass = req.body.password;
         User.findOne({username: name, password: pass}, function(err, user) {
            if(err) {
                console.log(err);
                return res.status(500).send("It is not valid");
            }
            if(user) {
                return res.status(200).send(user);
            }
            return res.status(401).send({"message":"User is unauthorized"});
        });
    });
    
    app.post('/signup', function(req, res){
         const user = new User({
<<<<<<< HEAD
=======
        userid: req.body.userid,
>>>>>>> 1de99c9... all commited!
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    });

    // Save User in the database
    user.save()
    .then(data => {
        console.log("User added successfully")
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
    });

    // Retrieve all Users
    app.get('/findallUsers', function(req, res){
         User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
    });

    // Retrieve a single User with userId
    app.get('/findoneUser/:userId', function(req, res){
         User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
    });

    // Update a User with userId
    app.put('/updateUser/:userId', function(req, res){
         User.findByIdAndUpdate(req.params.userId, {
<<<<<<< HEAD
=======
        userid: req.body.userid,
>>>>>>> 1de99c9... all commited!
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
    });

    // Delete a User with userId
    app.delete('/deleteUser/:userId', function(req, res){
        User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
});
};
    
