import React from 'react'
import Topfold from '../../components/topfold'
import ExpenseList from '../../components/expense-list'

function Home() {
  return (
    <div className='w-[90%] lg:w-[60%] mx-auto'>
      <Topfold />
      <ExpenseList />
    </div>
  )
}

export default Home
