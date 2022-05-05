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
              color: '#ccc'
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
export default Button
export {List}
