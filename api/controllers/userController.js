const getProfile = (req, res) => {
    res.json({ message: "User Profile Data", user: req.user });
  };
  
  module.exports = { getProfile };
  