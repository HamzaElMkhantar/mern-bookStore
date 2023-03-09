import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

//  ------- get data --------
export const getBooks = createAsyncThunk ( 
            'book/getBooks' , 

            async ( _ , thunkAPI) => {
                    const { rejectWithValue } = thunkAPI
                    try{

                        const res = await fetch("http://localhost:3009/books")
                        const data = res.json()

                        return data ;

                    }catch(error){
                    return rejectWithValue(error.message)
                    }
            }
 )


//  -------- insert data ---------

export const insertBooks = createAsyncThunk( 
            'book/deleteBooks' ,

            async (bookData , thunkAPI) => {
                const { rejectWithValue , getState } = thunkAPI ;

                
                try{
                    bookData.userName = getState().auth.user ;
                    const res = await fetch( `http://localhost:3009/books` , {
                        method: "POST" ,
                        body: JSON.stringify(bookData) ,
                        headers :{
                            'Content-type': "Application/json; charset=UTF-8" ,
                        }
                    } )
                    const data = res.json()
                    return data ;

                } catch(error){
                    return rejectWithValue(error.message)
                }
            })



    //  -------------- delete data ------------

export const deleteBooks = createAsyncThunk( 
            'book/deleteBoooks' , 
            async (item , thunkAPI) => {
                const {rejectWithValue} = thunkAPI ;

                try{

                    const res = await fetch(`http://localhost:3009/books/${item.id}` , {
                        method : 'DELETE' ,
                        body : '' ,
                        headers: {
                            'Content-type' : 'Application/json; charset=UTF-8'
                        }
                    })
                    console.log(res)
                     return item
                }catch(error) {
                    return rejectWithValue(error.message)
                }

            })

    // ---------  get book info --------

    export const getBook = createAsyncThunk( 
        'book/deleteBoook' , 
        async (item , thunkAPI) => {
            const {rejectWithValue} = thunkAPI ;
            try{

                const res = await fetch(`http://localhost:3009/books/${item.id}` , {
                    method : 'GET' ,
                    headers: {
                        'Content-type' : 'Application/json; charset=UTF-8'
                    }
                })
                const data = res.json()

                return data ;


            }catch(error) {
                console.log(error.message)
                return rejectWithValue(error.message)
            }

        })


const bookSlice = createSlice({
    name:"book" ,
    initialState:{ books : [] , isLoading: false , isError : null , bookInfo : null  } ,
    extraReducers :{


        // ---------  get data ----------


        [getBooks.pending] : ( state , action ) => {
            state.isLoading = true ;
            state.isError = null

        } ,
        [getBooks.fulfilled] : ( state , action ) => {
            state.isLoading = false ;
            state.books = action.payload ;

            console.log(action.payload)

        } ,
        [getBooks.rejected] : ( state , action ) => {
            state.isLoading = false ;
            state.isError = action.payload ;
            console.log(action.payload)

        } ,


        // -------- isert data --------


        [insertBooks.pending] : ( state , action ) => {
            state.isLoading = true ;
            console.log(action.payload)
        } ,
        [insertBooks.fulfilled] : ( state , action ) => {
            state.isLoading = false ;
            state.books.push(action.payload)
        } ,
        [insertBooks.rejected] : ( state , action ) => {
            state.isLoading = false ;
            state.isError = action.payload ;

        } ,

        // ---------- delete data ---------

        [deleteBooks.pending] : (state , action)=> {
            console.log(action)
        } ,
        [deleteBooks.fulfilled] : (state , action)=> {
            state.books = state.books.filter((item) => item.id !== action.payload.id) ;

        } ,
        [deleteBooks.rejected] : (state , action)=> {
            console.log(action)
        } ,

        // ------------- get book info -----------

        [getBook.fulfilled] : (state , action)=> {
            state.bookInfo = action.payload;
            console.log(action.payload)
    
        } 

    }
})

export default bookSlice.reducer ;