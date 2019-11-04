import React, {Component} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuildings';
import DeleteBuilding from './components/DeleteBuilding';
import Data from './data/data.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    }
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState(
      {filterText: value}
    )
  }
  addBuilding(building) {
    var idB = Data[Data.length -1];
    building.id = idB.id+1;
    Data.push(building)
    this.setState({
      selectedBuilding: building.id
    })
  }
  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })

    }
  deleteBuilding(id)
  {
    var idD = Data.indexOf(Data.find(build => build.id ===id))
    Data.splice(idD,1);
    this.setState({
      selectedBuilding: 0
    })
    
  }

  render() {
    
    return (
      <div className="bg">
        <div className ="bn">
          <header className = "title">UF Directory App</header>
          <Search 
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}/>
        
        </div>

        
  
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
              data={this.props.data} 
              selectedBuilding = {this.state.selectedBuilding}/>
            </div>

            <div className="deleteBuilding">
              <DeleteBuilding deleteBuilding={this.deleteBuilding.bind(this)}
              selectedBuilding = {this.state.selectedBuilding}/>
            </div>
            <div className="addBuilding">
            
        <span className = "addinfo">Insert new building's information:
        </span>
            <AddBuilding addBuilding={this.addBuilding.bind(this)}/>
            </div>
            
            
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}
export default App;
