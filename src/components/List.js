import React from 'react';
import Card from './Card';
// import { robots } from './robots'
function List({robots}){
	
	return(
		<div className = "tc">
			{
				robots.map((item,i)=>{
					return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />  
				})
			}
		</div>
	);
}
export default List;