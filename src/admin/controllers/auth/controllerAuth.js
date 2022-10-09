const models = require("../../../sequelize/models");
const jwt = require("jsonwebtoken");
const secret = require("./config/secret");
const bcryptjs = require("bcryptjs");

module.exports = {
    async loginAuth(req, res) {
        try{
            const { username, password } = req.body;

            const user = await models.User.findOne({
                where: {
                    username
                }
            });

            if(!user || !bcryptjs.compareSync(password, user.password)){
                return res.status(400).json("Incorrect username or password");
            }

            const token = jwt.sign({
                id: user.id,
                username: user.username,
                userType: "user"
            }, secret.key);

            res.status(200).json(token);
        }catch(error){
            res.status(500).json("An unexpected error has occurred!");
        }
    }
}