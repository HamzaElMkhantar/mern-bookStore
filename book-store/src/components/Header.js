import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from './store/auth';

const Header = () => {

  const {isError} = useSelector( (state) => state.books )

  const {isLogged} = useSelector( (state) => state.auth ) ;
  const dispatch = useDispatch() ;

  const handleLogInOut = () => {
    dispatch(logInOut())
  }



  return (
    <Fragment>

        <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand mb-0 h1'>My Books</span>
            <button onClick={handleLogInOut} className='btn btn-outline-primary' type='submit'>
               {isLogged ? 'Log In' : 'Log Out'}
            </button>
        </nav>

      { 
        isError &&
        (<div class="alert alert-danger text-center p-3" role="alert">
          {isError}
        </div>)
      }

    </Fragment>
  );
};

export default Header;
