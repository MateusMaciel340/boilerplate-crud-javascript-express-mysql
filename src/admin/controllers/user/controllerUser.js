const models = require("../../../sequelize/models");

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
    }
}