import React from 'react';
import './Skills.css';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';
import Mongo from '../../assets/mongo.png';
import SCSS from '../../assets/scss.png';
import Rest from '../../assets/rest.png';
import Tailwind from '../../assets/tailwind.png';
import Next from '../../assets/next.png';
import Typescript from '../../assets/typescript.svg';

const Skills = () => {
	return (
		<div name="skills" className="skills-container">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-6xl font-bold inline border-b-4 border-black-600 ">
						Skills
					</p>
					<p className="py-4"> My technical stack </p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
						<p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
						<p className="my-4">REACT</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto " src={GitHub} alt="GITHUB icon" />
						<p className="my-4">GITHUB</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Node} alt="NODEJS icon" />
						<p className="my-4">NODE JS</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
						<p className="my-4">MONGO DB</p>
					</div>
					<div className="shadow-md   shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
						<p className="my-4">Tailwind</p>
					</div>
					<div className="shadow-md shadow-gray  hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Rest} alt="Rest api icon" />
						<p className="my-4">Rest API</p>
					</div>
					<div className="shadow-md  shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Next} alt="Nextjs icon" />
						<p className="my-4">Next.JS</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={SCSS} alt="SASS icon" />
						<p className="my-4">SASS</p>
					</div>
					<div className="shadow-md shadow-gray hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Typescript} alt="Typescript icon" />
						<p className="my-4">TYPESCRIPT</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
