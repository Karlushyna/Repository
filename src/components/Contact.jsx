import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import ContactImg from '../assets/contact.jpg';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Contact = () => {
	window.addEventListener('scroll', function () {
		const headerHeight = 150;
		const scrollIcon = document.querySelector('.scroll-icon');

		if (window.pageYOffset >= headerHeight) {
			scrollIcon.classList.remove('invisible');
			scrollIcon.classList.remove('opacity-0');
			scrollIcon.classList.add('visible');
			scrollIcon.classList.add('opacity-100');
		} else {
			scrollIcon.classList.remove('visible');
			scrollIcon.classList.remove('opacity-100');
			scrollIcon.classList.add('invisible');
			scrollIcon.classList.add('opacity-0');
		}
	});

	return (
		<div className="w-full h-full  text-gray-300 bg-[#48544C] ">
			<div className="max-w-[1000px]  m-auto px-2 py-16 w-full text-[#ccd6f6] ">
				<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8 bg-[#48544C]">
					{/* left */}
					<div className="col-span-3 lg:col-span-2  w-full h-full p-4">
						<div className="lg:p-4 h-full  ">
							<div>
								<img className="rounded-xl" src={ContactImg} alt="/" />
							</div>
							<div>
								<h2 className="py-2">Olesia Karlushyna</h2>
								<p>Front-end Developer</p>
								<p className="py-4">
									I am available for front-end positions. Contact
									me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-2">To contact me</p>
								<div className="flex items-center justify-between p-3">
									<a
										href="https://www.linkedin.com/in/olesiakarlushyna/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="p-3 cursor-pointer hover:scale-110 ease-in duration-300  rounded-full shadow-lg shadow-gray-400">
											<FaLinkedin size={30} />
										</div>
									</a>
									{/* <a
										href="https://github.com/Karlushyna"
										target="_blank"
										rel="noreferrer"
									>
										<div className="p-3 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full shadow-lg shadow-gray-400">
											<FaGithub size={30} />
										</div>
									</a> */}
									<a
										href="https://web.telegram.org/k/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="p-3 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full shadow-lg shadow-gray-400">
											<FaTelegramPlane size={30} />
										</div>
									</a>
									<a
										href="https://karlushyna.github.io/CV-Karlushyna-Dev/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="p-3 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full shadow-lg shadow-gray-400">
											<BsFillPersonLinesFill size={30} />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="col-span-3 w-full h-auto lg:p-4">
						<div name="contact" className="p-4">
							{/* <form
								method="POST"
								action="https://getform.io/f/b9f9619b-f219-4330-8531-1d8ad1344d29"
								className="flex flex-col max-w-[500px] w-full"
							>
								<input
									className=" bg-[#ccd6f6] p-2 text-black"
									type="text"
									placeholder="Name"
									name="name"
								/>
								<input
									className="my-4 p-2 bg-[#ccd6f6] text-black"
									type="email"
									placeholder="Email"
									name="email"
								/>
								<textarea
									className="bg-[#ccd6f6] p-2 text-black"
									name="message"
									rows="10"
									placeholder="Message"
								></textarea>
								<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300">
									Let's Collaborate{' '}
								</button>
							</form> */}
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link to="home" smooth={true} duration={500}>
						<a
							href="https://www.linkedin.com/in/olesiakarlushyna/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in scroll-icon fixed bottom-0 right-0 mb-4 mr-4 transform transition-opacity opacity-0 invisible">
								<HiOutlineChevronDoubleUp
									className="text-[#61f64a]"
									size={20}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
