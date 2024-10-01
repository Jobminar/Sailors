import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './login.css';
import img1 from '../../assets/Images/image1.png';
import img2 from '../../assets/Images/image2.png';
import logo from '../../assets/Images/logo.png';
import success from '../../assets/Images/image3.png';
// import bgimg from '../../assets/Images/imagebg.png';

const Login = () => {
    const [timer, setTimer] = useState(30);
    const [showLogin, setShowLogin] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const otpRefs = useRef([null, null, null, null]);

    useEffect(() => {
        let interval;
        if (showLogin && timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev > 0 ? prev - 1 : 0);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [showLogin, timer]);

    const toggleLoginView = () => {
        setShowLogin(!showLogin);
    };

    const handleOtpInput = (event, index) => {
        const value = event.target.value;
        if (value.length === 1 && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1].focus(); // Move to the next input field
        }
    };

    return (
        <>
            <div className={`logingPage  ${showLogin ? 'd-none' : 'd-gird'}`}>
                <div>
                    <img src={img1} className='img' alt="Login Image" />
                </div>
                <div className='py-4 p-4 numberLogin'>
                    <h2 style={{ color: '#0486AA' }} className='logingHeading'>Welcome to SAILORSWAVE</h2>
                    <Formik
                        initialValues={{ userNumber: '' }}
                        validationSchema={yup.object({
                            userNumber: yup.string().matches(/^\d{10}$/, 'Must be exactly 10 digits')
                        })}
                        onSubmit={(values) => {
                            alert('User Number is: ' + values.userNumber);
                            toggleLoginView();
                        }}
                    >
                        {form => (
                            <Form>
                                <div className='mt-5 pt-5 w-75'>
                                    <label>Phone Number<span className='text-danger badge ps-1 mb-3'>*</span></label>
                                    <Field
                                        type='text'
                                        className='form-control w-100 border border-info p-3'
                                        name='userNumber'
                                        placeholder='Enter Your Phone Number'
                                    />
                                    <ErrorMessage name='userNumber' component='div' className='text-danger' />
                                    <div className='text-center'>
                                        <button type="submit" className="btn btn-primary px-5 py-2 mt-4">GET OTP</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className={`verifiloginPage  ${showLogin ? (isSuccessful ? 'd-none':'d-grid'): 'd-none'}`}>
                <div>
                    <img src={img2} className='img' alt="Verification Image" />
                </div>
                <div>
                    <div className='text-center'>
                        <img src={logo} style={{ height: '188px', width: '389px' }} alt="Logo" />
                    </div>
                    <Formik
                        initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '' }}
                        validationSchema={yup.object({
                            otp1: yup.string().required().max(1),
                            otp2: yup.string().required().max(1),
                            otp3: yup.string().required().max(1),
                            otp4: yup.string().required().max(1),
                        })}
                        onSubmit={(values) => {
                            alert('OTP is: ' + Object.values(values).join(''));
                            setIsSuccessful(true);
                        }}
                    >
                        {form => (
                            <Form className='text-center mt-5 pt-5'>
                                <h2 className='text-center mt-4'>Verification</h2>
                                <p className='text-dark-emphasis mb-4'>Enter the 4-digit code sent to your email.</p>
                                <div className='pe-5 d-flex justify-content-center gap-4'>
                                    {['otp1', 'otp2', 'otp3', 'otp4'].map((otp, index) => (
                                        <Field
                                            key={otp}
                                            name={otp}
                                            type='text'
                                            className='form-control border border-1 border-dark-subtle'
                                            style={{ width: '50px', fontSize: '24px', textAlign: 'center' }}
                                            maxLength={1}
                                            innerRef={el => otpRefs.current[index] = el}
                                            onInput={(e) => handleOtpInput(e, index)}
                                        />
                                    ))}
                                </div>
                                <ErrorMessage name='otp1' component='div' className='text-danger' />
                                <div className="timer text-danger text-center mt-3">
                                    {timer > 0 ? `00:${timer.toString().padStart(2, '0')}` : "Time expired"}
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary mt-4 px-5 py-2">Continue</button>
                                </div>
                                <div className='text-center mt-4'>
                                    Didn't receive a code? <span className='text-danger'>Resend</span>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className={` ${isSuccessful ? 'd-flex justify-content-center align-content-center' : 'd-none'} `}>
                <img src={success} alt='Success' height='700px' />
            </div>
        </>
    );
};

export default Login;
