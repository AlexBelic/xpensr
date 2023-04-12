import React, { useState } from 'react'
import { BsChevronDown, BsSend } from 'react-icons/bs'
import { FaGraduationCap, FaHandHoldingMedical, FaShoppingBasket, FaHamburger, FaDumbbell } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/expenses'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SuccessModal from './SuccessModal'

const categoties = [
    {
        id: 1,
        title: 'Education',
        icon: <FaGraduationCap />,
        color: 'border-violet-800'
    },
    {
        id: 2,
        title: 'Healthcare',
        icon: <FaHandHoldingMedical />,
        color: 'border-red-700'
    },
    {
        id: 3,
        title: 'Shoping',
        icon: <FaShoppingBasket />,
        color: 'border-lime-600'
    },
    {
        id: 4,
        title: 'Food',
        icon: <FaHamburger />,
        color: 'border-amber-950'
    },
    {
        id: 5,
        title: 'Other',
        icon: <FaDumbbell />,
        color: 'border-yellow-500'
    },
]

function AddForm() {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [category, setCategory] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount('')
            return
        }
        setAmount(val)
    }

    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if (title === '' || amount ==='' || !category) {
            const notify = () => toast('Please eneter valid data')
            notify()
            return
        }
        const data ={
            title,
            amount,
            category,
            createdAt: new Date()
        }        
        dispatch(addExpense(data))
        setModalOpen(!modalOpen)
    }

    return (
        <div className='mt-4 shadow-md p-3'>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick                
                pauseOnHover
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className='bg-white pl-3 py-1 mb-4 rounded-md w-[50%]'>
                <label className='mr-2'>Title:</label>
                <input className='focus:outline-none' placeholder='Name of a expenditure' value={title} onChange={(e) => { handleTitle(e) } } />
            </div>
            <div className='bg-white pl-3 py-1 mb-4 rounded-md w-[50%]'>
                <label className='mr-2'>Amount $:</label>
                <input className='focus:outline-none' placeholder='Enter amaunt' value={amount} onChange={(e) => { handleAmount(e) } } />
            </div>
            <div className={`bg-white w-[50%] rounded-md px-3 overflow-hidden mb-60 `}>
                <div className='flex items-center justify-between py-1 cursor-pointer' onClick={() => setCategoryOpen(!categoryOpen)}>
                    <label>{category ? category.title : 'Category'}</label>
                    <BsChevronDown className='cursor-pointer' />
                </div>
                {categoryOpen && <div className=''>
                    {categoties.map(category => (
                        <div key={category.id} className={`flex items-center border-r-4 py-2 ${category.color} hover:bg-gray-200 cursor-pointer`} onClick={() => handleCategory(category)}>
                            <span className='mr-2'>{category.icon}</span> 
                            <label>{category.title}</label>                                                       
                        </div>
                    ))}
                </div>}
            </div>
            <div className='flex flex-row-reverse '>
                <div onClick={handleSubmit} className='flex items-center gap-2 px-2 py-1 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-blue-200'>
                    <label>Add</label>
                    <BsSend />
                </div>
            </div>
        </div>
    )
}

export default AddForm
