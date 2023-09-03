import React from 'react';
import { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import "./Home.css"

const Home = () => {
	const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Add the animation class after a 1-second delay
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);
	return (
		<div name="home" className="w-full h-screen bg-[#48544C] ">
			{/* COntainer */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
				{/* <p className="text-pink-600">Hi, my name is</p> */}
				<h1 className="text-9xl sm:text-9xl font-bold text-[#EFF9DD] animated-text">
					Hello.
				</h1>
				<h2 className="text-4xl sm:text-8xl font-bold text-[#EFF9DD]">
				My name is Olesia
				</h2>
				<p className="font-semi-bold text-[#EFF9DD] py-4 max-w-[900px]">
					I am Front-End developer, specializing at UI/UX, HTML5,
CSS3, React, Node.js, SASS, Git, JavaScript, REST API, Redux, MongoDB. Looking for a permanent job in a fast-growing company with a friendly team, where I can improve my skills, learn new way of solvin tasks, develop HARD/SOFT skills. As a specialist I strive for the result, but I don't forget about the process and teamwork.
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
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
