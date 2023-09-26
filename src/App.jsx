import React from 'react';
import './App.css'

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import ContactPage from './components/ContactPage/ContactPage';




function App() {
	
	return (
	<div >
		<Navbar />
		<div className='main'>
		
		<Home />
		<About/>
		<Projects/>
		<Skills/>
		<Work/>
		<ContactPage />
	</div>
	</div>
	)
	
}

export default App;
