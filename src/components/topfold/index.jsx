import React, { useState } from 'react';
import { BsSearch, BsPlusCircle, BsChevronLeft, BsXCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../redux/actions/expenses';

function Topfold() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch();

    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }

    return (
        <div className='flex justify-between items-center'>
            {window.location.pathname === '/' ? (
                <>
                    <div className="flex items-center bg-white px-2 w-[25%] rounded-full">
                        <BsSearch className="mr-1 text-gray-400" />
                        <input
                            type='text'
                            className='focus:outline-none'
                            placeholder='Search for expenses'
                            value={query}
                            onChange={handleQuery} />
                    </div>
                    <Link to='/add-expense'>
                        <div className='my-2 px-2 flex items-center justify-center gap-2 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-blue-200 cursor-pointer'>
                            <BsPlusCircle />
                            <label>Add</label>
                        </div>
                    </Link>                    
                </>
                ) : (
                <>
                    <Link to='/'>
                        <div className="my-2 px-2 flex items-center justify-center gap-2 cursor-pointer">
                            <BsChevronLeft />
                            <label className='cursor-pointer'>Back</label>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className='my-2 px-2 flex items-center justify-center gap-2 cursor-pointer'>
                            <BsXCircle />
                            <label className='cursor-pointer'>Cancel</label>
                        </div>
                    </Link>                    
                </>
                )
            }
        </div>
    )
}

export default Topfold
