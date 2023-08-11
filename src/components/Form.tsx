import React, { FormEvent, useState ,formState } from 'react'
import { useForm ,FieldValues} from "react-hook-form";
import './form.css';

const Form = () => {
   const { register,handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data: FieldValues) => console.log(data);  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
     <div className="mb-3">
        <label htmlFor="name" className="form-label">Frist Name
     </label>
     <input {...register('name',{ required: true, minLength: 3})} 
      id="name" type="text" className="form-control" />
      
     </div>

     <div className="mb-3">
        <label htmlFor="name" className="form-label">Last Name
     </label>
     <input {...register('name',{ required: true, minLength: 3})} 
      id="name" type="text" className="form-control" />
     </div>
      <div className="mb-3">
         <label htmlFor="" className="form-label">Phone Number</label>
         <input type="number" className="form-control" />
      </div>

      <div className="mb-3">
         <label htmlFor="" className="form-label">Email</label>
         <input type="email" className="form-control" />
      </div>
   
     <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age')}  id="age" type="number" className="form-control" required/>
     </div>
        
      <div className="mb-3">
      <label htmlFor="" className="form-label">Password</label>
      <input type="password" className="form-control"/>
      </div>
      <div className="mb-3">
         <label htmlFor="" className="form-label">Confirm Password</label>
         <input type="password" className="form-control" />
      </div>
        <button className="btn btn-primary signup-but" type='submit'>Sign Up</button>
    </form>
  )
}

export default Form