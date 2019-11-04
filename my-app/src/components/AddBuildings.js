import React, {Component} from 'react';
import BuilingList from './BuildingList';

class AddBuilding extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        id: null,
        code: '',
        name: '',
        address: ''
        }

    
      }
      handleChange = (e) => {
          this.setState(
            { 
              [e.target.name]: e.target.value  
            });
        };
     handleSubmit = (e) =>
     {
         e.preventDefalt();
         this.props.addBuilding(this.state)
         this.setState({
            code: '',
            name: '',
            address: '',
         })
     }
    render(){
    return ( 

        <div>
        <form onSubmit = {this.handleSubmit}>
            
            <p className="code" >Code </p>
            <input className = "buildinginfo" type="text" name="code" value={this.state.code} on onChange={this.handleChange}/>
            <p htmlFor="name">Name</p>
            <input className = "buildinginfo" type="text" name="name" value={this.state.name} on onChange={this.handleChange}/>
            <p htmlFor="address">Address</p>
            <input className = "buildinginfo" type="text" name="address" value={this.state.address} on onChange={this.handleChange}/>
            <div>
            <button>Add Building</button>
            </div>

            
        </form>
        </div>

    



    )}
    
}
    
export default AddBuilding;
    