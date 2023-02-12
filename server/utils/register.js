const user = require('../models/User');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { ApolloServerPluginUsageReportingDisabled } = require('apollo-server-core');

  const handleNewUser = async (req, res) => {
   const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'})

        //  check for duplicate username in db
        const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //conflict

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd,10);
        //create and store the new user
        const result = await User.create({
            "username": user,
            "password": hashedPwd
        });

        console.log(result);
      
        res.status(201).json({'success':'New user ${user} created'});
    } catch (err) {
        res.status(500).json({ 'messege': err.messege});
    }
}

module.exports = {handleNewUser};