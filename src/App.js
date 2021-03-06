import React, {Component} from 'react';
import {CardList} from './components/card-list/cardList.component.jsx'
import {SearchBox} from './components/search-box/searchBox.component'
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = { 
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(users => this.setState({monsters: users}))
	}

	handleChange = (e) => { this.setState({ searchField: e.target.value }) }

	render() {
		const {monsters, searchField} = this.state
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
		return(
			<div className="App">
				<SearchBox 
					placeholder="search monsters"
					handleChange={this.handleChange} >
				</SearchBox>
				<CardList monsters={filteredMonsters}/> 
			</div>
		);
	}
}

export default App;
