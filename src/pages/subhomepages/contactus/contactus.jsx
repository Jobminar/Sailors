import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import axios from 'axios'

import './contact.css'

const ContactHomepage = () => {
    return (
        <>
            <div className="contactHomepage">
                <div className="bgcontactus border border-2">
                    <div className="Gettotuch">
                        <div style={{ height: '90%', width: '50%' }}>
                            <div className=" fw-medium fs-3">
                                Get in <span style={{ color: '#F88035' }}>Touch</span>
                            </div>
                            <Formik 
                                initialValues={{userName:'',userEmail:'',userNumber:'',select:''}}
                                validationSchema={yup.object({
                                    userName: yup.string().required('Please enter your name'),
                                    userEmail: yup.string().email('Invalid email').required('Please enter your email'),
                                    userNumber: yup.number().required('Please enter your number'),
                                    select: yup.string().required('Please select an option'),
                                })}
                                onSubmit={async (userData)=>{
                                    try{
                                        await axios.post('http://localhost:7000/gettotuchuser',userData)
                                        alert(userData.userName +' User Detials is updated successfull')
                                        console.log(userData);
                                    }catch(error){
                                        console.log(error);
                                    }
                                }}
                            >
                                {
                                    form => <Form className="mt-4">
                                        <div className="mb-3">
                                            <Field name='userName' type='text' placeholder='Your Name' className="form-control w-75" />
                                            <ErrorMessage name="userName" />
                                        </div>
                                        <div className="mb-3">
                                            <Field name='userEmail' type='text' placeholder='Your Email' className="form-control w-75" />
                                            <ErrorMessage name="userEmail" />
                                        </div>
                                        <div className="mb-3">
                                            <Field name='userNumber' type='text' placeholder='Your Number' className="form-control w-75" />
                                            <ErrorMessage name="userNumber" />
                                        </div>
                                        <div>
                                            <Field as="select" className="form-select w-75" name="select">
                                                <option value="-1">Select</option>
                                                <option value="socialmedia">Social Media</option>
                                                <option value="NEW">New</option>
                                            </Field>
                                            <ErrorMessage name="select" component="div" />
                                        </div>
                                        <button className="btn w-75 mt-4" type="submit" style={{backgroundColor:'#F88035'}}>SEND</button>

                                    </Form>
                                }
                            </Formik>
                            <div className="d-flex align-items-center mt-5">
                                <div className="bi-telephone-outbound fs-3 "></div>
                                <div className=" ms-2 fw-medium">PHONE <br />1230456789</div>
                                <div className="bi-envelope ms-3 fs-3"></div>
                                <div className=" ms-2 fw-medium">EMAIL <br /> email@gmail.com </div>
                            </div>

                        </div>
                        <div style={{ height: '90%', width: '50%', backgroundColor:'gray' }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactHomepage;
