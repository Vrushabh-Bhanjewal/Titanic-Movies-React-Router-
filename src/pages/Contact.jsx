import React from 'react'
import style from './contact.module.css'
import { Form } from 'react-router-dom'

export const contactData=async ({request})=>{
  try{
    const res= await request.formData()
    // console.log(res)   
    const data=Object.fromEntries(res)  
    // console.log(data)
  }catch(error){
    console.log(error.message)
  }
} 

const Contact = () => {
  return (
    <div className={style[`flex-two`]}>
        <figure className={style.img}>
          <img src="./contact.png" alt="" />
        </figure>
        <div className={style['contact-container']}>
          <h1>Contact Us</h1>
          <Form className={style['form-layout']} method='POST' action="/contact">
            <label htmlFor="name">Name</label>
            <input type="text" name='Name' id='Name' placeholder='Enter Full Name' autoComplete='false' required />
            <label htmlFor="Mail">E-mail</label>
            <input type="text" name='Mail' id='Mail' placeholder='abcd@mail.com' autoComplete='off' required />
            <label htmlFor="Address">Address</label>
            <textarea name="Address" id="Address" cols="30" rows="6" ></textarea>
            <button className={style.cbtn}>Submit </button>
          </Form>
        </div>

    </div>
  )
}

export default Contact
