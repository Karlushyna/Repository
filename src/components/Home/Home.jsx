import React from 'react';
// import { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import "./Home.css"

const Home = () => {
// 	const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     // Add the animation class after a 1-second delay
//     const timer = setTimeout(() => {
//       setShowText(true);
//     }, 1000);

//     return () => clearTimeout(timer); // Clean up the timer if the component unmounts
//   }, []);
	return (
		<div name="home" className='home-section' >
			<div className="container-home">
			<div className='container-box'>

				<div className='title-text'>
				<h1 className="font-archivo text-6xl sm:text-9xl font-bold text-[#111111]">				
					Hello.
				</h1>
				<h2 className=" font-archivo text-6xl sm:text-9xl font-bold text-[#111111]">
				I am
				</h2>
				<h2 className=" font-archivo text-6xl sm:text-9xl font-bold text-[#111111]">
				Olesia
				</h2>
				</div>
				<p className='home-side'>
				I am Project Manager with a strong technical background in Fullstack development, 
				adept at transforming visionary concepts into tangible realities. 
				My track record showcases a comprehensive approach, involving in-depth market research, a keen understanding of user requirements, and alignment with overarching business objectives. 
				I excel at collaborating with diverse cross-functional teams, including developers, designers, testers, and managers, to bring innovative ideas to fruition.
				</p>
				
				</div>
				<div>
					<button className="text-black group px-6 py-3 my-2 flex items-center  duration-300"
					style={{ width: '160px',
					
				}}
					// onMouseEnter={(e) => {
					// 	e.target.style.backgroundColor = '#E28996'; // Set the hover background color here
					// }}
					//     onMouseLeave={(e) => {
					// 	e.target.style.backgroundColor = 'inherit'; // Reset the background color on mouse leave
					// }}
					>
						<Link to="work" smooth={true} duration={500}>
							View Work
						</Link>

						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>
					</div>
			</div>
		</div>
	);
};

export default Home;
