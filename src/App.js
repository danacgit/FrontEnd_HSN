import './App.css';
import Search from './components/Search';
import { useEffect, useState } from 'react';

function App() {
  let [data,setData]=useState()
  useEffect(()=>{
    let fetchData = async()=>{
      let resp = await fetch('./hsn.json')
      let data = await resp.json()
      setData(data)
      console.log(data)
    }
    fetchData()
  },[])
  return (
    <div>
     
     {data && <Search prop={data}/>}
    </div>
  );
}

export default App;
