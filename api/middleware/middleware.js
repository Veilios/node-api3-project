function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log("\n Method:", req.method,"\n URL:", req.url, "\n Timestamp:", Date.now());
  next();
};

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const User = require('../users/users-model');

  const {id} = req.params;
  const user = await User.getById(id);

  try {
    if(user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ message: "user not found" });
    };
  } catch (error) {
    res.status(500).json({ message: "Error processing request", error: error});
  };
  
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost };