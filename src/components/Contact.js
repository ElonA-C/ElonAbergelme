import { useEffect, useState } from 'react';
import { fatchData } from '../utilits';
const Contact = () => {
	const [data, setData] = useState({});
	useEffect(async () => {
		setData(await fatchData('/static/info.json'));
	}, []);
	return (
		<div
			className="dizme_tm_section"
			id="contact"
		>
			<div className="dizme_tm_contact">
				<div className="container">
					<div
						className="dizme_tm_main_title"
						data-align="center"
					>
						<span>Contact Me</span>
						<p>
							Please fill out the form on this section to contact with me. Or
							call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
						</p>
					</div>
					<div className="contact_inner">
						<div
							className="left wow fadeInLeft"
							data-wow-duration="1s"
						>
							{data && data.contact && (
								<ul>
									<li>
										<div className="list_inner">
											<div className="icon orangeBackground">
												<i className="icon-location orangeText" />
											</div>
											<div className="short">
												<h3>Address</h3>

												<span>{data.contact.address}</span>
											</div>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<div className="icon greenBackground">
												<i className="icon-mail-1 greenText" />
											</div>
											<div className="short">
												<h3>Email</h3>
												<span>
													<a href="mailto:elonabergel@gmail.com">
														{data.contact.email}
													</a>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<div className="icon purpleBackground">
												<i className="icon-phone purpleText" />
											</div>
											<div className="short">
												<h3>Phone</h3>
												<a href="tel:+14756881551">
													<span>{data.contact.phn}</span>
												</a>
											</div>
										</div>
									</li>
								</ul>
							)}
						</div>
						<div
							className="right wow fadeInRight"
							data-wow-duration="1s"
						>
							<div className="fields">
								<form
									action="/"
									method="post"
									className="contact_form"
									id="contact_form"
									autoComplete="off"
								>
									<div
										className="returnmessage"
										data-success="Your message has been received, We will contact you soon."
									/>
									<div className="empty_notice">
										<span>Please Fill Required Fields</span>
									</div>
									<div className="input_list">
										<ul>
											<li>
												<input
													id="name"
													type="text"
													placeholder="Your Name"
												/>
											</li>
											<li>
												<input
													id="email"
													type="text"
													placeholder="Your Email"
												/>
											</li>
											<li>
												<input
													id="phone"
													type="number"
													placeholder="Your Phone"
												/>
											</li>
											<li>
												<input
													id="subject"
													type="text"
													placeholder="Subject"
												/>
											</li>
										</ul>
									</div>
									<div className="message_area">
										<textarea
											id="message"
											placeholder="Write your message here"
											defaultValue={''}
										/>
									</div>
									<div className="dizme_tm_button">
										<a
											id="send_message"
											href="#"
										>
											<span>Submit Now</span>
										</a>
									</div>
								</form>
							</div>
						</div>
						<div
							className="brush_2 wow fadeInRight"
							data-wow-duration="1s"
						>
							<img
								src="img/brushes/contact/2.png"
								alt="image"
							/>
						</div>
					</div>
				</div>
				<div
					className="brush_1 wow fadeInLeft"
					data-wow-duration="1s"
				>
					<img
						src="img/brushes/contact/1.png"
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};
export default Contact;
