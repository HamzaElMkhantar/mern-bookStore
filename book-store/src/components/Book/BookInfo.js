import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getBook } from '../store/bookSlice';

const BookInfo = () => {

  const {bookInfo} = useSelector((state) => state.books)

  console.log(bookInfo)



  return (
    <Fragment>
      <h2>Book Details</h2>
      {
        !bookInfo  ? 
      (<div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div> ) :
      (   <div>
              <p className='fw-bold'>Title: {bookInfo.title} </p>
              <p className='fw-light'>Description: {bookInfo.description}</p>
              <p className='fw-light'>userName: {bookInfo.userName}</p>
              <p className='fst-italic'>Price: {bookInfo.price} </p>
          </div>) 
    }
    </Fragment>
  );
};

export default BookInfo;
