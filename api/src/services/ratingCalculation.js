const { User, Review } = require("../db");

async function ratingUpdate(email) {
  let user = await User.findOne({
    include: { model: Review, as: "reviews" },
    where: {email}
  });
  return user
}

module.exports = {
  ratingUpdate,
};
