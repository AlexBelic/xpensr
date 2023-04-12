import React from 'react'
import moment from 'moment/moment'
import { BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../../redux/actions/expenses'

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow()
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteExpense(item))
    notifySuccess()
  }

  return (
    <div className={`w-[100%] flex items-center gap-3 bg-white rounded-md mb-2 py-2 border-r-4 ${item.category.color}`}>
      <div className='text-3xl mx-2'>
        {item.category.icon}
      </div>
      <div className='flex flex-1 flex-col'>
        <label className='text-xl font-bold'>{item.title}</label>
        <label className='text-xs text-gray-400'>{time}</label>
      </div>      
      <div className='flex flex-col items-end mr-2'>
        <BsTrash onClick={handleDelete} className='cursor-pointer' />
        <label>${item.amount}</label>
      </div>
    </div>
  )
}

export default Card
