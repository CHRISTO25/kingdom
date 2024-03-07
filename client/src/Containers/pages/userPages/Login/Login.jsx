import React, { useState, useEffect } from 'react';//to connect with backend.
import { useDispatch, useSelector } from 'react-redux'// to connect with backend.
import { useLoginMutation } from '../../../../redux/userSlice/usersApiSlice';//to connect with backend.
import { setCredentials } from '../../../../redux/userSlice/authSlice'// to connect with backend.
import Loader from '../../../../Components/common/Loader';
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../../../Components/common/FormContainer';
import { toast } from 'react-toastify';
import { validateEmail, validatePassword } from '../../../utils/formValidation';

function Login() {
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [response, setResponse] = useState('')

    //validations
    const validateForm = async () => {
        { email ? setEmailError(validateEmail(email)) : null }
        { password ? setPasswordError(validatePassword(password)) : null }
    }

    //connecting to backend  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation() //this login is called from userApiSlice
    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])


    //form submissions
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (email && password && !emailError && !passwordError) {
                const res = await login({ email, password, position }).unwrap();//this login is called from userApiSlice
                const Token = res.token
                console.log(Token, "ithaaanu mwne token");
                if (Token) {
                    dispatch(setCredentials({ Token }))
                    navigate('/')
                }
                setResponse(res.data)
            }
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };
    
    return (
        <div className='FormContainer '>
            <FormContainer pos={'fixed'} >
                <h1 className="text-center w-full font-pS">SC Kingdom</h1>
                {/* ... (rest of the code) */}
                <Form className='form-manager' onSubmit={submitHandler}>
                    <Form.Group className={`w-4/5 text-white focus:outline-none  from-black 
                                to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                                rounded-lg transition-colors duration-200 ease-in-out ml-11 `}>
                        <Row>
                            <Col xs={3} md={4} lg={4}>
                                <Form.Label className='label-position' >Position</Form.Label>
                            </Col>
                            <Col xs={3} md={4} lg={4}>
                                <Form.Check
                                    type="radio"
                                    label="Company"
                                    id="positionCompany"
                                    checked={position === 'company'}
                                    onChange={() => setPosition('company')}
                                />

                            </Col>

                            <Col xs={3} md={3} lg={3}>

                                <Form.Check
                                    type="radio"
                                    label="Worker"
                                    id="positionWorker"
                                    checked={position === 'worker'}
                                    onChange={() => setPosition('worker')}
                                />
                            </Col>
                        </Row>

                    </Form.Group>
                    {/* ... (rest of the code) */}
                    <Form.Group className="my-4">
                        <Form.Control
                            type="email"
                            placeholder="Enter The Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateForm(email)
                            }}
                            onBlur={validateEmail} // Validate on blur as well
                            className={`w-4/5 text-white focus:outline-none bg-gradient-to-r from-black 
                                to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                                rounded-lg transition-colors duration-200 ease-in-out ml-11 ${emailError ? 'border border-danger' : ''}`}
                        />
                        {emailError && <p className="text-danger">{emailError}</p>}
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Control
                            type="password"
                            placeholder="Enter The Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validateForm(password)
                            }}
                            onBlur={validatePassword} // Validate on blur as well
                            className={`w-4/5 text-white focus:outline-none bg-gradient-to-r from-black 
                                to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                                rounded-lg transition-colors duration-200 ease-in-out ml-11 ${passwordError ? 'border border-danger' : ''}`}
                        />
                        {passwordError && <p className="text-danger">{passwordError}</p>}

                    </Form.Group>

                    <Row className="py-3 pl-10 ">
                        <Col lg={6}>
                            New Customer?
                            <Link to='/signup'>Register</Link>
                        </Col>
                        <Col lg={6}>
                            Forgot Password ?
                        </Col>
                    </Row>
                    <p>{response}</p>

                    <Row>
                        <Form.Group className="my-3 ml-11" controlId="checkbox">
                            <input type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                onChange={(e) => { setIsChecked(!isChecked) }} /> accept terms and conditions
                        </Form.Group>
                    </Row>

                    <Button type="submit" className="mt-3 text-white focus:outline-none bg-gradient-to-r from-black 
                    to-gray-900 hover:from-gray-800 w-full max-w-md py-2 px-4 font-medium text-base tracking-wider shadow-md
                     rounded-lg transition-colors duration-200 ease-in-out ml-11">
                        Sign In
                    </Button>

                </Form>
            </FormContainer>
        </div>
    );
}

export default Login;









