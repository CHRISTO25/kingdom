import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Row } from 'react-bootstrap';
import FormContainer from '../../../../Components/common/FormContainer';
import userAxios from '../../../../Axios/userAxios';
import { validateEmail, validatePassword, validateName, validateIdName, validatePhoneNumber, validateConfirmPassword } from '../../../utils/formValidation';

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

    // backend calls
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const jobDetails = await userAxios.get('http://localhost:3000/api/users/jobsName');
                // Assuming jobDetails.data.jobs is an array of job names
                setAvailableJobs(jobDetails.data.jobs);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        fetchUsers();
    }, []);

    const [availableJobs, setAvailableJobs] = useState([]);

    // Validations on form submission
    const validateForm = async () => {
        setNameError(name ? await validateName(name) : '');
        setIdNameError(idName ? await validateIdName(idName) : '');
        setEmailError(email ? await validateEmail(email) : '');
        setPhoneError(phone ? await validatePhoneNumber(phone) : '');
        setPasswordError(await validatePassword(password));
        setConfirmPasswordError(confirmPassword ? await validateConfirmPassword(password, confirmPassword) : '');
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        validateForm();

        if (
            name &&
            idName &&
            email &&
            phone &&
            password &&
            confirmPassword === password &&
            !nameError &&
            !idNameError &&
            !emailError &&
            !phoneError &&
            !passwordError &&
            !confirmPasswordError
        ) {
            // Your logic for form submission goes here
            console.log('Form submitted successfully!');
        } else {
            setConfirmPasswordError('Please fix the errors in the form');
        }
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
                                validateForm();
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
                                validateForm();
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
                                validateForm();
                            }}
                            onBlur={() => setEmailError(validateEmail(email))}
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
                                validateForm();
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
                                validateForm();
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
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            Accept terms and conditions
                        </Form.Group>
                    </Row>

                    <Button
                        type="submit"
                        className="my-3 ml-10 text-white focus:outline-none bg-gradient-to-r from-black 
                    to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                     rounded-lg transition-colors duration-200 ease-in-out ml-11"
                    >
                        Sign Up
                    </Button>
                </Form>
            </FormContainer>
        </div>
    );
}

export default CompanySignup;
