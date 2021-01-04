import React from "react";
import './stylememe.css';
class Meme extends React.Component{

    constructor()
    {
        super();
        this.state={
            top:"",
            bottom:"",
            image:"",
            allmeme:[]
        }
        //this.componenetDidMount=this.componenetDidMount.bind(this);
        this.handleEvent=this.handleEvent.bind(this);
    }
    // componenetDidMount()
    // {
    //     fetch("https://api.imgflip.com/get_memes").then(function(res)
    //     {
    //         res.json()
    //     }).then(function(res)
    //     {    const {memes}=res.data;
    //     console.log(memes[0]);
    //          this.setState({
    //              allmeme:memes,
    //          })
    //     }
    //     )
    // }
    handleEvent(event)
    {
      this.setState({
          [event.target.name]:event.target.value,
      })
    }
    render()
    { 
    
        return(
        <div>
            <header>
                <img src="https://store-images.microsoft.com/image/apps.59682.9007199266251377.11eabd37-a0d4-4a98-a6dc-6cd4ec6a02e3.33ff95a5-12b9-4036-9843-957c1b44cdd8?mode=scale&q=90&h=200&w=200&background=%230078D7" alt="meme"/>
            </header>
            <form>
            top text:
            <input type="text" value={this.state.top} name="top" onChange={this.handleEvent}/><br/>
            bottom text:
            <input type="text" name="bottom" value={this.state.bottom} onChange={this.handleEvent}/>
            </form>
            <div className="container">
            <img src="https://image.shutterstock.com/image-vector/emotional-stickers-internet-memes-troll-260nw-1435828565.jpg" alt="problem"/>
           <div className="top"><h5>{this.state.top}</h5></div>
            <h5>{this.state.bottom}</h5>
            </div>
        </div>)
    }
}
export default Meme;