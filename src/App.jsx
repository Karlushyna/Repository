import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import ContactPage from './components/ContactPage/ContactPage';
import Contact from './components/Contact';
import { BsDisplay } from 'react-icons/bs';




function App() {
	
	return (
	<div>
		<Navbar />
		<div className='main'>
		
		<Home />
		<About/>
		<Projects/>
		<Skills/>
		<Work/>
		<ContactPage />
		{/* <Contact/> */}
	</div>
	</div>
	)
	
}

export default App;
