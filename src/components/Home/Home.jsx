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
				<h1 className="font-archivo text-9xl sm:text-9xl font-bold text-[#111111]">				
					Hello.
				</h1>
				<h2 className=" font-archivo text-9xl sm:text-8xl font-bold text-[#111111]">
				I am
				</h2>
				<h2 className=" font-archivo text-9xl sm:text-9xl font-bold text-[#111111]">
				Olesia
				</h2>
				</div>
				<p className='home-side'>
					I am Front-End developer, specializing at UI/UX, HTML5,
CSS3, React, Node.js, SASS, Git, JavaScript, REST API, Redux, MongoDB. Looking for a permanent job in a fast-growing company with a friendly team, where I can improve my skills, learn new way of solvin tasks, develop HARD/SOFT skills. As a specialist I strive for the result, but I don't forget about the process and teamwork.
				</p>
				<div> 

				</div>
				</div>
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
	);
};

export default Home;
