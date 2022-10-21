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

            const checkUser = await models.User.findByPk(id);

            if (!checkUser) {
                return res.status(400).json("This user does not exist!");
            }

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
        try {
            const {
                username, password, img
            } = req.body;

            const new_password = bcryptjs.hashSync(password, 10);

            await models.User.create({
                username, password: new_password, img
            });

            res.status(201).json("User registered successfully!");
        } catch (error) {
            if (error.name == "SequelizeUniqueConstraintError") {
                return res.status(403).json("This user is already being used!");
            }

            res.status(500).json("An unexpected error has occurred!" + error);
        }
    },
    async updatedUser(req, res) {
        try {
            const { id } = req.params;
            const {
                username, img
            } = req.body;

            const checkUser = await models.User.findByPk(id);

            if (!checkUser) {
                return res.status(400).json("This user does not exist!");
            }

            await models.User.update({
                username, img
            }, {
                where: {
                    id
                }
            });

            res.status(201).json("User successfully updated!");
        } catch (error) {
            if (error.name == "SequelizeUniqueConstraintError") {
                return res.status(403).json("This user is already being used!");
            }

            res.status(500).json("An unexpected error has occurred!" + error);
        }
    },
    async removeUser(req, res) {
        try {
            const { id } = req.params;

            const checkUser = await models.User.findByPk(id);

            if (!checkUser) {
                return res.status(400).json("This user does not exist!");
            }

            await models.User.destroy({
                where: {
                    id
                }
            });

            res.status(200).json("User successfully removed!");
        } catch (error) {
            res.status(500).json("An unexpected error has occurred!");
        }
    },
    async authenticatedUser(req, res) {
        try {
            res.status(200).json(req.auth);
        } catch (error) {
            res.status(500).json("An unexpected error has occurred!");
        }
    }
}