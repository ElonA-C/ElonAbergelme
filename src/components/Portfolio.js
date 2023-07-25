import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';
import { dataImage, portfolioHover } from '../utilits';
import DetailsPopup from './popup/DetailsPopup';

const Portfolio = () => {
	useEffect(() => {
		dataImage();
		portfolioHover();
	}, []);

	// Isotope
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState('*');
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope('.gallery_zoom', {
				itemSelector: '.grid-item',
				//    layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-item',
				},
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				},
			});
		}, 500);
		return () => isotope.current.destroy();
	}, []);
	useEffect(() => {
		if (isotope.current) {
			filterKey === '*'
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey]);
	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
	};
	const activeBtn = (value) => (value === filterKey ? 'current' : '');

	// Popup
	const [popup, setPopup] = useState(false);

	return (
		<div
			className="dizme_tm_section"
			id="portfolio"
		>
			<DetailsPopup
				open={popup}
				close={() => setPopup(false)}
			/>
			<div className="dizme_tm_portfolio">
				<div className="container">
					<div
						className="dizme_tm_main_title"
						data-align="center"
					>
						<span>Portfolio</span>
					</div>

					<div className="dizme_tm_portfolio_titles" />
					<div
						className="portfolio_list wow fadeInUp"
						data-wow-duration="1s"
					>
						<ul className="gallery_zoom grid">
							<li className="popup grid-item">
								<div className="inner">
									<div
										className="entry dizme_tm_portfolio_animation_wrap"
										data-title="Talks-at-Yale"
										data-category="Group Project: Event Combiner at Yale University"
									>
										<a href="https://github.com/yale-cpsc-419-sp23/Talks-at-Yale">
											<img
												src="img/thumbs/42-34.jpg"
												alt="image"
												className="project-image"
											/>
											<div
												className="main"
												data-img-url="img/portfolio/Yale_Logo.png.png"
											/>
										</a>
									</div>
									<br />
									<div className="project-description">
										<p>
											Talks at Yale is a project developed to simplify the lives
											of students dealing with various speaker events on campus.
											The website serves as a centralized platform that gathers
											information from over 100 Yale departments and presents it
											to the user. Users have the ability to add events to their
											personal database and also see which events their friends
											have registered.
										</p>
										<br />
										<p>
											This centralized platform provides a convenient and
											efficient way for students to stay informed about upcoming
											events on campus.
										</p>
									</div>
								</div>
							</li>

							<li className="popup grid-item">
								<div className="inner">
									<div
										className="entry dizme_tm_portfolio_animation_wrap"
										data-title="UNS"
										data-category="Internship CyberSecurity Project"
									>
										<a
											className="zoom"
											href="https://github.com/ElonAbergel/UNS"
										>
											<img
												src="img/thumbs/42-34.jpg"
												alt="image"
												className="project-image"
											/>
											<div
												className="main"
												data-img-url="img/portfolio/aaa.png"
											/>
										</a>
									</div>
									<br />
									<div className="project-description">
										<p>
											This project is a demo version of UNS (Unicorn Super
											Network) – a project showcasing the potential of
											decentralized networking. UNS utilizes decentralization,
											peer-to-peer connectivity, and blockchain consensus to
											enable secure communication, data transfer, and resource
											sharing in a decentralized network.
										</p>
										<br />
										<p>
											The demo features a social media platform called Ywitter,
											demonstrating the functionality of UNS and its Sybil
											Authentication mechanism.
										</p>
									</div>
								</div>
							</li>

							<li className="popup grid-item">
								<div className="inner">
									<div
										className="entry dizme_tm_portfolio_animation_wrap"
										data-title="AtgariLi"
										data-category="Solo Project: Ninja Corporate Company"
									>
										<a href="https://github.com/ElonAbergel/AtgariLi">
											<img
												src="img/thumbs/42-34.jpg"
												alt="image"
												className="project-image"
											/>
											<div
												className="main"
												data-img-url="img/portfolio/AtgariLi.png"
											/>
										</a>
									</div>
									<br />
									<div className="project-description">
										<p>
											AtgariLi Ninja Birthdays and Classes is a company that
											specializes in ninja-themed birthdays and classes for
											kids. AtgariLi is dedicated to delivering extraordinary
											experiences that combine excitement, skill-building, and
											tons of fun for children.
										</p>
										<br />
										<p>
											Their services include action-packed ninja-themed birthday
											parties, featuring thrilling obstacle courses and epic
											challenges. Additionally, we offer expert-led ninja
											classes that help kids enhance their agility, focus,
											discipline, and teamwork skills while having a blast.
										</p>
									</div>
								</div>
							</li>

							<li
								className="detail grid-item"
								onClick={() => setPopup(true)}
							></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Portfolio;
