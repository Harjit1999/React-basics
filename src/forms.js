import  React from "react";


class Form extends React.Component{
    constructor()
    {
        super();
        this.state={
            fname:" ",
            lname:" ",
            check:true,
            gender:"",
            car:""
        }
        this.handleEvent=this.handleEvent.bind(this);
    }

 handleEvent(event)
 {
    //  if(event.target.name==="fn")
    //  {
    //      this.setState({
    //          fname:event.target.value,
    //      })
    //  }
    //  else{
    //      this.setState({
    //          lname:event.target.value,
    //      })
    //  }
    if(event.target.type==="checkbox")
    {this.setState({check:!this.state.check})
 }
   
    this.setState({
        [event.target.name]:event.target.value,
    })
 }
    render()
    {
        return <div>
              <form onSubmit={this.handleSubmit}>
                Name:
                <input type="text" placeholder="firstname" name="fname" value={this.state.fname} onChange={this.handleEvent}></input> 
                Lname:
                <input type="text" name="lname" value={this.state.lname} onChange={this.handleEvent}></input>
                <input type="checkbox" checked={this.state.check} onClick={this.handleEvent}/>I am 18
                <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleEvent}/>Male
                <input type="radio" name="gender" value="female"checked={this.state.gender==="female"} onChange={this.handleEvent}/>Female
                <select value={this.state.car} name="car" onChange={this.handleEvent}>
                    <option>Lambo</option>
                    <option>i20</option>
                    <option>ferrari</option>
                    <option>maruti</option>
                </select>
                <h1>{this.state.fname}</h1>
                <h1>{this.state.lname}</h1>
                <h1>i am {this.state.gender}</h1>
                <h1>selected car is {this.state.car}</h1>
                <button>Submit</button>
            </form>
        </div>
    }
}

export default Form;