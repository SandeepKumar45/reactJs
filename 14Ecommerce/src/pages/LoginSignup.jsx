import React from 'react'

function LoginSignup() {
  return (
    <div className="w-full h-[90vh] bg-[#fce3fe] pt-[60px] ">
      <div className="w-[33%] h-[87%] bg-white m-auto py-[35px] px-[40px] ">
        <h1 className='my-[20px] font-bold text-xl '>Sign Up</h1>
        <div className="flex flex-col gap-7 mt-[30px] ">
          <input type="text" placeholder='Your Name' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px] '/>
          <input type="email" placeholder='Email Address' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px] '/>
          <input type="password" placeholder='Password' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[15px] '/>
        </div>
        <button className='w-full h-[50px] text-white bg-[#ff4141] mt-[30px] border-none text-[16px] font-medium cursor-pointer '>Continue</button>
        <p className="mt-[13px] text-[#5c5c5c] text-[15px] font-medium ">Already have an account? <span className='text-[#ff4141] font-bold '>Login here</span> </p>
        <div className="flex items-start mt-[12px] gap-1 text-[#5c5c5c] text-[14px] font-medium ">
          <input type="checkbox" name="" id="" />
         <p className='mt-[-4px] '>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup