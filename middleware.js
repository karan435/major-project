const Listing = require("./models/listing.js");
const expressError = require("./utils/expressError.js");

const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");


module.exports.isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()) {
      // redirectUrl save 
      req.session.redirectUrl = req.originalUrl;
      req.flash("error", "you must be logged in to create,update and delete listing!");
      return res.redirect("/login");
    }
    next();
};


module.exports.saveRedirectUrl = (req,res,next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};


module.exports.isOwner = async(req,res,next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing.owner._id.equals(res.locals.currentUser._id)) {
      req.flash("error", "you are not the owner of this listing!");
      return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  // console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  // console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};



module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);

  if (!review.author._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "you are not the aothor of this review!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};