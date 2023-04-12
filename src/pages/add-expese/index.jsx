import React from 'react'
import Topfold from '../../components/topfold'
import AddForm from '../../components/add-form'

function AddExpense() {
  return (
    <div className='w-[90%] lg:w-[60%] mx-auto'>
      <Topfold />
      <AddForm />
    </div>
  )
}

export default AddExpense
