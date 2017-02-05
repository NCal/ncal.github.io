import React, { Component } from 'react';


let links = [
	{name:'React Flickr Search', url:'https://ncal.github.io/React-Flickr-Search/'},
	{name:'CSS Mandala Animation', url:'https://ncal.github.io/Mandala/'},
	{name:'Oblique Strategies', url:'https://ncal.github.io/Oblique_Strategies/'},
	{name:'Eveningss.com', url:'http://www.eveningss.com/'}
];


{/*PARENT CONTAINER*/}
class App extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="container">
				<Links/>
			</div>)
		}
	}


{/*LINKS CONTAINER*/}
class Links extends Component {
	constructor(){
		super();
	}
	render(){
				return (<div>

		       			 <div className=" nav"> 
		       				<h1 style={{fontStyle: 'italic'}}>ncal.github.io</h1>
		       			 	{
		       			 		links.map(function(thang, i){
		       			 			return <a key={i} href={thang.url} >
		       			 					<h5 className="links">{thang.name}</h5>
		       			 					</a> 
		       			 		})
		       			 	}
		       			 </div>
				</div>)
	}
}


export default App;