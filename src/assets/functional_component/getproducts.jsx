import { useState } from "react"


function Getproducts(){
    const [products,setproducts]=useState([])
    //get recipes function
    const get_recipes=async ()=>{
        let response=await fetch('https://food-restraunt-backend-server.onrender.com/recipes/')
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






