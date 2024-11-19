import { useState , useCallback, useMemo} from 'react'

import './App.css'
import List from './List'

function App() {
  const [number, setNumber] = useState(1)
   const [theme,setTheme]=useState('light')


    const getItems=useCallback((nb)=>{
      return [number + nb,number + 1 + nb,number + 2 + nb]
   },[number])

  //  this code will not work becuase useMemo return the result of fanction
//    const getItems=useMemo((nb)=>{
//     return [number + nb,number + 1 + nb,number + 2 + nb]
//  },[number])


  return (
    <div className={`flex flex-col items-center space-y-2 ${theme==='light'? 'bg-white':'bg-black'}` } >
      <h1 className="font-bold  text-2xl mb-3 ">Example of useCallBack Hook</h1>
      <input 
        type='number' 
        className='font-bold p-2 border-2 border-red-500'
        onChange={e=>setNumber(parseInt(e.target.value))}
       
      />

     <button 
        onClick={()=>setTheme(theme ==='light' ? 'dark':"light")}
        className='bg-cyan-500 hover:bg-cyan-600 p-2 text-white font-bold capitalize'>
          toggle theme
      </button>

      <List getItems={getItems}/>

    </div>
  )
}

export default App


