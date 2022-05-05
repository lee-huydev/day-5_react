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
            let color = '#ccc'
            e.completed === true ? color = '#6EAE49' : color ='#EB6469'
            return (
            <li key={i}>
                {number}/ {e.title}
                <p style={color={color}}> 
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
