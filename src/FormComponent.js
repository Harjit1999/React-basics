import React from 'react';
function FormComponent(props)
{
    return (<div>
        <form>
          FirstName:
          <input type="text" name="fname" value={props.data.fname} onChange={props.handleEvent}/>
          <br/>
           LastName:
          <input type="text" name="lname" value={props.data.lname} onChange={props.handleEvent}/><br/>
          Age  :

          <input type="text"name="age" value={props.data.age} onChange={props.handleEvent}/><br/>
          Gender:
          <input type="radio" name="gender" value="Male" checked={props.data.gender==="Male"} onChange={props.handleEvent}/>Male
          <input type="radio" name="gender" value="FeMale" checked={props.data.gender==="FeMale"} onChange={props.handleEvent}/>FeMale
         <select name="destination" value={props.data.destination} onChange={props.handleEvent}>
         <option value="India">India</option>
         <option value="America">America</option>
         <option value="iTaly">Italy</option>
         </select><br/>
         Diet Restrictions :
         <input name="burger" type="checkbox" checked={props.data.burger} onClick={props.handleEvent}/>Burger
         <input  type="checkbox" name="pineapple" checked={props.data.pineapple} onClick={props.handleEvent}/>pineapple
         <button>Submit</button>
     </form>
     <hr/>
     <h4>fname:{props.data.fname}</h4>
     <h4>lname:{props.data.lname}</h4>
     <h4>age:{props.data.age}</h4>
     <h4>gender:{props.data.gender}</h4>
     <h4>destination:{props.data.destination}</h4>
     <h4>diet:{props.data.apple}</h4>
  </div>)
}
export default FormComponent;