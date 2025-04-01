const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewContoller = require("../controllers/reviews.js");

//review post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewContoller.createReview)
);
//review delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewContoller.destroyReview)
);

module.exports = router;
