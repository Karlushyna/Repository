import React from 'react';
import './Work.css';

import IceCream from '../../assets/ice-project.png';
import Filmoteka from '../../assets/filmoteka.png';
import LabProject from '../../assets/lab.png';
import PetsProject from '../../assets/pets02.png';
import BarberProject from '../../assets/barbershop.png';
import Design from '../../assets/studio.png';
import Nature from '../../assets/Nature.png';

const Work = () => {
	return (
		<div name="work" className="work-section">
			<div className="work-container">
				<div className="pb-8 ">
					<p className="text-4xl font-archivo font-bold inline border-b-4  text-black-300 border-black-600 ">
						Works
					</p>
					{/* <p className="py-6">*Check out some of my recent work</p> */}
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid-item */}
					<div
						style={{ backgroundImage: `url(${Design})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							REACT app, serves as a hub for potential clients to learn about the studio's expertise, view portfolio and get in touch for potential collaborations.
							</span>
							<div className="pt-8 text-center">
								<a href="https://a-studio-design.vercel.app/">
									<button
										className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
							</div>
						</div>
					</div>
					
					<div
						style={{ backgroundImage: `url(${Filmoteka})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							REACT user-friendly application designed for finding and exploring movies. App simplifies the movie discovery process, making it easy for users to find their next cinematic experience.
							</span>
							<div className="pt-8 text-center">
								<a href="https://karlushyna.github.io/Filmoteka-project/">
									<button
										className="text-center rounded-md px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								{/* <a href="/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a> */}
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${PetsProject})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							REACT app, convenient platform for pet owners and pet lovers to connect. It connects abandoned or sheltered pets with individuals or families willing to provide them with temporary or permanent homes.							</span>
							<div className="pt-8 text-center">
								<a href="https://your-pet-ten.vercel.app/news">
									<button
										className="text-center rounded-md px-4 py-3 m-2
                      bg-white text-black-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								{/* <a href="/"> */}
									{/* <button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a> */}
							</div>
						</div>
					</div>{' '}
					<div
						style={{ backgroundImage: `url(${BarberProject})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							Application that simplifies hair care appointments. Used HTML, SASS, JavaScript
							</span>
							<div className="pt-8 text-center">
								<a href="https://barbershop-lyart.vercel.app/">
									<button
										className="text-center rounded-md px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								{/* <a href="/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a> */}
							</div>
						</div> 
					</div>  
					<div
						style={{ backgroundImage: `url(${Nature})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							NEXT.JS web application designed to help users track and stay informed about disasters and emergencies in real-time.							</span>
							<div className="pt-8 text-center">
								<a href="https://disaster-track-app.vercel.app/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
							</div>
						</div> 
						</div>
						<div
						style={{ backgroundImage: `url(${LabProject})` }}
						className=" shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium  text-white tracking-wider">
							Application tailored for purchasing laboratory equipment.
							Catalog offers diverse tools with specs and images. Streamlines selection and procurement,enhancing laboratory operations.
							</span>
							<div className="pt-8 text-center">
							<a href="https://labequip.netlify.app/products">
									<button
										className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								{/* </a> */}
								{/* <a href="https://labequip.netlify.app/products"> */}
									{/* <button
										className="text-center rounded-lg px-4 py-3 m-2
                    bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button> */}
								</a>
							</div>
						</div>
					</div>
					
						<div
						style={{ backgroundImage: `url(${IceCream})` }}
						className=" shadow-lg shadow-grey group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
								This is a business card website for an ice cream manufacturer.
								Simple and easy-to-use one-page website. It was made using
								HTML, SASS and JS.
							</span>
							<div className="pt-8 text-center">
								<a href="https://karlushyna.github.io/Ice-project/">
									<button className="text-center rounded-md px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								{/* <a href="/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a> */}
							</div>
						</div>
					</div>{' '}
					</div> 
				</div>
			</div>
			
		
	);
};

export default Work;
