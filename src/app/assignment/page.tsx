"use client";
import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import StarRatings from 'react-star-ratings';

const Page: React.FC = () => {
  const [on, setOn] = useState<boolean>(false);
  const [safetyRating, setSafetyRating] = useState<number>(0);
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [thumbsUp, setThumbsUp] = useState<boolean | null>(null); 

  const handleReview = () => {
    setOn(!on);
  };

  const changeSafetyRating = (newRating: number) => {
    setSafetyRating(newRating);
  };

  const changeCommunicationRating = (newRating: number) => {
    setCommunicationRating(newRating);
  };

  const handleThumbsUp = () => {
    setThumbsUp(true);
  };

  const handleThumbsDown = () => {
    setThumbsUp(false);
  };

  return (
    <div>
       {on && (
        <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="flex w-full h-full justify-center items-center">
            <div className="bg-white md:w-[50%] h-[70%] md:h-[80%] lg:w-[100%] lg:h-[90%] xl:w-[30%] xl:h-[60%] z-20 rounded-lg relative overflow-y-auto overflow-x-hidden flex flex-col items-center p-8">
              <div className="absolute top-4 left-4 cursor-pointer" onClick={() => setOn(false)}>
                <ImCross />
              </div>
              <div className="flex flex-col items-start w-full pr-2">
                <div className='text-3xl sm:text-4xl font-bold'>Leave review</div>
                <div className='my-4 sm:my-4'>
                  <div className='text-xl sm:text-2xl font-bold'>Safety</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg pl-1 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                     How much do you like our safety measures
                  </div>
                  <div>
                    <StarRatings
                      rating={safetyRating}
                      starRatedColor="gold"
                      starHoverColor="gold"
                      changeRating={changeSafetyRating}
                      numberOfStars={5}
                      name='safetyRating'
                      starDimension="50px"
                      starSpacing="1px"
                    />
                    
                  </div>
                </div>
                {/* Communication section */}
                <div className='my-4 sm:my-4'>
                  <div className='text-xl sm:text-2xl font-bold'>Communication</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg pl-1 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                   How much do you like our communication
                  </div>
                  <div>
                    <StarRatings
                      rating={communicationRating}
                      starRatedColor="gold"
                      starHoverColor="gold"
                      changeRating={changeCommunicationRating}
                      numberOfStars={5}
                      name='communicationRating'
                      starDimension="50"
                      starSpacing="1px"
                    />
                 
                  </div>
                </div>
                <div className='my-4 sm:my-4'>
                  <div className='text-xl sm:text-2xl font-bold'>Would you recommend this service?</div>
                  <div className="flex items-center space-x-4 mt-2 sm:mt-4 gap-6">
                    <div className='flex gap-1 sm:gap-2'>
                      <FaThumbsDown
                        onClick={handleThumbsDown}
                        color={thumbsUp === false ? "red" : "gray"}
                        size={30}
                        className="cursor-pointer"
                      />
                      <div className="text-sm sm:text-base">NO</div>
                    </div>
                    <div className='flex gap-1 sm:gap-2'>
                      <FaThumbsUp
                        onClick={handleThumbsUp}
                        color={thumbsUp === true ? "green" : "gray"}
                        size={30}
                        className="cursor-pointer"
                      />    
                      <div className="text-sm sm:text-base">YES</div>
                    </div>
                  </div>
                  <div className="text-sm sm:text-base">{thumbsUp === null ? "No rating" : thumbsUp ? "Thumbs up" : "Thumbs down"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <button onClick={handleReview} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> 
          Leave review
        </button>
      </div>
    </div>
  );
};

export default Page;
