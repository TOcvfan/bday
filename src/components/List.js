import React from 'react';

const list = ({name, numberAdults, numberKids, sleepOver}) =>{
	return (
		<div>
			<table>
			  <tr>
			    <th>Name</th>
			    <th>Adults</th>
			    <th>Kids</th>
			    <th>Sleep Over</th>
			  </tr>
			  <tr>
			    <td>{name}</td>
			    <td>{numberAdults}</td>
			    <td>{numberKids}</td>
			    <td>{sleepOver}</td>
			  </tr>
			</table>
		</div>
		)
}

export default list;