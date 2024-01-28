// controllers/dealershipController.js

const Dealership = require('../models/dealerModel');
const nodemailer = require('nodemailer');
// Controller to save form data to the database
exports.saveDealershipData = async (req, res) => {
  try {
    // Extract form data from the request body
    const {
      applicantDetails,
      existingBusinessDetails,
      locationAppliedFor,
      proposedPremisesDetails,
    } = req.body;

  
    // Create a new Dealership document
    const dealership = new Dealership({
      applicantDetails,
      existingBusinessDetails,
      locationAppliedFor,
      proposedPremisesDetails,
    });

    // Save the document to the database
    await dealership.save();

      // Send email to owner
      await sendEmailToOwner(dealership);

    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving dealership data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Helper function to send email
const sendEmailToOwner = async (dealership) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // secure:true,
      auth: {
        user: 'bobby4footprints@gmail.com', // Replace with your email
        pass: 'jsjn qltq fgnf xoty', // Replace with your email password or app-specific password
      },
    });

    const mailOptions = {
      from: `bobby4footprints@gmail.com`,
      to: 'rekhaupreti7890@gmail.com', // Replace with the owner's email
      subject: 'New Booking',
      text: `
        New Dealership Details:
         
        Applicant Details
        Name: ${dealership.applicantDetails.fullName}
        Email: ${dealership.applicantDetails.email}
        EducationQualification: ${dealership.applicantDetails.educationQualification}
        Mobile: ${dealership.applicantDetails.mobileNumber}

        ExistingBusinessDetails
        ExistingBusiness:${dealership.existingBusinessDetails.existingBusiness}
        BusinessName:${dealership.existingBusinessDetails.businessName}
        TurnOver:${dealership.existingBusinessDetails.turnover}

        Location Applied For
        Country: ${dealership.locationAppliedFor.country}
        State: ${dealership.locationAppliedFor.state}
        City: ${dealership.locationAppliedFor.city}
        Pincode: ${dealership.locationAppliedFor.pincode}

        Proposed Premised Details
        StateOfProposedLocation: ${dealership.proposedPremisesDetails.stateOfProposedLocation}
        AreaOfProposedLocation:${dealership.proposedPremisesDetails.areaOfProposedLocation}
        ProposedPremisesAddress: ${dealership.proposedPremisesDetails.proposedPremisesAddress}
        FrontageOfProposedLocation: ${dealership.proposedPremisesDetails.frontageOfProposedLocation}
        ProposedAmountToInvest: ${dealership.proposedPremisesDetails.proposedAmountToInvest}
        Details: ${dealership.proposedPremisesDetails.details}
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};