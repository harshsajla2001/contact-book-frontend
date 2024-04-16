import { useState } from 'react'

function RegisterForm() {
  const [error, setError] = useState({})
  const [blur, setBlur] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const handleBlur = (e) => {
    setBlur({
      ...blur,
      [e.target.name]: true
    })
  }
  const validate = () => {
    let err = {}
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(formData.name === '' ){
      err.name = 'Name is required!'
      console.log(err)
    }

    if(formData.email === '' ){
      err.email = 'Email is required!'
    }else if(regex.test(formData.email) === false){
      err.email = 'Enter a valid email!'
    }

    if(formData.password === '' ){
      err.password = 'Password is required!'
    }

    if(formData.confirmPassword === '' ){
      err.confirmPassword = 'Confirm your password!'
    }else if(formData.confirmPassword !== formData.password){
      err.confirmPassword = 'Password is incorrect!'
    }
    console.log('err: ', err)
    console.log(formData?.confirmPassword,'=',formData?.password,':',formData.confirmPassword !== formData.password)
    setError(err)

  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // api call -> User register 
    console.log('formData: ', formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="m-8 flex flex-col items-center">

            <div className="flex flex-col items-start">
              <label className='text-sm font-medium leading-6 text-gray-900' htmlFor="name">Name</label>
              <input onBlur={(e)=>{validate(); handleBlur(e);}} value={formData.name} onChange={handleChange} className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6' type="text" name='name' placeholder="Enter Name" />
              {blur.name && error.name ? <span className="text-red-500">{error.name}</span> : null}
            </div>

            <div className="flex flex-col items-start">
              <label className='text-sm font-medium leading-6 text-gray-900' htmlFor="email">Email</label>
              <input onBlur={(e)=>{validate(); handleBlur(e);}} value={formData.email} onChange={handleChange} className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6' type="text" name='email' placeholder="Enter Email" />
              {blur.email && error.email ? <span className="text-red-500">{error.email}</span> : null}
            </div>

            <div className="flex flex-col items-start">
              <label className='text-sm font-medium leading-6 text-gray-900' htmlFor="password">Password</label>
              <input onBlur={(e)=>{validate(); handleBlur(e);}} value={formData.password} onChange={handleChange} className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6' type="text" name='password' placeholder="Enter Password" />
              {blur.password && error.password ? <span className="text-red-500">{error.password}</span> : null}
            </div>

            <div className="flex flex-col items-start">
              <label className='text-sm font-medium leading-6 text-gray-900' htmlFor="confirmPassword">Confirm Password</label>
              <input onBlur={(e)=>{validate(); handleBlur(e);}} onChange={handleChange} className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6' type="text" name='confirmPassword' placeholder="Enter Confirm Password" />
              {blur.confirmPassword && error.confirmPassword ? <span className="text-red-500">{error.confirmPassword}</span> : null}
            </div>

          </div>
          <button
            type='submit'
            className='text-white bg-blue-400 hover:bg-blue-700 focus:ring-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-400'
          >
            Register
          </button>
          <button
            onClick={() => {
            //   setFormData({
            //   name: '',
            //   email: '',
            //   password: ''
            // })
            console.log('blur: ',blur)}
            
          }
            className='text-white bg-red-400 hover:bg-red-700 focus:ring-3 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-400 dark:hover:bg-red-500 focus:outline-none dark:focus:ring-red-400'
            type='button'
          >
            Clear Form
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm