import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Row } from 'react-bootstrap';
import FormContainer from '../../../../Components/common/FormContainer';

function CompanySignup() {
    const [name, setName] = useState('');
    const [idName, setIdName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState('');

    const [nameError, setNameError] = useState('');
    const [idNameError, setIdNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

    const validatePhoneNumber = (phone) => {
        const phoneNumberPattern = /^\d{10}$/;

        if (!phone) {
            return 'Phone number is required';
        } else if (!phoneNumberPattern.test(phone)) {
            return 'Invalid phone number';
        } else {
            return ''; // No errors
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setNameError('');
        setIdNameError('');
        setEmailError('');
        setPhoneError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Validation logic
        if (!name) {
            setNameError('Company name is required');
            return;
        }

        if (!idName) {
            setIdNameError('IdName is required');
            return;
        }

        validateEmail();

        validatePhoneNumber();

        validatePassword();

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }

        console.log('Form submitted successfully');
    };

    return (
        <div className='FormContainer'>
            <FormContainer pos={'fixed'}>
                <h1 className="text-center w-full font-pS">SC Kingdom</h1>
                <Form className='form-manager' onSubmit={submitHandler}>
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The Company Name"
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
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
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
                        <Form.Control
                            type="password"
                            placeholder="Enter The Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError('');
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${passwordError ? 'is-invalid' : ''}`}
                        />
                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                    </Form.Group>

                    <Form.Group className="my-3 ml-10">
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
                        <Form.Group className="my-3 ml-11" controlId="checkbox">
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
                     rounded-lg transition-colors duration-200 ease-in-out">
                        Sign Up
                    </Button>
                </Form>
            </FormContainer>
        </div>
    );
}

export default CompanySignup;
