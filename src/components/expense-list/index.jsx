import React from 'react'
import Card from './Card'
import Empty from '../../assets/empty.png'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ExpenseList() {
  const { expenseList : list, query } = useSelector((state) => state.expenses)
  const filteredList = list.filter(item => item.title.includes(query))
  const notifySuccess = () => toast.success('Expense Deleted')
            

  return (
    <div className='flex flex-col flex-1'>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick                
        pauseOnHover
      />
      {filteredList.length ? filteredList.map((item) => <Card key={item.createdAt} item={item} notifySuccess={notifySuccess} />) 
      : <div className='flex flex-col items-center justify-center mx-auto mt-20'>
          <img className='w-60' src={Empty} alt='Empty list' />
          <label>Uf Oh! Yor expense list is empty!</label>
        </div>
      
      }
    </div>
  )
}
export default ExpenseList
