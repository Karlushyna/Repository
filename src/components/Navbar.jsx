import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegramPlane,  } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] text-1xl font-bold flex justify-between items-center px-4 bg-[#fff] text-black-300">
			{/* <Link to="home" smooth={true} duration={500}>
				<div>
					<img src={Logo} to="home" alt="Logo" style={{ width: '10px' }} />
				</div>
				<div>
					<img src={Logo}  to="home" alt="Logo" style={{ width: '10px' }} />
				</div>
			</Link> */}

			{/* Menu */}
			<ul className="hidden md:flex ">
				<li className="hover:scale-105 hover:duration-300 ">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="hover:scale-105 hover:duration-300 ">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="hover:scale-105 hover:duration-300 ">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="hover:scale-105 hover:duration-300 ">
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="hover:scale-105 hover:duration-300 ">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Burger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>
			{/* Mobile Menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-content bg-[#fff] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-3xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-3xl">
					{' '}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-3xl">
					{' '}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-3xl">
					{' '}
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="py-6 text-3xl">
					{' '}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<li className="py-6 text-2xl">
					<div className="pt-12">
						<p className="uppercase tracking-widest text-black]">
							Let&#39;s Connect
						</p>
						<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
							<a href="https://www.linkedin.com/in/olesiakarlushyna/" target="_blank" rel="noreferrer">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedin />
								</div>
							</a>
							<a href="https://github.com/Karlushyna" target="_blank" rel="noreferrer">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
							</a>
							<a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
								<div
									onClick={() => setNav(!nav)}
									className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
								>
									<FaTelegramPlane />
								</div>
							</a>
							<a href="https://karlushyna.github.io/CV-Karlushyna-Dev/" target="_blank" rel="noreferrer">
								<div
									onClick={() => setNav(!nav)}
									className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
								>
									<BsFillPersonLinesFill  />
								</div>
							</a>
						</div>
					</div>
				</li>
			</ul>
			<div className={!nav ? 'hidden' : 'flex fixed flex-col'}>
				{/* <img src={Logo} alt="Logo" style={{ width: '10px' }} /> */}
			</div>
			
		</div>
	);
};

export default Navbar;


