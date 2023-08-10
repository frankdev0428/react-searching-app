import React, { FormEvent, useState ,formState } from 'react'
import { useForm ,FieldValues} from "react-hook-form";
const Form = () => {
   const { register,handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data: FieldValues) => console.log(data);  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="mb-3">
        <label htmlFor="name" className="form-label">Name
     </label>
     <input {...register('name',{ required: true, minLength: 3})} 
      id="name" type="text" className="form-control" />
      {<p>The name field is required</p>}
     </div>
     <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input  {...register('age')}  id="age" type="number" className="form-control" required/>
        </div>
        <button className="btn btn-primary" type='submit'>Submit</button>   
    </form>
  )
}

export default Form