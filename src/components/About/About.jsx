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
			<div name="about" className="about-section">
			<div className="about-container">
				<div className="about-grid">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-6xl font-bold inline border-b-4 text-[#111111] border-black-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-left text-2xl text-[#111111] font-bold">
						<p>
						As a developer, my specialization lies in JavaScript, React, and Redux for frontend development, coupled with Node.js, MongoDB, and Express for the backend. My extensive tech stack encompasses a wide array of essential tools and technologies, including HTML, CSS, SASS, CSS libraries, Next.js, 
						REST API, Git, GitHub, CRUD operations, Mongoose, Heroku, WebSockets, Postman, Webpack, Parcel, Figma, Sketch, and proficiency in project management platforms such as Jira, Asana, Confluence, Trello. I am also well-versed in communication tools like Slack, Microsoft Teams, and Smartsheet.
						</p>
					</div>
					<div className='font-bold'>
						<p>
						Proficiency in Agile and Scrum methodologies allows me to streamline project planning, execution, and delivery. 
						I have a proven ability to craft well-structured project timelines, define critical milestones, and efficiently manage resources, ensuring the successful outcome of each project. Furthermore, my solid grasp of UI/UX principles enables me to create visually appealing and functional designs that consistently exceed user expectations.
						With expertise in both project management and UI/UX design, I bring a unique perspective to every project, ensuring that not only are technical requirements met, but the end-user experience is optimized. I am driven by the opportunity to further refine my skills, learn innovative problem-solving techniques, and develop both hard and soft skills. My commitment to delivering results is complemented by my dedication to fostering a positive work process and strong teamwork.
						</p>
						<Link to="projects" smooth={true} duration={500}> {/* Use Link from react-scroll */}
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
