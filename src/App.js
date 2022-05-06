import { useState } from 'react';
import Button, { List, Form } from './components/Button/Button';

import './App.css';

function App() {
   const api = 'https://jsonplaceholder.typicode.com/todos';
  //  Function call API
   const getApi = (callback) => {
      fetch(api)
         .then((response) => {
            return response.json();
         })
         .then((list) => {
            callback(list)
         });
   };
  //  Initialize value of list when browser load
   const [list, setList] = useState(()=> {
     getApi(data=> {
       setList(data.filter(e=> e.id <= 20))
     })
   })
  //  Function handle event click
   const handleOnClick = (e) => {
      const text = e.target.innerText;
      switch (text) {
         case 'Completed':
            getApi(list=> {
              setList(list.filter(e=> e.id <= 20 && e.completed === true))
            })
            break;
         case 'Not completed':
            getApi(list => {
              setList(list.filter(e=> e.id <=20 && e.completed === false))
            })
            break;
         case 'All':
            getApi(list => {
              setList(list.filter(e=> e.id <=20))
            })
            break;
      }
   };
   // Function handle Form
   const [pass, setPass] = useState('')
   const [cPass, setCPass] = useState('')
   const [username, setUsername] = useState('')
   const [isTrue, setIsTrue] = useState(false)
   const handleSubmit = (e)=> {
      e.preventDefault()
      pass && cPass !== '' && pass === cPass 
      ? (setIsTrue(true) || alert('Please scroll mouse down seen result!'))
      : (setIsTrue(false) || alert('Password wrong, please again!'))
      setPass('')
      setCPass('')
      setUsername('')
   }
   // Handle onchange input
   const handleOnChange = {
      onChangePass(e) {
         setPass(e.target.value)
      },

      onChangeCPass(e) {
         setCPass(e.target.value)
      },

      onChangeUser(e) {
         setUsername(e.target.value)
      }
   }
   const {onChangePass, onChangeCPass, onChangeUser} = handleOnChange
   return (
      <>
         <div className="btn-option">
            <Button
             text={'Completed'}
             backgroundColor={'#6EAE49'} 
             click={handleOnClick} />
            <Button
             text={'Not completed'}
             backgroundColor={'#EB6469'} 
             click={handleOnClick} />
            <Button
             text={'All'}
             backgroundColor={'#F2C319'} 
             click={handleOnClick} />
         </div>
         <div className="todo-list">
            <ul>
               <List data={list} />
            </ul>
         </div>
         <Form
          onSubmit={handleSubmit}
          value={{pass, cPass, username}}
          condition={isTrue}
          onChange = {{onChangePass, onChangeCPass, onChangeUser}}
          />
      </>
   );
}

export default App;
