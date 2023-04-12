import React from 'react'
import Modal from 'react-modal';
import Success from '../../assets/success.png'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SuccessModal = ({ modalOpen, setModalOpen }) => {
    
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

  return (
    <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
        <div className='flex flex-col justify-center items-center gap-2'>
            <label className='text-center'>Expense Added Successfully</label>           
            <img src={Success} className='w-56' />
            <Link to='/'>
                <div className='flex items-center gap-1 px-2 py-1 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-blue-200'>
                    <FaHome /> Home
                </div>
            </Link>
            
        </div>
    </Modal>
  )
}

export default SuccessModal
