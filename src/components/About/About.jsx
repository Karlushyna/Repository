import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import {  Link   } from 'react-scroll';
import './About.css';

const About = () => {
	const [showAboutPage, setShowAboutPage] = useState(false);

	const toggleAboutPage = () => {
	  setShowAboutPage(!showAboutPage);
	};

	return (
		<div name="about" className="w-full h-content bg-[#fff] text-black-300 "
		style={{
			paddingTop: '30px',
			paddingBottom: '60px',
		}}>
			<div className="flex flex-col justify-center items-center w-full h-full ">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 text-[#111111] border-black-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl text-[#111111] font-bold">
						<p>
							Hi. I'm Olesia Karlushyna, nice to meet you. Please take a look around.
						</p>
					</div>
					<div>
						<p>
            I'm passionate about creating great websites that improve the lives of those around me. I specialise in creating a variety of websites for clients ranging from individuals and small businesses to large corporations. What would you do if you had someone like me at your fingertips?
						</p>
						<Link to="about-page" smooth={true} duration={500}> {/* Use Link from react-scroll */}
        <button
          className="text-black group px-6 py-3 my-2 flex items-center duration-300 button-more"
          style={{ width: '160px' }}
        >
          More
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
          </span>
        </button>
      </Link>




						{/* <button
        className="text-black group px-6 py-3 my-2 flex items-center duration-300 button-more"
        style={{ width: '160px' }}
        onClick={toggleAboutPage}
      >
        More
        <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3 " />
        </span>
      </button>
      {showAboutPage && <AboutPage />} */}


						{/* <button className="text-black group px-6 py-3 my-2 flex items-center  duration-300 button-more"
					style={{ width: '160px',
					
				}}
					
					>
						<Link to="work" smooth={true} duration={500} >
							More
						</Link>

						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
