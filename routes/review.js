const express = require("express");
const router = express.Router({mergeParams: true});

const asyncWrap = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


// Reviews - Post review Route

router.post(
  "/",
  isLoggedIn,
  validateReview,
  asyncWrap(reviewController.createReview)
);


//delete review route

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  asyncWrap(reviewController.destroyReview)
);



module.exports = router;