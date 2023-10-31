import { useState } from 'react'
import SearchProductId from './SearchProductId'

const Search = ({prop}) => {
 let [orderIdArr,setOrderIdArr]=useState(prop)
 let [submitSuccess,setSubmitSuccess]=useState(false)
 let [selectedOrderId,setSelectedOrderId]=useState('')
 let [selectedOrder,setSelectedOrder]=useState()
 let [show,setShow]=useState(false)

  let changeHandler=(e)=>{
    let searchKey = e.target.value
    let orderIds = prop.filter((ele)=>ele.orderId.toString().includes(searchKey))
    setOrderIdArr(orderIds)
    setSelectedOrderId(e.target.value)
  }
  let submitHandler = async (e)=>{
    e.preventDefault()
    let order = await prop.filter((ele)=>ele.orderId==selectedOrderId)
    if (order.length>0){
      setSubmitSuccess(true)
      setSelectedOrder(order)
      setShow(false)
    }
    
  }
 
  let clickHandler=(e)=>{
    setSelectedOrderId(e.target.innerText)
  }
  let showHandler=()=>{
    setShow(true)
    setSubmitSuccess(false)
  }

    return ( 
      <>
        <div className="col-4 container">
        <h3>HSN Order Search</h3>
        <form onSubmit={submitHandler}>
        <input className="form-control me-2" value={selectedOrderId} onFocus={showHandler} onChange={changeHandler} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit" >Search</button>
      </form>
      <ul className="list-group w-50 mt-1">
      {
       show && orderIdArr && orderIdArr.map((ele)=>
  
         (<li key={ele.orderId} onClick={clickHandler} className="list-group-item list-group-item-action">{ele.orderId}</li>) )
      }
      </ul>
      </div>
      {(submitSuccess)? 
      <SearchProductId selectedOrder={selectedOrder}/>:''}
      
      </>
  
     );
}
 
export default Search;