import React, { Fragment, useEffect  } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../store/bookSlice';

import './book.css'



const PostContainer = () => {

  const dispatch = useDispatch() ;

  useEffect( () => {
    dispatch(getBooks())
  } , [dispatch] )

  const { books , isLoading} = useSelector(state => state.books)

  console.log(books)


  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} books={books} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
