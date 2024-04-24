// import React, { useState } from 'react';
// import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];

//   const checkNumber = number => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }

//     return number;
//   };

//   const nextPerson = () => {
//     setIndex(curIndex => {
//       let newIndex = curIndex + 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const prevPerson = () => {
//     setIndex(curIndex => {
//       let newIndex = curIndex - 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const randomPerson = () => {
//     // 3.3 -> 3 - ceil
//     // 3.3 -> 4 - floor
//     let randomNumber = Math.trunc(Math.random() * people.length);
//     let randomNbr = Math.trunc(Math.random() * people.length);
//     console.log(randomNbr);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <article className='review'>
//       <div className='img-container'>
//         <img src={image} alt={name} className='person-img' />
//         <span className='quote-icon'>
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className='author'>{name}</h4>
//       <p className='job'>{job}</p>
//       <p className='info'>{text}</p>
//       <div className='button-container'>
//         <button className='prev-btn' onClick={prevPerson}>
//           <FaChevronLeft />
//         </button>
//         <button className='next-btn' onClick={nextPerson}>
//           <FaChevronRight />
//         </button>
//         <button className='random-btn' onClick={randomPerson}>
//           Random Person
//         </button>
//       </div>
//     </article>
//   );
// };

// export default Review;

// import React, { useState } from 'react';
// import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];

//   const checkNumber = number => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };

//   const prevPerson = () => {
//     setIndex(curIndex => {
//       let changePerson = curIndex - 1;
//       return checkNumber(changePerson);
//     });
//   };

//   const nextPerson = () => {
//     setIndex(curIndex => {
//       let changePerson = curIndex + 1;
//       return checkNumber(changePerson);
//     });
//   };

//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//       setIndex(checkNumber(randomNumber));
//     }
//   };

//   return (
//     <article className='review'>
//       <div className='img-container'>
//         <img src={image} alt={name} className='person-img' />
//         <span className='quote-icon'>
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className='author'>{name}</h4>
//       <p className='job'>{job}</p>
//       <p className='info'>{text}</p>

//       <div className='button-container'>
//         <button className='prev-btn' onClick={prevPerson}>
//           <FaChevronLeft />
//         </button>

//         <button className='next-btn' onClick={nextPerson}>
//           <FaChevronRight />
//         </button>

//         <button className='random-btn' onClick={randomPerson}>
//           Random
//         </button>
//       </div>
//     </article>
//   );
// };

// export default Review;

import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(curPerson => {
      let changePerson = curPerson - 1;
      return checkNumber(changePerson);
    });
  };

  const nextPerson = () => {
    setIndex(curPerson => {
      let changePerson = curPerson + 1;
      return checkNumber(changePerson);
    });
  };

  const randomPerson = () => {};

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          Random
        </button>
      </div>
    </article>
  );
};

export default Review;
