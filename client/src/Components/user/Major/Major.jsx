import React from 'react';
import wrk1 from '/wrk1.jpg';
import wrk2 from '/wrk2.jpg';
import wrk3 from '/wrk3.jpg';
import { NavLink } from 'react-router-dom'

function Major() {
    const main = [{ name: "Jobs", img: wrk1 ,link:'/'},
    { name: "Marriage", img: wrk2 ,link:'/' },
    { name: "Selling", img: wrk3 ,link:'/'}]
    return (
        
        <div style={{ height: '340px' }} className='bg-black h-screen flex items-center justify-center'>
              <div className=" mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-items-center">
            {main.map((items) => {
                return (
                    <NavLink to={items.link} className='no-underline  transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2'>
                    <div className='bg-black mx-4 card border border-white flex flex-col items-center justify-center text-white '>
                        <img src={items.img} alt='Card image 1' className='w-full h-40px object-cover rounded-lg' />
                        <h4 className='text-center font-cG'>{items.name}</h4>
                    </div>
                    </NavLink>
                )
            })}
            </div>
        </div>
    );
}

export default Major;
