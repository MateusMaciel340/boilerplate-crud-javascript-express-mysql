const models = require("../../../sequelize/models");

module.exports = {
    listingUser: async (req, res) => {
        try{
            const listingUser = await models.User.findAll();
            
            res.status(200).json(listingUser);
        }catch(error){
            res.status(500).json("An unexpected error has occurred!");
        }
    }
}