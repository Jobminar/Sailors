import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import axios from 'axios'
import logo from '../../../assets/Images/logo.png'
import './contact.css'

const ContactHomepage = () => {
    return (
        <>
            <div>
                {/* bi-geo-alt-fill */}
            </div>
            <div className="contactus">
                <div>
                    <div className="contactuscard">
                        <div className="bi-envelope-fill contactIcon"></div>
                        <div className=" ms-2 fw-medium">EMAIL <br /> email@gmail.com </div>
                    </div>
                    <div className="contactuscard">

                        <div className="bi-phone-fill contactIcon"></div>
                        <div className=" ms-2 fw-medium">PHONE <br />1230456789</div>
                    </div>
                    <div className="contactuscard">
                        <div className="bi-geo-alt-fill contactIcon"></div>
                        <div className="ms-2 fw-medium">
                            Address
                            <br />
                            Hyderabad
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactHomepage">
                <div className="bgcontactus">
                    <div className="Gettotuch">
                        <div className="subGettouch">
                            <div className=" fw-medium fs-3">
                                Get in <span style={{ color: '#F88035' }}>Touch</span>
                            </div>
                            <Formik
                                initialValues={{ userName: '', userEmail: '', userNumber: '', select: '' }}
                                validationSchema={yup.object({
                                    userName: yup.string().required('Please enter your name'),
                                    userEmail: yup.string().email('Invalid email').required('Please enter your email'),
                                    userNumber: yup.number().required('Please enter your number'),
                                    select: yup.string().required('Please select an option'),
                                })}
                                onSubmit={async (userData) => {
                                    try {
                                        await axios.post('http://localhost:7000/gettotuchuser', userData)
                                        alert(userData.userName + ' User Detials is updated successfull')
                                        console.log(userData);
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}
                            >
                                {
                                    form => <Form className="mt-4 p-4">
                                        <div className="mb-3">
                                            <Field name='userName' type='text' placeholder='Your Name' className="form-control w-100" />
                                            <ErrorMessage name="userName" />
                                        </div>
                                        <div className="mb-3">
                                            <Field name='userEmail' type='text' placeholder='Your Email' className="form-control w-100" />
                                            <ErrorMessage name="userEmail" />
                                        </div>
                                        <div className="mb-3">
                                            <Field name='userNumber' type='text' placeholder='Your Number' className="form-control w-100" />
                                            <ErrorMessage name="userNumber" />
                                        </div>
                                        <div>
                                            <Field as="select" className="form-select" name="select">
                                                <option value="-1">Select</option>
                                                <option value="socialmedia">Social Media</option>
                                                <option value="NEW">New</option>
                                            </Field>
                                            <ErrorMessage name="select" component="div" />
                                        </div>
                                        <button className="btn w-100 mt-4" type="submit" style={{ backgroundColor: '#F88035' }}>SEND</button>

                                    </Form>
                                }
                            </Formik>
                            <div className="contexts">
                                <div className="d-flex align-items-center mt-5">
                                    <div className="bi-telephone-outbound fw-normal "> PHONE <br />87906 95737</div>
                                    <div className="bi-envelope ms-3 fw-normal"> EMAIL <br /> info@loidsmarineservices.com</div>
                                </div>
                            </div>

                        </div>
                        <div className="subGettouch d-flex justify-content-center align-content-center p-4 bg-light rounded-3">
                            <img src={logo} className="m-3" />
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
export default ContactHomepage;
