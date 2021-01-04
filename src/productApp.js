import React from "react";
import product from "./productData";
import Product from "./product";
function Pro()
{
    const comp=product.map(function(prod){
        return (<Product key={prod.key} name={prod.name} value={prod.value} />)
    })
    return <div>
        {comp}
        </div>
    
}
export default Pro;