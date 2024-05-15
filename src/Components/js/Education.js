import React from 'react';
import Trace2 from '../../images/traço2.svg';
import '../css/Education.css';
import MobwiserLogo from '../../images/mobwiserLogo.png';
import SCBasics from '../../images/SCBasics.png';
import SCPlus from '../../images/SCPlus.png';
import SCReact from '../../images/SCReact.png';
import iefp from '../../images/iefp.svg';

export default function Education() {
	return (
		<div id="education">
			<h1>
				{' '}
				<span className="title white-font">
					Where did I learn?
					<img class="trace" src={Trace2} alt="underline draw" />
				</span>
			</h1>

			<div className="education-description">
				<p className="education-description-text">
					I started to learn how to code on my own in 2020, after a few Youtube
					videos and an Udemy course I decided to enroll on my first Coding
					Bootcamp. When I started to feel more curious about frameworks such as
					React I enrolled on the SheCodes React Workshop. I am now currently studying <strong>Python</strong> in a portuguese government program.
				</p>

				<div className="education-images-container row">
					<a
						href="https://mobwiser.com/"
						className="educator-container mobwiser col"
						target={'_blank'}
						rel="noreferrer">
						<img
							className="logo-image"
							src={MobwiserLogo}
							alt="mobwiser logo"
						/>
						<h5>Mobwiser Bootcamp</h5>
						<p>2020-2021</p>
					</a>

					<a
						href="https://www.shecodes.io/certificates/6539a22d348e23df9f0edcea35c6a7bc"
						className="educator-container  col"
						target={'_blank'}
						rel="noreferrer">
						<img
							className="logo-image"
							src={SCBasics}
							alt="shecodes basics logo"
						/>
						<h5>SheCodes Basics</h5>
						<p>September 2021</p>
					</a>

					<a
						href="https://www.shecodes.io/certificates/c06ed84ce1baba664896318de9660d7d"
						className="educator-container col"
						target={'_blank'}
						rel="noreferrer">
						<img className="logo-image" src={SCPlus} alt="shecodes plus logo" />
						<h5>SheCodes Plus</h5>
						<p>November 2021</p>
					</a>

					<a
						href="https://www.shecodes.io/certificates/018ac3099007fea58ed354574cebd784"
						className="educator-container col"
						target={'_blank'}
						rel="noreferrer">
						<img
							className="logo-image"
							src={SCReact}
							alt="shecodes react logo"
						/>
						<h5>SheCodes React</h5>
						<p>December 2021</p>
					</a>

					<a
						href="https://iefponline.iefp.pt/IEFP/centros-emprego-detalhe.do?idcentro=269"
						className="educator-container col-6"
						target={'_blank'}
						rel="noreferrer">
						<img className="logo-image" src={iefp} alt="iefp logo" />
						<h5>Python Programming Course</h5>
						<p>On going</p>
					</a>
				</div>
			</div>
		</div>
	);
}
