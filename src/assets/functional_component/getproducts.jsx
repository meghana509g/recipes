import { useState } from "react"


function Getproducts(){
    const [products,setproducts]=useState([])
    //get recipes function
    const get_recipes=async ()=>{
        let response=await fetch('http://127.0.0.1:8000/recipes/')
        response    =await response.json()
        setproducts(response.recipes)
    }

    console.log(products,'products')
    return <div>
            <div><button onClick={get_recipes}>get recipes</button></div>

            
            {products.length>0?
            products.map((each_item)=><img src={each_item.image} style={{width:'150px',height:'150px'}}/>)

            :
            "data loading...."
        
            }
           </div>
}

export default Getproducts






