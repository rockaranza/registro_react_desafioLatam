import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SocialButton = ({ icon }) => {
  return (
    <button className={`btn rounded-5 border-black mx-1 btn-light hover:bg-gray-700`}>
      <i className={`${icon}`}></i>
    </button>
  );
};


export default SocialButton;