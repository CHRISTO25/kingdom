import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Row } from 'react-bootstrap';
import FormContainer from '../../../../Components/common/FormContainer';

function Signup() {
    const [name, setName] = useState('');
    const [idName, setIdName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [job, setJob] = useState('');
    const [selectedJob, setSelectedJob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState('');

    const [nameError, setNameError] = useState('');
    const [idNameError, setIdNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [jobError, setJobError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [formError, setFormError] = useState('');

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setEmailError('Email is required');
        } else if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
        const uppercaseLetterPattern = /[A-Z]/;
        const lowercaseLetterPattern = /[a-z]/;
        const numberPattern = /\d/;

        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
        } else if (!uppercaseLetterPattern.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
        } else if (!lowercaseLetterPattern.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter');
        } else if (!numberPattern.test(password)) {
            setPasswordError('Password must contain at least one number');
        } else if (!specialCharacterPattern.test(password)) {
            setPasswordError('Password must contain at least one special character');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword();
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setFormError('');
        setNameError('');
        setIdNameError('');
        setEmailError('');
        setPhoneError('');
        setJobError('');
        setPasswordError('');
        setConfirmPasswordError('');

        if (!name) {
            setNameError('Name is required');
        }

        if (!idName) {
            setIdNameError('IdName is required');
        }

        if (!validatePhoneNumber(phone)) {
            setPhoneError('Invalid phone number');
        }

        if (!selectedJob && !job) {
            setJobError('Please select a job or type a job');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password should be at least 6 characters long');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
        }

        console.log('Form submitted successfully');


       



    };

    return (
        <div className='FormContainer'>
            <FormContainer pos={'fixed'}>
                <h1 className="text-center w-full font-pS">SC Kingdom</h1>
                <Form className='form-manager' onSubmit={submitHandler}>
                    {/* Adjusted styles for form controls */}
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${nameError ? 'is-invalid' : ''}`}
                        />
                        {nameError && <div className="invalid-feedback">{nameError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The IdName"
                            value={idName}
                            onChange={(e) => {
                                setIdName(e.target.value);
                                setIdNameError('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${idNameError ? 'is-invalid' : ''}`}
                        />
                        {idNameError && <div className="invalid-feedback">{idNameError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="email"
                            placeholder="Enter The Email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`w-full max-w-md text-white focus:outline-none ${emailError ? 'is-invalid' : ''}`}
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="number"
                            placeholder="Enter The Number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setPhoneError('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${phoneError ? 'is-invalid' : ''}`}
                        />
                        {phoneError && <div className="invalid-feedback">{phoneError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
                        <Form.Select
                            className={`w-full max-w-md text-white focus:outline-none ${jobError ? 'is-invalid' : ''}`}
                            value={selectedJob}
                            onChange={(e) => {
                                setSelectedJob(e.target.value);
                                setJobError('');
                                setJob('');
                            }}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="option1" className="text-black">option 1</option>
                            <option value="option2" className="text-black">Option 2</option>
                            <option value="option3" className="text-black">Option 3</option>
                        </Form.Select>
                        {jobError && <div className="invalid-feedback">{jobError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The Job"
                            value={job}
                            onChange={(e) => {
                                setJob(e.target.value);
                                setJobError('');
                                setSelectedJob('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${jobError ? 'is-invalid' : ''}`}
                            disabled={selectedJob ? true : false}
                        />
                        {jobError && <div className="invalid-feedback">{jobError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10 " controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="Enter The Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`w-full max-w-md text-white focus:outline-none ${passwordError ? 'is-invalid' : ''}`}
                        />
                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10" controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setConfirmPasswordError('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${confirmPasswordError ? 'is-invalid' : ''}`}
                        />
                        {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                    </Form.Group>

                    <Row className="py-3">
                        <NavLink to='/login' className='no-underline text-white ml-0 sm:ml-2 md:ml-4 lg:ml-10 xl:ml-8'>Already have an account? Sign in</NavLink>
                    </Row>

                    <Row>
                        <Form.Group className="my-3 ml-10 ml-11" controlId="checkbox">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                onChange={(e) => { setIsChecked(!isChecked) }}
                            />
                            Accept terms and conditions
                        </Form.Group>
                    </Row>

                    <Button type="submit" className="my-3 ml-10 text-white focus:outline-none bg-gradient-to-r from-black 
                    to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                     rounded-lg transition-colors duration-200 ease-in-out ml-11">
                        Sign Up
                    </Button>
                </Form>
            </FormContainer>
        </div>
    );
}

export default Signup;
