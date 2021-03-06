import React from 'react'
import './button.css'
const Button = ({text,click, ...style}) => {
  return (
    <button style={{...style}} onClick={click}>{text}</button>
  )
}

const List = ({data})=> {
   return data !== undefined 
   ? <>
    {
        data.map((e,i)=> {
            const color= {
              color: ''
            }
            e.completed === true 
            ? color.color = '#6EAE49' 
            : color.color ='#EB6469'
            return (
            <li key={i}>
                {i +1}/ {e.title}
                <p style={{...color}}> 
                  Status: {e.completed === true ? 'Done' : 'Not Finished'} 
                </p>
            </li>)
        })
    }
   </> 
   : null
}
const Form =({ onSubmit, value, onChange, condition })=> {
  const { pass, cPass, username } = value
  const { onChangePass, onChangeCPass, onChangeUser } = onChange
  return (
    <>
    <form action="" className='form' onSubmit={onSubmit}>
      <label htmlFor="">Username</label>
      <input type="text" value={username} onChange={onChangeUser}/>
      <label htmlFor="">Password</label>
      <input type="password" value={pass} onChange={onChangePass} />
      <label htmlFor="">Confirm Password</label>
      <input type="password" value={cPass} onChange={onChangeCPass} />
      <input type="submit" className='submit'/>
    </form>
    {
      condition === true ? <h1>Welcome</h1> : null
    }
    </>
  )
}
export default Button
export {List, Form}
