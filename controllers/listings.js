const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  try {
    let { filter, city } = req.query;

    if (city) city = city.toLowerCase(); // Safely lowercase city

    // If a filter is provided
    if (filter) {
      let allListings = await Listing.find({ category: filter });

      if (allListings.length === 0) {
        req.flash("error", "Currently, listings are not available.");
        return res.redirect("/listings"); // Use return to prevent further execution
      }

      return res.render("listings/index.ejs", { allListings }); // Use return here as well
    }

    // If city is provided
    else if (city) {
      let allListings = await Listing.find({
        $or: [
          { location: city },
          { city: city },
          { state: city },
          { country: city },
        ],
      });

      if (allListings.length === 0) {
        req.flash("error", "Currently, listings are not available.");
        return res.redirect("/listings"); // Use return to prevent further execution
      }

      return res.render("listings/index.ejs", { allListings }); // Use return here as well
    }

    // If neither filter nor city is provided
    else {
      let allListings = await Listing.find();
      return res.render("listings/index.ejs", { allListings }); // Return here too
    }
  } catch (err) {
    console.error("Error finding listings:", err);
    req.flash("error", "Something went wrong, please try again.");
    return res.redirect("/listings"); // Return after redirect
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exits");
    res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let newListing = new Listing(req.body.listing);

  let url = req.file.path;
  let filename = req.file.filename;
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing is Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exits");
    res.redirect("/listings");
  }
  let originalImg = listing.image.url;
  originalImg = originalImg.replace(
    "/upload",
    "/upload/h_175,w_150/e_blur:10/"
  );
  res.render("listings/edit.ejs", { listing, originalImg });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing is Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destoryListing = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  req.flash("success", "Listing is Deleted");
  res.redirect("/listings");
};
