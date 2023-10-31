import { useState } from "react";

const SearchResults = ({selectedProduct}) => {
    let [results,setResults]=useState(true)
    const renderItems = (items) => {return items.map((elem,index)=>
                
        (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{elem}</td>
            </tr>
        ))

        }
    return ( 
        <div className="col-6 container">
            <div className="d-flex justify-content-between my-2">
            <button className="btn btn-primary" onClick={()=>setResults(true)}>Starters</button>
            <button className="btn btn-primary" onClick={()=>setResults(false)}>MainCourses</button>
            </div>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col" className="w-25">S No</th>
                        <th scope="col" className="w-70">Item</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {results?
                        renderItems(selectedProduct[0].starters): 
                        renderItems(selectedProduct[0].mainCourses)
                        }
                </tbody>

               
            
            </table>
        </div>
        
        </div>
     );
}
 
export default SearchResults;