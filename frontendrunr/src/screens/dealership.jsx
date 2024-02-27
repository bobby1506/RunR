// src/components/DealershipForm.js
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import "./dealership.css";
import Test from "../assets/testdrive.png"
import SwappingSquaresSpinner from './loader';
import { BASE_URL } from '../apiConfig';

const DealershipForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    applicantDetails: {
      fullName: '',
      educationQualification: '',
      email: '',
      mobileNumber: '',
    },
    existingBusinessDetails: {
      existingBusiness: '',
      businessName: '',
      turnover: '',
    },
    locationAppliedFor: {
      country: '',
      state: '',
      city: '',
      pincode: '',
    },
    proposedPremisesDetails: {
      stateOfProposedLocation: '',
      areaOfProposedLocation: '',
      proposedPremisesAddress: '',
      frontageOfProposedLocation: '',
      proposedAmountToInvest: '',
      details: '',
    },
  });

  const config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'VmRaQTAwUmEzN3o2VjJ1U0NOMThuNWVTZjhEZFY3SnQycTFOdURjbw==',
    apiEndpoint: `${BASE_URL}/api/v1/save`, // Replace with your actual API endpoint
    // apiEndpoint: `/api/v1/save`, //for localhost
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = () => {
    axios
      .get(config.cUrl, { headers: { 'X-CSCAPI-KEY': config.ckey } })
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error('Error loading countries:', error));
  };

  const loadStates = async (countryCode) => {
    try {
      const response = await axios.get(`${config.cUrl}/${countryCode}/states`, {
        headers: { 'X-CSCAPI-KEY': config.ckey },
      });
      setStates(response.data);
    } catch (error) {
      console.error('Error loading states:', error);
    }
  };

  const loadCities = async (countryCode, stateCode) => {
    try {
      const response = await axios.get(`${config.cUrl}/${countryCode}/states/${stateCode}/cities`, {
        headers: { 'X-CSCAPI-KEY': config.ckey },
      });
      setCities(response.data);
    } catch (error) {
      console.error('Error loading cities:', error);
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };
  const handleInputcountryChange=(section , field, value, values)=>{
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));

    setSelectedCountry(values);
      setSelectedState('');
      setSelectedCity('');
      loadStates(values);

  }
  const handleInputstateChange=(section , field, value, values)=>{
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));

    setSelectedState(value);
   setSelectedCity('');
    loadCities(selectedCountry, values);

  }
  const handleInputcityChange=(section , field, value, values)=>{
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));

    setSelectedCity(value);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(config.apiEndpoint, formData);
      console.log(response.data);
      alert('Form submitted successfully!');
      setFormData({
        applicantDetails: {
        fullName: '',
        educationQualification: '',
        email: '',
        mobileNumber: '',
      },
      existingBusinessDetails: {
        existingBusiness: '',
        businessName: '',
        turnover: '',
      },
      locationAppliedFor: {
        country: '',
        state: '',
        city: '',
        pincode: '',
      },
      proposedPremisesDetails: {
        stateOfProposedLocation: '',
        areaOfProposedLocation: '',
        proposedPremisesAddress: '',
        frontageOfProposedLocation: '',
        proposedAmountToInvest: '',
        details: '',
      }},)

    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Error submitting form data. Please try again.');
    }
    finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <>
    {loading ? (
      <SwappingSquaresSpinner />
    ) : (
    <div>
       <div className="container_dealer">
       <div className="main_bgtest">
      <img src={Test} alt="" />
      </div>
                 <header>Registration </header>
         <form onSubmit={handleSubmit}>
           <div className="form firsts">
             <div className="detailss personal">
               <span className='title'>Applicant Details</span>

               <div className="fields">
                 {/* Applicant Details Section */}
                 <div className="input-field">
                   <label htmlFor="fullName">Full Name</label>
                   <input
                    type="text"
                    id="fullName"
                    name="applicantDetails.fullName"
                    placeholder="Enter Your Name"
                    value={formData.applicantDetails.fullName}
                    onChange={(e) => handleInputChange('applicantDetails', 'fullName', e.target.value)}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="educationQualification">Education Qualification</label>
                  <input
                    type="text"
                    id="educationQualification"
                    name="applicantDetails.educationQualification"
                    placeholder="Enter Your Qualification"
                    value={formData.applicantDetails.educationQualification}
                    onChange={(e) => handleInputChange('applicantDetails', 'educationQualification', e.target.value)}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="applicantDetails.email"
                    placeholder="Enter Your email"
                    value={formData.applicantDetails.email}
                    onChange={(e) => handleInputChange('applicantDetails', 'email', e.target.value)}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="mobileNumber">Mobile</label>
                  <input
                    type="number"
                    id="mobileNumber"
                    name="applicantDetails.mobileNumber"
                    placeholder="Enter Your number"
                    value={formData.applicantDetails.mobileNumber}
                    onChange={(e) => handleInputChange('applicantDetails', 'mobileNumber', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="detailss ID">
              <span className='title'>Existing Business Details</span>

              <div className="fields">
              <div className="input-field">
                <label htmlFor="existingBusiness">Existing Business</label>
                <input
                  type="text"
                  id="existingBusiness"
                  name="existingBusinessDetails.existingBusiness"
                  placeholder="Existing Business"
                  value={formData.existingBusinessDetails.existingBusiness}
                  onChange={(e) => handleInputChange('existingBusinessDetails', 'existingBusiness', e.target.value)}
                />
              </div>

              <div className="input-field">
                <label htmlFor="businessName">Name of Business</label>
                <input
                  type="text"
                  id="businessName"
                  name="existingBusinessDetails.businessName"
                  placeholder="Enter your business name"
                  value={formData.existingBusinessDetails.businessName}
                  onChange={(e) => handleInputChange('existingBusinessDetails', 'businessName', e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="turnover">Turnover</label>
                <input
                  type="text"
                  id="turnover"
                  name="existingBusinessDetails.turnover"
                  placeholder="Enter your business name"
                  value={formData.existingBusinessDetails.turnover}
                  onChange={(e) => handleInputChange('existingBusinessDetails', 'turnover', e.target.value)}
                />
              </div>
              </div>
              <div className="detailss personal">
                <span className='title'>Location Applied For</span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="country">Country</label>
                    <Select
                      options={countries.map((country) => ({
                        value: country.iso2,
                        label: country.name,
                      }))}
                      value={countries.find((country) => country.iso2 === selectedCountry)}
                      onChange={(selectedOption) => handleInputcountryChange('locationAppliedFor', 'country', selectedOption.label, selectedOption.value)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="state">State</label>
                    <Select
                      options={states.map((state) => ({
                        value: state.iso2,
                        label: state.name,
                      }))}
                      value={states.find((state) => state.iso2 === selectedState)}
                      onChange={(selectedOption) => handleInputstateChange('locationAppliedFor', 'state', selectedOption.label,selectedOption.value)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="city">City</label>
                    <Select
                      options={cities.map((city) => ({
                        value: city.iso2,
                        label: city.name,
                      }))}
                      value={cities.find((city) => city.iso2 === selectedCity)}
                      onChange={(selectedOption) => handleInputcityChange('locationAppliedFor', 'city', selectedOption.label, selectedOption.value)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      name="locationAppliedFor.pincode"
                      placeholder="Enter Your Pincode"
                      value={formData.locationAppliedFor.pincode}
                      onChange={(e) => handleInputChange('locationAppliedFor', 'pincode', e.target.value)}
                    />
                  </div>
                </div>
                </div>
                <div className="detailss personal">
                  <span className='title'>Proposed Premises Details</span>

                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="stateOfProposedLocation">State of Proposed Location</label>
                      <input
                        type="text"
                        id="stateOfProposedLocation"
                        name="proposedPremisesDetails.stateOfProposedLocation"
                        placeholder="State of Proposed Location"
                        value={formData.proposedPremisesDetails.stateOfProposedLocation}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'stateOfProposedLocation', e.target.value)}
                      />
                    </div>

                    <div className="input-field">
                      <label htmlFor="areaOfProposedLocation">Area Of Proposed Location</label>
                      <input
                        type="text"
                        id="areaOfProposedLocation"
                        name="proposedPremisesDetails.areaOfProposedLocation"
                        placeholder="Sq. Feet"
                        value={formData.proposedPremisesDetails.areaOfProposedLocation}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'areaOfProposedLocation', e.target.value)}
                      />
                    </div>

                    <div className="input-field">
                      <label htmlFor="proposedpremisedaddress">Proposed premised address</label>
                      <input
                        type="text"
                        id="proposedpremisedaddress"
                        name="proposedPremisesDetails.proposedPremisesAddress"
                        placeholder="Enter Location"
                        value={formData.proposedPremisesDetails.proposedPremisesAddress}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'proposedPremisesAddress', e.target.value)}
                      />
                    </div>

                    <div className="input-field">
                      <label htmlFor="frontageOfProposedLocation">Frontage of Proposed loaction</label>
                      <input
                        type="text"
                        id="frontageOfProposedLocation"
                        name="proposedPremisesDetails.frontageOfProposedLocation"
                        placeholder="Frontage of Proposed loaction"
                        value={formData.proposedPremisesDetails.frontageOfProposedLocation}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'frontageOfProposedLocation', e.target.value)}
                      />
                    </div>

                    <div className="input-field">
                      <label htmlFor="areaOfProposedLocation">Proposed amount to invest</label>
                      <input
                        type="text"
                        id="proposedAmountToInvest"
                        name="proposedPremisesDetails.proposedAmountToInvest"
                        placeholder="Proposed amount to invest"
                        value={formData.proposedPremisesDetails.proposedAmountToInvest}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'proposedAmountToInvest', e.target.value)}
                      />
                    </div>

                    <div className="input-field">
                      <label htmlFor="areaOfProposedLocation">Details</label>
                      <input
                        type="text"
                        id="areaOfProposedLocation"
                        name="proposedPremisesDetails.details"
                        placeholder="Details"
                        value={formData.proposedPremisesDetails.details}
                        onChange={(e) => handleInputChange('proposedPremisesDetails', 'details', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className='nextBtn'>
                  <span className='btnText' id='submit' disabled={loading}>Submit</span>
                </button>
              </div>
            </div>
        </form>
      </div>

    </div>
      )
    }
    </>)
};

export default DealershipForm;
