import { useState } from 'react';
import Button, { List } from './components/Button/Button';

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
  //  Function setList when load browser the first
   const [list, setList] = useState(()=> {
     getApi(data=> {
       setList(data.filter(e=> e.id <= 20))
     })
   })
   console.log(list)
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
      </>
   );
}

export default App;
