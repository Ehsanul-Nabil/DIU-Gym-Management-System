import React, { useState } from 'react'
import './signUp.css'
import Modal from '../Modal/modal'
import ForgotPassword from '../ForgotPassword/forgotPassword';

const Signup = () => {
    const [forgotPassword, setForgotPassword] = useState(false);
    
    const handleClose = ()=>{
    setForgotPassword(prev=>!prev);
  }
  //   const forgotPasswordContent = () =>{
  //   return(
  //     <div>
  //       this Content is coming from Parent component
  //     </div>
  //   );
  // }


  return (
    <div className='customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-500 bg-opacity-50 h-[450px] overflow-y-auto'>
      <div className='font-sans text-white text-center text-3xl'>Register Your Gym</div>
      <input type='text' className='bg-white w-full my-10 p-2 rounded-lg' placeholder='Enter Email' />
      <input type='text' className='bg-white w-full mb-10 p-2 rounded-lg' placeholder='Enter Gym Name' />
      <input type='text' className='bg-white w-full mb-10 p-2 rounded-lg' placeholder='Enter UserName' />
      <input type='password' className='bg-white w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
      <input type='file' className=' bg-white w-full mb-10 p-2 rounded-lg' />
      <img src='https://th.bing.com/th/id/OIP.h4NU8Jb9tA2gJLi3veRj-wHaEl?rs=1&pid=ImgDetMain' className='mb-10' />
      
      <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'>Register</div>
      <div className='p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={() => handleClose()}>Forget Password</div>
    {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword/>} />}
    </div>
  )
}

export default Signup


// import React,{useState} from 'react'
// import './signUp.css';
// import ForgotPassword from '../ForgotPassword/forgotPassword';
// import Modal from '../Modal/modal';
// const SignUp = () => {

//   const [forgotPassword, setForgotPassword] = useState(false);

//   const handleClose = ()=>{
//     setForgotPassword(prev=>!prev);
//   }

// //   const forgotPasswordContent = () =>{
// //     return(
// //       <div>
// //         this Content is coming from Parent component
// //       </div>
// //     );
// //   }

//   return (
//     <div className='customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto'>
//       <div className='font-sans text-white text-center text-3xl'>Register Your Gym</div>
//       <input type='text' className='w-full my-10 p-2 rounded-lg' placeholder='Enter Email' />
//       <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Gym Name' />
//       <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter UserName' />
//       <input type='password' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
//       <input type='file' className='w-full mb-10 p-2 rounded-lg' />
//       <img src='https://th.bing.com/th/id/OIP.h4NU8Jb9tA2gJLi3veRj-wHaEl?rs=1&pid=ImgDetMain' alt="" className='mb-10 h-[200px] w-[250px]' />
      
//       <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'>Register</div>
//          <div className='p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={() => handleClose()}>Forgot Password {forgotPassword} hello </div>
//             {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}
//     </div>
//   )
// }

// export default SignUp


