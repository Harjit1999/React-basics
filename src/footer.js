import React from "react";
function Footer()
{    var date=new Date(12,4,2000,11);
     var h=date.getHours();
     let w;
     var style={
         fontSize:50,
     }
     if(h<12)
     {
        w="good morning";
        style.backgroundColor="green";
        style.text="blue"
     }
     else{
         w="good afternoon";
         style.backgroundColor="red"
     }
    return (<footer className="foot">
           <h1 style={style}>Good {w}</h1>
    </footer>)
}
export default Footer;