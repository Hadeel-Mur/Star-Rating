import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'

function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }

    function handleMouseEnter(index) {
        setHover(index);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    return (
        <div className='start-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    const starIndex = index + 1;
                    return (
                        <FaStar
                            key={starIndex}
                            className={starIndex <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(starIndex)}
                            onMouseEnter={() => handleMouseEnter(starIndex)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}

export default StarRating;
