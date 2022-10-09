const models = require("../../../sequelize/models");
const bcryptjs = require("bcryptjs");

module.exports = {
    listingUser: async (req, res) => {
        try {
            const listingUser = await models.User.findAll();

            res.status(200).json(listingUser);
        } catch (error) {
            res.status(500).json("An unexpected error has occurred!");
        }
    },
    async searchingUser(req, res) {
        try {
            const { id } = req.params;

            const searchingUser = await models.User.findAll({
                where: {
                    id
                }
            });

            res.status(200).json(searchingUser);
        } catch (error) {
            res.status(500).json("An unexpected error has occurred!");
        }
    },
    async addingUser(req, res) {
        try{
            const {
                username, password
            } = req.body;

            const new_password = bcryptjs.hashSync(password, 10);

            await models.User.create({
                username, password: new_password
            });

            res.status(201).json("User registered successfully!");
        }catch(error){
            res.status(500).json("An unexpected error has occurred!");
        }
    },
    async updatedUser(req, res) {
        try{
            const { id } = req.params;
            const { 
                username, password
            } = req.body;

            const new_password = bcryptjs.hashSync(password, 10);

            await models.User.update({
                username, password: new_password
            }, {
                where: {
                    id
                }
            });

            res.status(201).json("User successfully updated!");
        }catch(error){
            res.status(500).json("An unexpected error has occurred!");
        }
    }
}