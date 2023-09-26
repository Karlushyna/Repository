import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import './Contact.css';

const ContactPage = () => {
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
        <div name="contact" className='contact-section'>
            <div className='contact-container'>
            {/* <div className="sm:text-right pb-8 pl-4"> */}
            <div className="contact-text">
						<p className="text-4xl font-bold inline border-b-4 text-[#111111] border-black-600">
                        {/* <p className="custom-text"> */}
							Contact
						</p>
                        <div className='text-box'>
                        <p className='contact-side'> Have a question, project idea, or just want to say hello? I'd love to hear from you! Feel free to reach out using any of the methods below. I'm always up for a chat and eager to connect with fellow enthusiasts, creators, and collaborators. </p>
                        </div>
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
									<a
										href="https://github.com/Karlushyna"
										target="_blank"
										rel="noreferrer"
									>
										<div className="p-3 cursor-pointer hover:scale-110 ease-in duration-300 rounded-full shadow-lg shadow-gray-400">
											<FaGithub size={30} />
										</div>
									</a>
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
                </div>
			
					
           

        
    )
}

export default ContactPage;