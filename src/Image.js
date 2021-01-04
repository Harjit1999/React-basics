import React from "react";
function Image(props)
{   console.log(props);
    return (
          <div>
              <img width="200px" alt="cat" src="https://www.thesprucepets.com/thmb/oDBnu_zqzUR803-GMlXppowtt44=/1080x938/filters:fill(auto,1)/33351631_260594934684461_1144904437047754752_n-5b17d77604d1cf0037f3ea5a.jpg"/>
              <p>phone no:{props.card.phoneNo}</p>
              <p>Name:{props.card.name}</p>
          </div>
    )

          
}
export default Image;