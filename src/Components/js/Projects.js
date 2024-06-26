import React from 'react';
import '../css/Projects.css';
import Trace2 from '../../images/traço2.svg';
import CalculatorSalary from '../../images/salarycalculator.png';
import Dictionary from '../../images/dictionary.png';
import ShareHumanity from '../../images/sharehumanity.png';
import WeatherWebsite from '../../images/weatherwebsite.png';
import equivalence from "../../images/equivalence.png";

export default function Projects() {
	return (
		<div id="projects">
			<h1>
				{' '}
				<span className="title">
					What I've built so far...
					<img class="trace" src={Trace2} alt="underline draw" />
				</span>
			</h1>

			<div className="projects-container row">
				<div className="col-3 project-container">
					<a
						href="https://ritasilva28.github.io/Calculadora-Salario/"
						target={'_blank'}
						rel="noreferrer">
						<img src={CalculatorSalary} alt="calculadora salário website" />
						<h5>Salary Calculator</h5>
						<p>Vanilla JS</p>
					</a>
				</div>

				<div className="col-3 project-container">
					<a
						href="https://vigilant-sammet-7b4e7b.netlify.app/"
						target={'_blank'}
						rel="noreferrer">
						<img src={ShareHumanity} alt="share humanity website" />
						<h5>Share Humanity</h5>
						<p>Angular</p>
					</a>
				</div>

				<div className="col-3 project-container">
					<a
						href="https://cranky-khorana-e5dd72.netlify.app"
						target={'_blank'}
						rel="noreferrer">
						<img src={WeatherWebsite} alt="Weather website" />
						<h5>Weather App</h5>
						<p>React</p>
					</a>
				</div>

				<div className="col-3 project-container">
					<a
						href="https://cocky-thompson-249444.netlify.app"
						target={'_blank'}
						rel="noreferrer">
						<img src={Dictionary} alt="dictionary website website" />
						<h5>Dictionary</h5>
						<p>React</p>
					</a>
				</div>

        <div className="col-3 project-container">
					<a
						href="https://equivalence.world/"
						target={'_blank'}
						rel="noreferrer">
						<img src={equivalence} alt="equivalence website website" />
						<h5>Equivalence Website</h5>
						<p>React</p>
					</a>
				</div>
			</div>
		</div>
	);
}
