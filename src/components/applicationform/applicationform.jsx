import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ApplicationForm = () => {
  const [files, setFiles] = useState({
    passport: null,
    class10th: null,
    aadhar: null
  });
  const [formDatauser, setFormDatauser] = useState({
    applyFor: '',
    candidateName: '',
    fatherName: '',
    dob: '',
    gender: 'Male',
    mobileNumber: '',
    email: '',
    houseNo: '',
    postOffice: '',
    policeStation: '',
    district: '',
    city: '',
    state: '',
    postalCode: '',
    tenthschool: '',
    tenthyear: '',
    tenthpercentage: '',
    twelfthschool: '',
    twelfthyear: '',
    twelfthpercentage: '',
    degreeschool: '',
    degreeyear: '',
    degreepercentage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDatauser({
      ...formDatauser,
      [name]: value,
    });
    console.log(e.target.value)
  };

  const handleFileChange = (event, key) => {
    const selectedFile = event.target.files[0];
    setFiles((prevFiles) => ({ ...prevFiles, [key]: selectedFile }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const {
      applyFor, candidateName, fatherName, dob, gender, mobileNumber, email, houseNo, postOffice, policeStation, district, city, state, postalCode,
      tenthschool, tenthyear, tenthpercentage, twelfthschool, twelfthyear, twelfthpercentage, degreeschool, degreeyear, degreepercentage,
    } = formDatauser;

    if (!tenthschool || !degreepercentage || !applyFor || !candidateName || !fatherName || !dob || !gender || !mobileNumber || !email || !houseNo || !postOffice || !policeStation || !district || !city || !state || !postalCode || !files.passport || !files.aadhar || !files.class10th) {
      alert('Please fill in all fields and upload all required files.');
      return;
    }

    const formData = new FormData();
    formData.append('applyFor', applyFor);
    formData.append('candidateName', candidateName);
    formData.append('fatherName', fatherName);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('mobileNumber', mobileNumber);
    formData.append('email', email);
    formData.append('houseNo', houseNo);
    formData.append('postOffice', postOffice);
    formData.append('policeStation', policeStation);
    formData.append('district', district);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('postalCode', postalCode);
    formData.append('tenthschool', tenthschool);
    formData.append('tenthyear', tenthyear);
    formData.append('tenthpercentage', tenthpercentage);
    formData.append('twelfthschool', twelfthschool);
    formData.append('twelfthyear', twelfthyear);
    formData.append('twelfthpercentage', twelfthpercentage);
    formData.append('degreeschool', degreeschool);
    formData.append('degreeyear', degreeyear);
    formData.append('degreepercentage', degreepercentage);
    formData.append('passport', files.passport);
    formData.append('class10th', files.class10th);
    formData.append('aadhar', files.aadhar);

    try {
      const response = await fetch('http://localhost:7001/userformsubmit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Reset form
        setFormDatauser({
          applyFor: '', candidateName: '', fatherName: '', dob: '', gender: 'Male', mobileNumber: '', email: '', houseNo: '', postOffice: '', policeStation: '', district: '', city: '', state: '', postalCode: '',
          tenthschool: '', tenthyear: '', tenthpercentage: '', twelfthschool: '', twelfthyear: '', twelfthpercentage: '', degreeschool: '', degreeyear: '', degreepercentage: ''
        });
        setFiles({ passport: null, class10th: null, aadhar: null });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <>
      <div className="p-3 p-sm-0 d-flex justify-content-center">
        <div className=" w-75 px-5 p-sm-0">
          <div className="p-4 mb-3 fs-2 text-center">
            <div>Application Form for Merchant Navy</div>
            <div>Application for Admission in Marine Training</div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <Box
              p={2}
              borderColor="primary.main"
              style={{ backgroundColor: '#F8F9FA' }}
            >
              {/* Personal Details */}
              <Typography
                variant="h6"
                component="h2"
                className="text-light p-2"
                sx={{ mb: 2, bgcolor: '#0486AA' }}
              >
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="fw-medium me-2">Apply for post</div>
                  <TextField
                    required
                    label="Apply for post"
                    name="applyFor"
                    value={formDatauser.applyFor}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Candidate name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Candidate name"
                    name="candidateName"
                    value={formDatauser.candidateName}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Father name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Father name"
                    name="fatherName"
                    value={formDatauser.fatherName}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Date of birth */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    type='date'
                    required
                    fullWidth
                    // label="Date of birth"
                    name="dob"
                    value={formDatauser.dob}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Gender */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Gender"
                    name="gender"
                    value={formDatauser.gender}
                    onChange={handleInputChange}
                    variant="outlined"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>

                {/* Mobile number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Mobile number"
                    name="mobileNumber"
                    value={formDatauser.mobileNumber}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Id"
                    name="email"
                    value={formDatauser.email}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              {/* Address of Candidates */}
              <Typography
                variant="h6"
                component="h2"
                className="text-light p-2 mt-5"
                sx={{ mb: 2, bgcolor: '#0486AA' }}
              >
                Address of Candidates
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="House Number"
                    name="houseNo"
                    value={formDatauser.houseNo}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Post office"
                    name="postOffice"
                    value={formDatauser.postOffice}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Police station"
                    name="policeStation"
                    value={formDatauser.policeStation}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="District"
                    name="district"
                    value={formDatauser.district}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    name="city"
                    value={formDatauser.city}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="State"
                    name="state"
                    value={formDatauser.state}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Postal Code"
                    name="postalCode"
                    value={formDatauser.postalCode}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              {/* Educational Qualification */}
              <Typography
                variant="h6"
                component="h2"
                className="text-light p-2 mt-5"
                sx={{ mb: 2, bgcolor: '#0486AA' }}
              >
                Educational Qualification
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">Exam passed</div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">
                    School/college
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">
                    Year of passing
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">Percentage%</div>
                </Grid>

                {/* 10th Qualification */}
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">10 th</div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="tenthschool"
                    value={formDatauser.tenthschool}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="tenthyear"
                    value={formDatauser.tenthyear}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="tenthpercentage"
                    value={formDatauser.tenthpercentage}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* 12th Qualification */}
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">12 th</div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="twelfthschool"
                    value={formDatauser.twelfthschool}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="twelfthyear"
                    value={formDatauser.twelfthyear}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="twelfthpercentage"
                    value={formDatauser.twelfthpercentage}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Degree Qualification */}
                <Grid item xs={12} sm={3}>
                  <div className=" text-dark-subtle fw-medium">Degree</div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="degreeschool"
                    value={formDatauser.degreeschool}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="degreeyear"
                    value={formDatauser.degreeyear}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    name="degreepercentage"
                    value={formDatauser.degreepercentage}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                component="h2"
                className="text-light p-2 mt-5"
                sx={{ mb: 2, bgcolor: '#0486AA' }}
              >
                UPLOAD PICTURE (*Select image of less than 2mb)
              </Typography>
              <div className='row my-4' style={{ alignContent: "center" }}>
                <dt className='col-6 ms-4 '>Upload your passport size picture (.jpg)</dt>
                <dd className='col-5 '>
                  <input
                    type="file"
                    name="passport"
                    onChange={(e) => handleFileChange(e, 'passport')}
                    multiple
                    className='form-control ms-2'
                  />
                </dd>
              </div>
              <hr />
              <div className='row my-4' style={{ alignContent: "center" }}>
                <dt className='col-6 ms-4 '>Upload your class 10th certificate (.jpg)</dt>
                <dd className='col-5'>
                  <input
                    type="file"
                    name="class10th"
                    onChange={(e) => handleFileChange(e, 'class10th')}
                    multiple
                    className='form-control ms-2'
                  />
                </dd>
              </div>
              <hr />
              <div className='row my-4' style={{ alignContent: "center" }}>
                <dt className='col-6 ms-4 '>Upload your Aadhar card (.jpg)</dt>
                <dd className='col-5'>
                  <input
                    type="file"
                    name="aadhar"
                    onChange={(e) => handleFileChange(e, 'aadhar')}
                    multiple
                    className='form-control ms-2'
                  />
                </dd>
              </div>
              <hr />
              <div>
                <dt className='fs-4 my-3'>Declaration:</dt>
                <dd className='fs-5' style={{ letterSpacing: ".6px" }}>I declare that the particular furnished above are true to the best of my knowledge and belief and whenever called for the records shall be furnished.</dd>
              </div>
              <div className='text-center' >
                <button
                  className="btn text-light px-5 py-2 mt-4"
                  style={{ backgroundColor: "#0486AA" }}
                >
                  Submit
                </button>
              </div>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
};
export default ApplicationForm;
