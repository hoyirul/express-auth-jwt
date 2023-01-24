exports.allAccess = (req, res) => {
  res.status(200).json({
    message: 'success',
    role: 'Public Access',
  });
};
  
exports.userBoard = (req, res) => {
  res.status(200).json({
    message: 'success',
    role: 'User Access',
  });
};
  
exports.adminBoard = (req, res) => {
  res.status(200).json({
    message: 'success',
    role: 'Admin Access',
  });
};

exports.adminPost = (req, res) => {
  res.status(201).json({
    message: 'METHOD POST was successfuly!',
  });
};

exports.moderatorBoard = (req, res) => {
  res.status(200).json({
    message: 'success',
    role: 'Moderator Access',
  });
};