import React from 'react';

const Navigation = ({onRouteChange}) => {
		
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('list')} className='f3 link dim black pa3 pointer'>List of people that have Registered</p>
			</nav>
		);
   	
}

export default Navigation;