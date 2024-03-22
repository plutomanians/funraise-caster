import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
   

  return (
    <div className='flex justify-between items-center h-24 max-w-[1500px] max-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-20'>RaiseCaster</h1>
      <ul className=' md:flex'>
      <li className='p-4'><Link to="/home">Home</Link></li>
        <li className='p-4'><Link to="/faq">FAQ</Link></li>
        <li className='p-4 text-nowrap'><Link to="/createpost">Create a post</Link></li>
        <button className='bg-[#00df9a] w-[80px] h-[30px] my-3 mx-3 rounded-md font-sm text-black'>
        <Link to="/signin">sign-in</Link> <FontAwesomeIcon icon={faRightToBracket} /></button> 
    
      </ul>

      
    </div>
    

  )
}

export default Navbar
