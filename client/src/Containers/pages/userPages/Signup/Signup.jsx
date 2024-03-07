import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'// to connect with backend.
import { setCredentials } from '../../../../redux/userSlice/authSlice'// to connect with backend.
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import userAxios from '../../../../Axios/userAxios';
import FormContainer from '../../../../Components/common/FormContainer';
import {
    validateEmail, validatePassword, validateName, validateIdName,
    validatePhoneNumber, validateConfirmPassword
} from '../../../utils/formValidation';
import { useWorkerSignupMutation } from '../../../../redux/userSlice/usersApiSlice';

function Signup() {
    const [name, setName] = useState('');
    const [idName, setIdName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [job, setJob] = useState('');
    const [jobselect, setjobselect] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState('');
    const [response, setResponse] = useState('')

    const [nameError, setNameError] = useState('');
    const [idNameError, setIdNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [jobError, setJobError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [availableJobs, setAvailableJobs] = useState('');

    // backend calls for the jobs

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const jobDetails = await userAxios.get('http://localhost:3000/api/users/jobsName');
                setAvailableJobs(jobDetails.data.jobs);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };
        fetchUsers();
    }, []);
 // Validations on form submission
    const validateForm = async () => {

        setNameError(name ? await validateName(name) : null);
        setIdNameError(idName ? await validateIdName(idName) : null);
        setEmailError(email ? await validateEmail(email) : null);
        setPhoneError(phone ? await validatePhoneNumber(phone) : null);
        setJobError(job || jobselect ? '' : null);
        setPasswordError(await validatePassword(password));
        setConfirmPasswordError(confirmPassword ? confirmPasswordError(await validateConfirmPassword(password, confirmPassword)) : null);
    };
    //call for the signup.
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])
    const [signup, { isLoading }] = useWorkerSignupMutation()
    const submitHandler = async (e) => {
        e.preventDefault();
        if (
            name &&
            idName &&
            email &&
            phone &&
            (job || jobselect) &&
            password &&
            confirmPassword === password &&
            !nameError &&
            !idNameError &&
            !emailError &&
            !phoneError &&
            !jobError &&
            !passwordError &&
            !confirmPasswordError
        ) {
            try {
                console.log('Form submitted successfully!');
                const res = await signup({ name, idName, email, jobselect, job, phone, password }).unwrap();//this login is called from userApiSlice
                const Token = res.token
                console.log(Token, "ithaaanu mwne token");
                if (Token) {
                    dispatch(setCredentials({ Token }))
                    navigate('/')
                }
                setResponse(res.data)
            } catch (error) {

            }
        } else {
            setConfirmPasswordError("enter all fields")
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
                            placeholder="Enter The Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                validateForm()
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${nameError ? 'is-invalid' : ''
                                }`}
                        />
                        {nameError && (
                            <div className="invalid-feedback">{nameError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The IdName"
                            value={idName}
                            onChange={(e) => {
                                setIdName(e.target.value);
                                validateForm()
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${idNameError ? 'is-invalid' : ''
                                }`}
                        />
                        {idNameError && (
                            <div className="invalid-feedback">{idNameError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="email"
                            placeholder="Enter The Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                validateForm()
                            }}
                            onBlur={() => setEmailError(validateEmail(email))}
                            className={`w-full max-w-md text-white focus:outline-none ${emailError ? 'is-invalid' : ''
                                }`}
                        />
                        {emailError && (
                            <div className="invalid-feedback">{emailError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="number"
                            placeholder="Enter The Number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                validateForm()

                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${phoneError ? 'is-invalid' : ''
                                }`}
                        />
                        {phoneError && (
                            <div className="invalid-feedback">{phoneError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10">
                        <Form.Select
                            className={`w-full max-w-md text-white focus:outline-none ${jobError ? 'is-invalid' : ''
                                }`}
                            value={jobselect}
                            onChange={(e) => {
                                setjobselect(e.target.value);
                                validateForm()
                            }}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            {availableJobs ? (
                                availableJobs.map((job) => (
                                    <option
                                        key={job.id}
                                        value={job.name}
                                        className="text-black"
                                    >
                                        {job.name}
                                    </option>
                                ))
                            ) : (
                                <></>
                            )}
                        </Form.Select>

                        {jobError && (
                            <div className="invalid-feedback">{jobError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10">
                        <Form.Control
                            type="text"
                            placeholder="Enter The Job"
                            value={job}
                            onChange={(e) => {
                                setJob(e.target.value);
                                validateForm()
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${jobError ? 'is-invalid' : ''
                                }`}

                        />
                        {jobError && (
                            <div className="invalid-feedback">{jobError}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10 " controlId="password">
                        <Form.Control
                            type="password"
                            placeholder="Enter The Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                validateForm()
                            }}
                            onBlur={() =>
                                setPasswordError(validatePassword(password))
                            }
                            className={`w-full max-w-md text-white focus:outline-none ${passwordError ? 'is-invalid' : ''
                                }`}
                        />
                        {passwordError && (
                            <div className="invalid-feedback">
                                {passwordError}
                            </div>
                        )}
                    </Form.Group>
                    <Form.Group className="my-3 ml-10" controlId="confirm_password">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                validateForm()
                            }}
                            className={`w-full max-w-md text-white focus:outline-none ${confirmPasswordError ? 'is-invalid' : ''
                                }`}
                        />
                        {confirmPasswordError && (
                            <div className="invalid-feedback">
                                {confirmPasswordError}
                            </div>
                        )}
                    </Form.Group>
                    <Row className="py-3">
                        <NavLink
                            to="/login"
                            className="no-underline text-white ml-0 sm:ml-2 md:ml-4 lg:ml-10 xl:ml-8"
                        >
                            Already have an account?  <span>Sign in</span> </NavLink>

                    </Row>
                    <p>{response}</p>
                    <Row>
                        <Form.Group className="my-3 ml-10 ml-11" controlId="checkbox">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                onChange={(e) => {
                                    setIsChecked(!isChecked);
                                }}
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

export default Signup;
