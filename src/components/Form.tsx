import React, { FormEvent, useState ,formState } from 'react';
import { useForm ,FieldValues} from "react-hook-form";
import { z } from 'zod';
import './form.css';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
   firstName: z.string().min(3),
   lastName: z.string().min(1),
   email: z.string(),
   password: z.string(),
   confirmPassword: z.string(),
   age : z.number(),
   phoneNumber: z.number(),
});

type FormData = z.infer<typeof schema>;


const Form = () => {
   
   const { register,handleSubmit, formState: { errors, isValid} } = useForm<FormData>({ resolver: zodResolver(schema)});
   const onSubmit = (data: FieldValues) => console.log(data);  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
     <div className="mb-3">
        <label htmlFor="first-Name" className="form-label">First Name
     </label>
     <input {...register('firstName',{ required: true, minLength: 3})} 
      id="first-Name" type="text" className="form-control" />
       {errors.firstName && <p className='text-danger error-messages'>
         {errors.firstName.message}</p>}
       
     </div>
   
     <div className="mb-3">
        <label htmlFor="last-name" className="form-label">Last Name
     </label>
     <input {...register('lastName')} 
      id="last-name" type="text" className="form-control" />
      {errors.lastName && <p className='text-danger error-messages'>errors.lastName.message</p>}
     </div>
      <div className="mb-3">
         <label htmlFor="phone-number" className="form-label">Phone Number</label>
         <input {...register('phoneNumber',{valueAsNumber: true})} id='phone-number' type="number" className="form-control"/>
         {errors.phoneNumber&& <p className='text-danger error-messages'>{errors.phoneNumber.message}</p>}
      </div>
      <div className="mb-3">
         <label htmlFor="email" className="form-label">Email</label>
         <input {...register('email')} id='email' type="email" className="form-control" />
         {errors.email&& <p className='text-danger error-messages'>
            {errors.email.message}</p>}
      </div>
     <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age',{ valueAsNumber: true})}  id="age" type="number" className="form-control" />
        {errors.age && <p className='text-danger error-messages'>
         {errors.age.message}</p>}
     </div>
        
      <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input {...register('password')} id='password' type="password" className="form-control"/>
      {errors.password  && <p className='text-danger error-messages'>
         {errors.password.message}
      </p>}
      </div>
      <div className="mb-3">
         <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
         <input {...register('confirmPassword')} id='confirm-password' type="password" className="form-control" />
         {errors.confirmPassword && <p className='text-danger error-messages'>{errors.confirmPassword.message}</p>}
      </div>
        <button  className="btn btn-primary signup-but" type='submit'>Sign Up</button>
    </form>
  )
}

export default Form