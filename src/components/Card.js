import React from 'react';

function Card({ name, email, id}) {
	return(
		<div className = "tc bg-light-yellow dib br3 ma3 pa3 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?size150x150`} alt=" robot"/>
			<div className = "">
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;