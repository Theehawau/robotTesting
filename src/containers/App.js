import React , { Component } from 'react';
import List from '../components/List';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
class App extends Component{
	constructor(){
		super()
		this.state={
			robots : [] ,
			searchfield : ''
		}
	}
	onSearchChange = (event) =>{
		this.setState({ searchfield : event.target.value });
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users' )
		.then( response => 
			{ return response.json() }
		) 
		.then (users =>
		 this.setState({ robots : users})
		)
	}
	render(){
		const { robots , searchfield}= this.state ;

		const filteredRobot = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ? 
			(<h1>Loading</h1>) :
			(<div className='tc'>
				<h1 className='f1'>ROBO FRIENDS</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<List robots={ filteredRobot } />
				</Scroll>
			</div>)
	}
}
export default App;