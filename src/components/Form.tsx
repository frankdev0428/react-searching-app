import React, { FormEvent, useState ,formState } from 'react'
import { useForm ,FieldValues} from "react-hook-form";
import { z } from 'zod';
import './form.css'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
   age: z.number().min(18),
   firstName: z.string().min(3),
   lastName: z.string().min(3),
   email: z.string(),
   password: z.string(),
   confirmPassword: z.string(),
   phoneNumber: z.number(),
});

type FormData = z.infer<typeof schema>;


const Form = () => {
   
   const { register,handleSubmit, formState: { errors} }= useForm<FormData>();
   const onSubmit = (data: FieldValues) => console.log(data);  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
     <div className="mb-3">
        <label htmlFor="first-Name" className="form-label">First Name
     </label>
     <input {...register('firstName',{ required: true, minLength: 3})} 
      id="first-Name" type="text" className="form-control" />
       {errors.firstName?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
       {errors.firstName?.type === 'minLength' && <p className='text-danger error-messages'>This required min Length</p>}
     </div>
   
     <div className="mb-3">
        <label htmlFor="last-name" className="form-label">Last Name
     </label>
     <input {...register('lastName',{ required: true})} 
      id="last-name" type="text" className="form-control" />
      {errors.lastName?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
     </div>
      <div className="mb-3">
         <label htmlFor="phone-number" className="form-label">Phone Number</label>
         <input {...register('phoneNumber',{required:true, minLength: 9})} id='phone-number' type="number" className="form-control"/>
         {errors.phoneNumber?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
      </div>
      <div className="mb-3">
         <label htmlFor="email" className="form-label">Email</label>
         <input {...register('email',{required: true})} id='email' type="email" className="form-control" />
         {errors.email?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
      </div>
     <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age')}  id="age" type="number" className="form-control" required/>
        {errors.age?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
     </div>
        
      <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input {...register('password', {required: true})} id='password' type="password" className="form-control"/>
      {errors.password?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
      </div>
      <div className="mb-3">
         <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
         <input {...register('confirmPassword', {required: true})} id='confirm-password' type="password" className="form-control" />
         {errors.confirmPassword?.type === 'required' && <p className='text-danger error-messages'>This is required</p>}
      </div>
        <button className="btn btn-primary signup-but" type='submit'>Sign Up</button>
    </form>
  )
}

export default Form