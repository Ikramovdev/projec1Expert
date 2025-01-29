import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
const NotFound = () => {
  const text = '<- Orqaga qaytish'
  const navigate = useNavigate()
  return (
    <div className='ml-[30%] mt-[300px]'>
        <h1 className='text-[50px]'>Bunday saxifa mavjud emas !</h1>
        <Button onClick={() => navigate(-1)} className='mx-[200px] mt-[30px] w-[200px] py-[10px] !bg-blue-400' size='large' type='primary' >{text}</Button>
    </div>
  )
}

export default NotFound