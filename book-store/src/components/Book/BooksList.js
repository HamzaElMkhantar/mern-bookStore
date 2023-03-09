import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks } from '../store/bookSlice';
import { getBook } from '../store/bookSlice';

const BooksList = ( {isLoading , books} ) => {

  const {isLogged} = useSelector((state) => state.auth) ;

  const dispatch = useDispatch() ;

  const handleDelete = (item) => {
    dispatch(deleteBooks(item)).unwrap()
    .then((originalPromiseResult) => {
      console.log(originalPromiseResult)
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError)
    })
  }

  const handleBookInfo = (item) => {
    dispatch(getBook(item) )
  }
  
  const booklist = () => {

        if( books.length > 0 ) {
            return ( books.map( (item) => (
                <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
                    <div> { item.title } </div>
                      <div className='btn-group' role='group'>
                        <button onClick={ () => handleBookInfo(item)} type='button' className='btn btn-primary'>
                            Read
                        </button>
                        <button onClick={ () => handleDelete(item) } type='button' className='btn btn-danger' disabled={isLogged}>
                            Delete
                        </button>
                      </div>
                  </li>
                ))  ) 
        } else {
            return 'store of books is Emty' 
        }
  } 

  


  return (
  
    <div>
        <h2>Books List</h2>
        
        {
          isLoading ? 'Loading...' 
          : <ul className='list-group'>{booklist() }</ul>   
        }

    </div>
  );
};

export default BooksList;
