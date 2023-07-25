import Counter from './Counter';
const About = ({ dark }) => {
	return (
		<div
			className="dizme_tm_section"
			id="about"
		>
			<div className="dizme_tm_about">
				<div className="container">
					<div className="wrapper">
						<div className="left">
							<div className="image">
								<img
									src={`/img/brushes/about/Elon_Abergel.jpg`}
									alt="mypictureRunning"
								/>
								<div className="numbers year"></div>
								<div className="numbers project"></div>
							</div>
						</div>
						<div className="right">
							<div
								className="dizme_tm_main_title_1 span  wow fadeInUp"
								data-wow-duration="1s"
							>
								<span>{`Hello There! `}</span>
							</div>
							<div
								className="text wow fadeInUp"
								data-wow-duration="1s"
							>
								<p>
									{`My name is Elon Abergel. I am an aspiring Software Engineer, majoring in Computer Science at Yale University. Currently, I am exploring various interests, including Software Engineering, Data Science, Machine Learning, and App Development. Additionally, I am a student-athlete, representing Yale University in Cross Country and middle-distance events.`}
								</p>
							</div>
							<div
								className="dizme_tm_button wow fadeInUp"
								data-wow-duration="1s"
							>
								<a
									className="anchor"
									href="#contact"
								>
									<span>Contact Me</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="brush_1 wow fadeInLeft"
					data-wow-duration="1s"
				>
					<img
						src="img/brushes/about/1.png"
						alt="image"
					/>
				</div>
				<div
					className="brush_2 wow fadeInRight"
					data-wow-duration="1s"
				>
					<img
						src="img/brushes/about/2.png"
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};
export default About;
