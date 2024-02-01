import React from 'react'
import banner from '/banner.jpg'

function Banner() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                height: '27rem',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                objectFit: 'cover'
            }} className='w-full flex flex-col items-center justify-center h-48 sm:h-64 md:h-96 bg-contain '>
                <div className='text-center text-4xl font-bold mb-6 mt-12 text-white font-eB'>
                    Nourishing Your Mind And Body, To Build A Brighter Future........
                </div>
                <div className='flex-grow'>
                    <button className='bg-black bg-blend-multiply backdrop-blur-md text-white mt-40 px-8 py-3 rounded-full lg:w-48 bg-opacity-50 hover:bg-opacity-70 transform transition-transform duration-300 hover:scale-105'>
                        Let's Start
                    </button>
                </div> {/* Added to push the button to the middle */}

            </div>



        </>
    )
}

export default Banner