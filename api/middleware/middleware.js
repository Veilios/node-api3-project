function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log("\n Method:", req.method,"\n URL:", req.url, "\n Timestamp:", Date.now());
  next();
};

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = { logger };