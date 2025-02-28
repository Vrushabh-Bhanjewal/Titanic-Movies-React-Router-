import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
const ErrorComponent=()=>{
    
    const navigate=useNavigate()

    const error=useRouteError()
    
    const handleBack=()=>{
        navigate(-1)
    }
    console.log(error)

    const er={
        width:'100%',
        height:'100vh',
        backgrounColor:"red",
        display:"flex",
        justifyContent:'center',
        flexDirection:"column",
        alignItems:'center',
        gap:'20px'
    }
    const btn2={
        padding:'10px 40px',
        backgroundColor:'black',
        color:'white',
        borderRadius:'10px',
        fontSize:'18px'
    }
    const btn1={
        padding:'10px 30px',
        border:'1px solid black',
        color:'black',
        borderRadius:'10px',
    }
    const btnBox={
        display:'flex',
        gap:'20px'

    }
    return(<>
    <div style={er}>
        <h1 style={{ textAlign:'center' }}>Error, page Not Found</h1>
        <h3 style={{ textAlign:'center' }}>{error.data}</h3>
        <img width='400px' src='./errorPage.png' alt="errpr img" />
        <div style={btnBox}>
        <NavLink to='/' style={btn1}>Go Home</NavLink>
        <button style={btn2} onClick={()=>handleBack()}>Go Back</button>
        </div>
    </div>
    </>)
}
function ErrorPage() {
  return (
    <div>
        <ErrorComponent/>
    </div>
  )
}

export default ErrorPage
