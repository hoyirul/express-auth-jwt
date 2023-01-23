const Validator = require('fastest-validator');
const { Role } = require('../../models');
const v = new Validator();

// for get all data from examples table
const index = async (req, res) => {
  const response = await Role.findAll();

  res.status(200).json({
    message: true,
    data: response
  });
}

module.exports = {
  index,
}