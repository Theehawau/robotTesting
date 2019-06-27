import React from 'react';

function SearchBox({searchChange}) {
	return(
		<div className='ma3'>
			<input 
			className=' pa3 bg-lightest-yellow ba'
			type='search' 
			placeholder='search robots' 
			onChange={ searchChange }
			/>
		</div>
	);
}
export default SearchBox;