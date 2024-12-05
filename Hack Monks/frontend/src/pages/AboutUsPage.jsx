import React, { useState, useEffect } from 'react';
import teamData from '../data'; // Your team data
import Card from '../components/Card';

const AboutUsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  // Function to handle the "Previous" button
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
  };

  // Automatically switch cards every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>

      {/* Card Carousel */}
      <div className="w-full max-w-md">
        <Card
          name={teamData[currentIndex].name}
          role={teamData[currentIndex].role}
          email={teamData[currentIndex].email}
          image={teamData[currentIndex].image}
          skills={teamData[currentIndex].skills}
          linkedin={teamData[currentIndex].linkedin}
          instagram={teamData[currentIndex].instagram}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>

      
    </div>
  );
};

export default AboutUsPage;
