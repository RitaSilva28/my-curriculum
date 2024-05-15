import React from 'react';
import Trace2 from '../../images/traço2.svg';
import Photo from '../../images/PHOTO-2023-12-08-23-35-55 copy.png';

import '../css/About.css';

export default function About() {
	return (
		<div id="about">
			<h1>
				{' '}
				<span className="title">
					About me...
					<img class="trace" src={Trace2} alt="underline draw" />
				</span>
			</h1>

			<div className="about-me-container row ">
				<img
					className=" profile-photo col-sm-5 .float-sm-right
"
					src={Photo}
					alt="Rita Silva"
				/>

				<p className="col-sm-7 mx-auto about-description">
					Hi there! I'm Rita! <br />
					<br />
					I'm a <strong>Frontend Developer</strong> with a strong UX/UI knowledge. In 2020 with lockdown and the
					pandemic I decided to explore how to create a website. I always
					considered myself to be a very curious person and to easily learn new
					things. <br /> <br />
					I enrolled in a few short courses on websites like Udemy and LinkedIn
					Learning. I moved on to Mobwiser’s Web Development Bootcamp and in
					2022 I finished 3 SheCodes Workshops (Basics, Plus and React). <br />{' '}
					<br />
					Last year I studied UX/UI Design at the Lisbon School of Design and I
					am now colaborating with a start up called Equivalence as a{' '}
					<strong>Front-end Developer and UX/UI Designer</strong> while studying Python in a government program.
					<br />
				</p>
			</div>

			<div className="skills-container">
				<h4>My Skills</h4>

				<div className="row">
					<ul className="col">
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Angular</li>
                        <li>Figma</li>
                        

                        
					</ul>
					<ul className="col">
						<li>VSCode</li>
						<li>Typescript</li>
						<li>Bootstrap</li>
						<li>GIT</li>
						<li>NPM</li>
                        <li>Adobe Creative Bundle</li>
					</ul>
				</div>
			</div>

			<div className="hire-container">
				<h4>What I can bring to your team...</h4>

				<ul>
					<li>Team Work</li>
					<li>Communication</li>
					<li>Responsability</li>
					<li>Organization</li>
					<li>Enthusiastic Learner</li>
					<li>Commitment</li>
                    <li>Curiosity</li>
                    <li>Creativity</li>
                    <li>Problem-Solving</li>
                    <li>Attention to Detail</li>
				</ul>
			</div>
		</div>
	);
}
