import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import Foundation from 'react-foundation';

let links = [
	{name:'Dev-Dash Chrome Extension', url:'https://ncal.github.io/Dev-Dash/'},
	{name:'React Flickr Search', url:'https://ncal.github.io/React-Flickr-Search/'},
	{name:'Oblique Strategies', url:'https://ncal.github.io/Oblique_Strategies/'},
	{name:'CSS Mandala Animation', url:'https://ncal.github.io/Mandala/'},
	{name:'Eveningss.com', url:'http://www.eveningss.com/'}
];

{/*APP*/}
class App extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="container">
				<Bio/>
				<Links/>
				<Contact/>
				<Footer/>
			</div>
		)
		}
	}

{/*HEADER*/}
class Footer extends Component {
	constructor(){
		super();
	}
	render(){
		return (
    		<div className="footer">
			 		<p>NATHAN BROADDUS</p>
    		</div>
       	)
	}
}

{/*BIO*/}
class Bio extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<Column className="bio component"large={2} medium={4} small={8}>
	    		<div >
				 	<h1>BIO</h1>
	    			<p>I am a Front-End Developer with deep roots in design, 
	    			currently residing in Brooklyn, NY. I am always working 
	    			to improve my skills, and I enjoy making functional and elegant projects.</p>
	    		</div>
	 		</Column>
			)
	}
}

{/*LINKS*/}
class Links extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="nav component">
				<Column large={12} medium={12} small={12}>
					<h1>RECENT PROJECTS</h1>
    			 	{
    			 		links.map(function(thang, i){
    			 			return <a key={i} className="links" href={thang.url}><h5 >{thang.name}</h5></a> 
    			 		})
    			 	}
 			 </Column>
		</div>)
			
	}
}

{/*CONTACT*/}
class Contact extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="contact component">
			<Column large={3} medium={4} small={12}>
				<h1>CONTACT</h1>
				<h5>NathanBroaddus@gmail.com</h5>
				<a className="links" href="Https://www.Github.com/ncal"><h5>Github.com/ncal</h5></a>
				<a className="links" href="app/assets/NB_Res2017.pdf"><h5>Resume</h5></a>
				</Column>
			</div>
		)
	}
}

export default App;