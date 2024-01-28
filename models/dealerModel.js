// models/dealership.js

const mongoose = require("mongoose");

const dealershipSchema = new mongoose.Schema({
  applicantDetails: {
    fullName: {
      type: String,
      required: true,
    },
    educationQualification: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
  },
  existingBusinessDetails: {
    existingBusiness: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    turnover: {
      type: String,
      required: true,
    },
  },
  locationAppliedFor: {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  proposedPremisesDetails: {
    stateOfProposedLocation: {
      type: String,
      required: true,
    },
    areaOfProposedLocation: {
      type: String,
      required: true,
    },
    proposedPremisesAddress: {
      type: String,
      required: true,
    },
    frontageOfProposedLocation: {
      type: String,
      required: true,
    },
    proposedAmountToInvest: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
});

const Dealership = mongoose.model("Dealership", dealershipSchema);

module.exports = Dealership;
