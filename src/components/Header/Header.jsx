import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <h1 className='text-3xl text-center my-4'>Welcome to TheMealDB</h1>
            <p className='text-center my-3'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
            <hr  className='border'/>
            <div className='flex justify-center'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border'/>
        </header>
    );
};

export default Header;