import React,{useState,useEffect} from 'react'

const List = ({getItems}) => {
  const [items,setItems]=useState([])
  
 useEffect(()=>{
  setItems(getItems(5))
  console.log("change")
 },[getItems])
   
  return (
    <div>
      <h3 className='text-xl font-bold '>List of numbers</h3>
        { items.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default List
