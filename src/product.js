import React from "react";

function Product(props)
{
    return <div>
        <h1>product name:{props.name}</h1>
        <h1>product value:{props.value}</h1>
    </div>
}
export default Product;