import React from 'react';
import FormComponent from "./FormComponent";
class Form2 extends React.Component{

    constructor()
    {
        super();
        this.state={
            fname:" ",
            lname:" ",
            age:" ",
            gender:"",
            destination:"",
           
            pineapple:false,
            burger:false
            
        }
        this.handleEvent=this.handleEvent.bind(this);
    }
   handleEvent(event)
   {  if(event.target.type==="checkbox")
   {
        this.setState({
            [event.target.name]:event.target.checked,
        })
   } else{
     this.setState({
         [event.target.name]:event.target.value,
     })
    }
   }
    render()
    {
        return (
            <FormComponent
            handleEvent={this.handleEvent}
            data={this.state}
            />
        )
              
    }
}
export default Form2;