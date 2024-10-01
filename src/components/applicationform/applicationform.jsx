import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Typography, Box } from '@mui/material';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        applyFor: '',
        candidateName: '',
        fatherName: '',
        dob: '',
        gender: 'Male',
        mobileNumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        qualification: {
            tenth: { school: '', year: '', percentage: '' },
            twelfth: { school: '', year: '', percentage: '' },
            degree: { school: '', year: '', percentage: '' },
        },
        files: {
            passport: '',
            class10th: '',
            aadhar: '',
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name.includes('.')) {
            const [mainField, subField] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [mainField]: {
                    ...prevData[mainField],
                    [subField]: value,
                },
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const HandileformSubmit = () => {
        console.log(formData)
        alert(JSON.stringify(formData))
    }

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            files: {
                ...prevData.files,
                [name]: file,
            },
        }));
    };

    return (
        <>
            <div className='p-3 p-sm-0 d-flex justify-content-center'>
                <div className=' w-75 px-5 p-sm-0'>
                    <div className='p-4 mb-3 fs-2 text-center'>
                        <div>Application from for merchant navy</div>
                        <div>Application FORADMISSION IN MARINE TRAINING</div>
                    </div>
                    <Box p={2} borderColor="primary.main" style={{ backgroundColor: '#F8F9FA' }}>
                        {/* Personal Details */}
                        <Typography variant="h6" component="h2" className='text-light p-2' sx={{ mb: 2, bgcolor: '#0486AA' }}>
                            Personal Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', alignItems: 'center' }} >
                                <div className='fw-medium me-2' >Apply for post</div>
                                <TextField
                                    required
                                    label="Apply for post"
                                    name="applyFor"
                                    value={formData.applyFor}
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
                                    value={formData.candidateName}
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
                                    value={formData.fatherName}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* Date of birth */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Date of birth"
                                    name="dob"
                                    placeholder="DD-MM-YY"
                                    value={formData.dob}
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
                                    value={formData.gender}
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
                                    value={formData.mobileNumber}
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
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        {/* Address of Candidates */}
                        <Typography variant="h6" component="h2" className='text-light p-2 mt-5' sx={{ mb: 2, bgcolor: '#0486AA' }}>
                            Address of Candidates
                        </Typography>
                        <Grid container spacing={3}>
                            {/* Address */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* City */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* State */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* Postal Code */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Postal Code"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        {/* Educational Qualification */}
                        <Typography variant="h6" component="h2" className='text-light p-2 mt-5' sx={{ mb: 2, bgcolor: '#0486AA' }}>
                            Educational Qualification
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>Exam passed</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>School/college</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>Year of passing</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>Percentage%</div>
                            </Grid>
                            {/* 10th Qualification */}
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>10 th</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="10th School/College"
                                    name="qualification.tenth.school"
                                    value={formData.qualification.tenth.school}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Year of Passing"
                                    name="qualification.tenth.year"
                                    value={formData.qualification.tenth.year}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Percentage"
                                    name="qualification.tenth.percentage"
                                    value={formData.qualification.tenth.percentage}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>

                            {/* 12th Qualification */}
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>12 th</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="12th School/College"
                                    name="qualification.twelfth.school"
                                    value={formData.qualification.twelfth.school}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Year of Passing"
                                    name="qualification.twelfth.year"
                                    value={formData.qualification.twelfth.year}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    required
                                    fullWidth
                                    label="Percentage"
                                    name="qualification.twelfth.percentage"
                                    value={formData.qualification.twelfth.percentage}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>

                            {/* IT/Diploma Qualification */}
                            <Grid item xs={12} sm={3}>
                                <div className=' text-dark-subtle fw-medium'>IT/Diploma</div>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Degree"
                                    name="qualification.degree.school"
                                    value={formData.qualification.degree.school}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Year of Passing"
                                    name="qualification.degree.year"
                                    value={formData.qualification.degree.year}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <input
                                    fullWidth
                                    label="Percentage"
                                    name="qualification.degree.percentage"
                                    value={formData.qualification.degree.percentage}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    className='form-control border border-1 border-dark'
                                />
                            </Grid>
                        </Grid>

                        {/* File Upload Section */}
                        <Typography variant="h6" component="h2" className='text-light p-2 mt-5' sx={{ mb: 2, bgcolor: '#0486AA' }}>
                            Upload Picture <span style={{ fontSize: '14px' }}>(*Select image of less than 2MB)</span>
                        </Typography>
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    name="passport"
                                    accept=".jpg"
                                    onChange={handleFileChange}
                                />
                                <Typography variant="caption">Upload your passport size picture (.jpg)</Typography>
                            </Grid>
                            <hr />
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    name="class10th"
                                    accept=".jpg"
                                    onChange={handleFileChange}
                                />
                                <Typography variant="caption">Upload your class 10th certificate (.jpg)</Typography>
                            </Grid>
                            <hr />
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    name="aadhar"
                                    accept=".jpg"
                                    onChange={handleFileChange}
                                />
                                <Typography variant="caption">Upload your Aadhar card (.jpg)</Typography>
                            </Grid>
                        </Grid>
                        <hr />
                        <div className='mt-5'>
                            <div className=' fw-medium'>Declaration:</div>
                            <div className='text-gray'>I declare that the particular furnished above are true to the best of my knowledge and belief and whenever called for the records shall be furnished.</div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary px-5 py-2 mt-4' onClick={HandileformSubmit}>Submit</button>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default ApplicationForm;
