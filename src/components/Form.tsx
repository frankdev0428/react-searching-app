import React, { FormEvent, useState ,formState } from 'react'
import { useForm ,FieldValues} from "react-hook-form";
import './form.css';

const Form = () => {
   const { register,handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data: FieldValues) => console.log(data);  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
     <div className="mb-3">
        <label htmlFor="first-Name" className="form-label">First Name
     </label>
     <input {...register('firstName',{ required: true, minLength: 3})} 
      id="first-Name" type="text" className="form-control" />
     </div>

     <div className="mb-3">
        <label htmlFor="last-name" className="form-label">Last Name
     </label>
     <input {...register('lastName',{ required: true})} 
      id="last-name" type="text" className="form-control" />
     </div>
      <div className="mb-3">
         <label htmlFor="phone-number" className="form-label">Phone Number</label>
         <input {...register('phoneNumber',{required:true, minLength: 9})} id='phone-number' type="number" className="form-control" />
      </div>
      <div className="mb-3">
         <label htmlFor="email" className="form-label">Email</label>
         <input {...register('email',{required: true})} id='email' type="email" className="form-control" />
      </div>
     <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age')}  id="age" type="number" className="form-control" required/>
     </div>
        
      <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input {...register('password', {required: true})} id='password' type="password" className="form-control"/>
      </div>
      <div className="mb-3">
         <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
         <input {...register('confirmPassword', {required: true})} id='confirm-password' type="password" className="form-control" />
      </div>
        <button className="btn btn-primary signup-but" type='submit'>Sign Up</button>
    </form>
  )
}

export default Form