import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Card = ({ name, role, email, image, skills, linkedin, instagram, onPrevious, onNext }) => {
  return (
    <div className="relative p-6 bg-transparent rounded-lg shadow-lg max-w-md mx-auto my-6">
      {/* Card Content */}
      <div className="text-center">
        {/* Profile Picture */}
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />

        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-3xl font-semibold text-white capitalize">{name}</h3>
          <p className="text-xl text-gray-400">{role}</p>
        </div>

        {/* Skills */}
        <p className="text-sm text-gray-500 mb-6">{skills}</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-blue-600" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl hover:text-pink-500" />
          </a>
          <a href={email} target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-white text-xl hover:text-red-600" />
          </a>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Previous and Next buttons inside the card */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2"
          >
            <FaArrowLeft /> Previous
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
