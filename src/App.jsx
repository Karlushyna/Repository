import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
	return <div>
		<Navbar />
		<Home />
		<About/>
		<Skills/>
		<Work/>
		<Contact/>
	</div>;
}

export default App;
