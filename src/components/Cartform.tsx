import React from 'react'



const Cartform = () => {
  return (
    <div className='cart-form'>
        <div className="mb-3"><label htmlFor="description" className="form-label">Description
          </label>
         <input id='description' type="text" className="form-control" />
        </div>
        <div className="mb-3"><label htmlFor="" className="form-label">
            Amount</label>
            <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
            Category</label>
            <input type="text" className="form-control" />
      </div>
    </div>
  )
}

export default Cartform