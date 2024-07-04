import {createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../../services/api'
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
    'auth/login',
    async({role,email,password},{rejectWithValue}) =>{
        try {
            const {data} = await API.post('/auth/login',{role,email,password})
            //store token
            if(data.success){
                alert(data.message)
                //toast.success(data.message)
                localStorage.setItem('token',data.token)
                
            }
            return data;
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
);

//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
      {name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone},{ rejectWithValue }
    ) => {
      try {
        const { data } = await API.post('/auth/register', {
          name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              website,
              address,
              phone
        });
        if (data.success) {
          alert(data.message);
          window.location.replace("/login");
          // toast.success("User Registerd Successfully");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  
  