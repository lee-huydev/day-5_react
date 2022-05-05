import React from 'react'
import './button.css'
const Button = ({text,click, ...style}) => {
  return (
    <button style={{...style}} onClick={click}>{text}</button>
  )
}

const List = ({data})=> {
   let number = 0
   return data !== undefined 
   ? <>
    {
        data.map((e,i)=> {
            number ++
            return <li key={i}>{number}: {e.title}</li>
        })
    }
   </> 
   : null
}
export default Button
export {List}
