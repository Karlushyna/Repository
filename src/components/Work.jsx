import React from 'react';
import IceCream from '../assets/ice-project.png';
import Filmoteka from '../assets/filmoteka.png';
import LabProject from '../assets/labequip02.png';
import PetsProject from '../assets/pets02.png';
import BarberProject from '../assets/barbershop.png';

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
				<div className="pb-8 ">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
						Work
					</p>
					<p className="py-6">*Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid-item */}
					<div
						style={{ backgroundImage: `url(${LabProject})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
										className="text-center rounded-lg px-4 py-3 m-2
                    bg-white text-gray-700 font-bold text-lg"
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
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
					<div
						style={{ backgroundImage: `url(${Filmoteka})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
								Project about searching movies, and adding favorite movies to a
								client personal library. Using  JS, npm-packages and SCSS
							</span>
							<div className="pt-8 text-center">
								<a href="https://karlushyna.github.io/Filmoteka-project/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
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
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							Application connecting pets with potential hosts. Used technologies: React, Node.js, MongoDB 
							</span>
							<div className="pt-8 text-center">
								<a href="https://your-pet-ten.vercel.app/news">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
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
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							Application that simplifies hair care appointments. Used HTML, SASS, JavaScript
							</span>
							<div className="pt-8 text-center">
								<a href="https://barbershop-lyart.vercel.app/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
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
					{/* <div
						style={{ backgroundImage: `url(${DashBoard})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					> */}
						{/* Hover effects */}
						{/* <div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							This multi-page website is designed for financial income control. It was made with Next.js, npm packages and SCSS.
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default Work;
