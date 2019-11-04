import React, {Component} from 'react';


class DeleteBuilding extends Component{

    render(){
        const {deleteBuilding, selectedBuilding } = this.props;
        return(
         <div>
             <p>
             <button className = "RemoveButton" onClick = {() => deleteBuilding(selectedBuilding)}>
              Delete Building 
            </button>
            </p>
         </div>
        )
    }
}

export default DeleteBuilding;
