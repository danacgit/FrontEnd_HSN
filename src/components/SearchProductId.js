import { useState } from "react";
import SearchResults from "./SearchResults";
const SearchProductId = ({selectedOrder}) => {
    
    let [productShow,setProductShow]=useState(false)
    let showHandler=()=>{
        setProductShow(true)
    }
    let [selectedProductId,setSelectedProductId] = useState('')
    let clickHandler=(e)=>{
        setSelectedProductId(e.target.innerText)
    }
    let [submitSuccess,setSubmitSuccess]=useState(false)
    let [selectedProduct,setSelectedProduct] = useState()

    let submitHandler=(e)=>{
        e.preventDefault()   
        let product =selectedOrder[0].Products.filter((elem)=>elem.productId == selectedProductId)
        if (product.length>0){
             setSubmitSuccess(true)
             setProductShow(false)
             setSelectedProduct(product)
        }
       
        
    }
    let [productIdArr,setProductIdArr]=useState(selectedOrder[0].Products)
    let changeHandler=(e)=>{
        let searchKey = e.target.value
        let productIds = selectedOrder[0].Products.filter((ele)=>ele.productId.toString().includes(searchKey))
        setProductIdArr(productIds)
        setSelectedProductId(e.target.value)
    }
   
    return (
        <> 
        <div className="col-4 container">
        <h3>Product ID</h3>
        <form onSubmit={submitHandler}>
        <input onFocus={showHandler} 
        value={selectedProductId}
        onChange={changeHandler}
        className="form-control" 
        type="search" 
        aria-describedby="helpId" 
        placeholder=""/>
      <button className="btn btn-outline-primary" type="submit" >Search</button>
      </form>
        <ul className="list-group w-50 mt-1">
         
        {
        productShow && productIdArr && productIdArr.map((elem)=>
           (<li key={elem.productId} onClick={clickHandler} className="list-group-item list-group-item-action">
            {elem.productId}</li>) )
        }
        </ul>
        </div>
        {submitSuccess?
         <SearchResults selectedProduct={selectedProduct}/>:''}
        </>
     );
}
 
export default SearchProductId;