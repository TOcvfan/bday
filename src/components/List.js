import React from 'react';


const List = ({ users }) => {
	
	return (
		
		 <table>
		 	<tbody>
			 <tr>
			    <th>Name</th>
			    <th>Adults</th>
			    <th>Kids</th>
			    <th>Sleep Over</th>
			  </tr>
			{
			users.map((user, i) => {
					return (
						<tr key={i}>		
							<td>{users[i].name} </td>
							<td>{users[i].numberAdults}</td>
							<td>{users[i].numberKids}</td>
							<td>{users[i].sleepOver}</td>
						</tr>
					);
				})

			}	
			</tbody>
			</table>
		
	);
}

export default List;