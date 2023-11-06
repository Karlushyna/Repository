import { useEffect } from 'react';

import Navbar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Cases from "./components/Cases/Cases";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";


function App() {
  useEffect(() => {
		import("lightbox2/dist/js/lightbox.min.js").then((Lightbox) => {
			import("lightbox2/dist/css/lightbox.min.css");
		});
	}, []);
	return (
		<>
			<Navbar />
			
      <Hero />
      <About/>
      <Cases/>
      <Blog/>
      <Team/>
      <Form/>
      
      <Footer/>
		</>
	);
}

export default App;
