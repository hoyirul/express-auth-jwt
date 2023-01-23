const Validator = require('fastest-validator');
const { Role, User } = require('../../models');
const v = new Validator();

// for get all data from examples table
const index = async (req, res) => {
  const response = await User.findAll({include: Role});

  res.status(200).json({
    message: true,
    data: response
  });
}

module.exports = {
  index,
}