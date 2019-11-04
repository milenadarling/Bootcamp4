import React, {Component} from 'react';

class ViewBuilding extends Component 
{
	render() 
	{

		const{data, selectedBuilding} = this.props
		const building = data
		.filter(directory => directory.id === selectedBuilding)
		
		.map(directory=>
		{
			let lat, long, add;
			if(!directory.coordinates)
			{
				lat = 'N/A'
				long = 'N/A'
			}
			else{
				lat = directory.coordinates.latitude
				long = directory.coordinates.longitude
			}
			if(!directory.coordinates)
				add = 'N/A'
			else
				add = directory.address
		return (
			<div>
				<p className = "select">
					{directory.name}
					<ul className = "info">
						<p className = "id"> ID: {directory.id}</p>
						<p className = "code"> Code: {directory.code}</p>
						<p className = "Address"> Address: {add}</p>
						<p className = "Latitude"> Latitude: {lat}</p>
						<p className = "Latitude"> Longitude: {long}</p>
					
						
					</ul>
				</p>
			</div>
		)
		});
		return (

			<div>
				<p className="col">Click on a name to view more information</p> 
				{building}
			</div>
		);
	}
}
export default ViewBuilding;
