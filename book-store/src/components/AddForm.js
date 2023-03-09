import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBooks } from './store/bookSlice';


const Addform = () => {

  const [title , setTitle] = useState('') ;
  const [price , setPrice] = useState('') ;
  const [description , setDescription] = useState('') ;

  const {isLogged} = useSelector((state) => state.auth)
  console.log(isLogged)
  
  const dispatch = useDispatch() ;


    const handleSubmite = (e) => {
      e.preventDefault()
  
      const data = {
        title: title ,
        price: price ,
        description : description
      }

      dispatch(insertBooks(data))
      
      setTitle('')
      setPrice('')
      setDescription('')
    }



  


  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmite} >

          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input 
                type='text' 
                className='form-control' 
                id='title' 
                required
                value={title} 
                onChange={( (e) => setTitle(e.target.value))} />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input 
                type='number' 
                className='form-control' 
                id='price' 
                required
                value={price} 
                onChange={( (e) => setPrice(e.target.value))} />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
                className='form-control'
                id='Description'
                rows='3'
                required
                value={description} 
                onChange={( (e) => setDescription(e.target.value))}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={isLogged} >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Addform;
