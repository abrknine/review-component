declare module 'react-star-ratings' {
    import React from 'react';
  
    interface StarRatingsProps {
      rating: number;
      starRatedColor?: string;
      starHoverColor?: string;
      starEmptyColor?: string;
      starDimension?: string;
      starSpacing?: string;
      numberOfStars?: number;
      name?: string;
      changeRating?: (newRating: number) => void;
    }
  
    const StarRatings: React.FC<StarRatingsProps>;
    export default StarRatings;
  }
  