import React from 'react';
import logo from '/logo.png';

function Footer() {
  return (
    <>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:justify-between flex flex-wrap">
            <div className="mb-6 md:mb-0 w-full md:w-auto">
              <a href="#" className="flex items-center text-white no-underline">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white no-underline">
                  SC Kingdom
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mt-6 w-full md:w-auto">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Get To Know Us</h2>
                                <ul className="text-white font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact With Us</h2>
                                <ul className="text-white font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Let Us Help You</h2>
                                <ul className="text-white font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">christovarghese2725@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:no-underline hover:text-white text-white no-underline">8848470365</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-white mb-4 sm:mb-0">
              © 2024{' '}
              <a href="#" className="hover:no-underline hover:text-white">
                CHRISTO25
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex flex-wrap justify-center items-center">
                            <a href="#" className="text-white hover:text-white  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-white ms-5 hover:text-white  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-white ms-5 hover:text-white  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-white ms-5 hover:text-white  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 1 0 10 20A10.009 10.009 0 0 0 10 .333Zm6.613 4.614a9.754 9.754 0 0 1-2.56.635 4.886 4.886 0 0 0 2.164-2.69 10.031 10.031 0 0 1-3.11.968 4.94 4.94 0 0 0-2.317-1.453 5.793 5.793 0 0 0-2.327.034A4.954 4.954 0 0 0 .707 9.174c0 .005 0 .01 0 .015a5.158 5.158 0 0 0 2.086.07 4.942 4.942 0 0 0-1.398 3.42 5.169 5.169 0 0 0 2.197 4.065 5.007 5.007 0 0 0 2.402.652 10.008 10.008 0 0 1-6.204 2.158A9.978 9.978 0 0 1 1.19 18.856a14.034 14.034 0 0 0 7.674 2.248c7.582 0 11.739-6.28 11.739-11.738 0-.177 0-.35-.012-.523A9.058 9.058 0 0 0 16.613 4.947ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="#" className="text-white ms-5 hover:text-white  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer