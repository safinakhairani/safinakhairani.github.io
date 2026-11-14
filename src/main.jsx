import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, CheckCircle2, ExternalLink, Instagram, Mail, MapPin, Menu, X, ShieldCheck, Sparkles, Lightbulb, Puzzle, RefreshCw, UsersRound, BriefcaseBusiness } from 'lucide-react';
import profilePhoto from './assets/Profile Safina.jpg';
import './styles.css';
import flyingGachaImage from './assets/project/flying gacha.jpg';
import pilihGachaImage from './assets/project/pilih gacha.jpg';
import applyCreditCardImage from './assets/project/apply credit card online.jpeg';
import mybcaSmartwatchImage from './assets/project/mybca on smartwatch.jpeg';

const projects = [
	{
		number: '01',
		year: '2025',
		title: 'myBCA on Smartwatch',
		image: mybcaSmartwatchImage,
		url: 'https://www.bca.co.id/id/informasi/edukatips/2026/04/21/10/50/transaksi-makin-simpel-pakai-nfc-pay-di-mybca',
		tag: 'DIGITAL BANKING',
		description: 'Testing the myBCA banking experience on smartwatches, including NFC Pay, QRIS, and cardless transactions.',
		problem: 'A small watch screen leaves little room for unclear steps or confusing messages.',
		contribution: 'I tested the flow during UAT and checked that the information stayed accurate and secure across Wear OS and Watch OS.',
		accent: 'lavender',
	},
	{
		number: '02',
		year: '2025',
		title: 'Flying Gacha BCA',
		image: flyingGachaImage,
		url: 'https://www.bca.co.id/id/Campaign/2026/gacha-berhadiah',
		tag: 'CAMPAIGN QA',
		description: 'End-to-end testing for a BCA campaign with game participation, points, eligibility, and reward distribution.',
		problem: 'Campaign mechanics involve several conditions, including customer eligibility, point accumulation, game participation, and reward distribution.',
		contribution: 'I executed end-to-end scenarios, checked system behavior against business requirements, and worked with stakeholders to resolve discrepancies.',
		accent: 'mint',
	},
	{
		number: '03',
		year: '2025',
		title: 'Pilih Gacha BCA',
		image: pilihGachaImage,
		url: 'https://www.bca.co.id/id/Campaign/2026/gacha-berhadiah',
		tag: 'GAMIFICATION QA',
		description: 'Testing a gamified customer journey with point calculations, eligibility rules, and reward selection.',
		problem: 'The experience needed to feel simple while keeping point calculations, customer eligibility, and reward selection accurate.',
		contribution: 'I created and executed scenarios across different customer journeys, validated the game mechanics, and identified issues before release.',
		accent: 'peach',
	},
	{
		number: '04',
		year: '2024',
		title: 'Apply Credit Card Online',
		image: applyCreditCardImage,
		url: 'https://www.bca.co.id/en/informasi/edukatips/2024/11/05/10/09/Bikin-Kartu-Kredit-BCA-Bisa-di-myBCA-Ini-Syarat-dan-Caranya',
		tag: 'MYBCA',
		description: 'A secure digital credit-card application journey inside the myBCA mobile app.',
		problem: 'A financial application has many steps, so every validation and handoff needs to work as expected.',
		contribution: 'I handled end-to-end, regression, and UAT testing, turning business requirements into practical test scenarios and working with analysts and developers to fix issues.',
		accent: 'lavender',
	},
];

const skills = ['Strategic thinking', 'Problem solving', 'Process improvement', 'Stakeholder management', 'Cross functional collaboration'];

const tools = ['Figma', 'Postman', 'Jira', 'Selenium', 'Microsoft'];

const skillIcons = [Lightbulb, Puzzle, RefreshCw, UsersRound, BriefcaseBusiness];

function App() {
	const [open, setOpen] = useState(false);
	const [activeProject, setActiveProject] = useState(null);

	const go = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
		});

		setOpen(false);
	};

	return (
		<div className="site">
			<header className="nav">
				<button
					className="brand"
					onClick={() => go('home')}
					aria-label="Go home"
					data-aos="fade-down"
					data-aos-duration="700">
					S<span>.</span>
				</button>

				<nav
					className={open ? 'nav-links open' : 'nav-links'}
					data-aos="fade-down"
					data-aos-delay="100">
					{['about', 'projects', 'skills', 'contact'].map((item, index) => (
						<button
							key={item}
							onClick={() => go(item)}
							data-aos="fade-down"
							data-aos-delay={150 + index * 80}>
							{item}
						</button>
					))}

					<a
						href="mailto:Fina811@gmail.com"
						onClick={() => setOpen(false)}
						data-aos="fade-down"
						data-aos-delay="500">
						Let’s talk ↗
					</a>
				</nav>

				<button
					className="menu-btn"
					onClick={() => setOpen(!open)}
					aria-label="Toggle navigation">
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</header>

			<main>
				{/* HERO */}
				<section
					id="home"
					className="hero section">
					<div
						className="hero-copy"
						data-aos="fade-right"
						data-aos-duration="1000">
						<div
							className="eyebrow"
							data-aos="fade-up"
							data-aos-delay="100">
							<span className="dot" /> SAFINA KHAIRANI · TESTING ANALYST · DIGITAL BANKING
						</div>

						<h1
							data-aos="fade-up"
							data-aos-delay="200">
							Meet your
							<br />
							<em>problem hunter.</em>
						</h1>

						<p
							className="hero-lead"
							data-aos="fade-up"
							data-aos-delay="300">
							I test the details that shape a good user experience.
						</p>

						<p
							className="hero-body"
							data-aos="fade-up"
							data-aos-delay="400">
							I’m a Testing Analyst with three years of experience in digital banking. I focus on QA, system analysis, UAT, and making sure business requirements work in the real world.
						</p>

						<div
							className="hero-actions"
							data-aos="fade-up"
							data-aos-delay="500">
							<button
								className="primary"
								onClick={() => go('projects')}>
								Explore my work <ArrowUpRight size={17} />
							</button>

							<a
								className="secondary"
								href="#contact">
								Get in touch <Mail size={16} />
							</a>
						</div>
					</div>

					<div
						className="hero-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="200">
						<div className="orbit orbit-one" />
						<div className="orbit orbit-two" />

						<div
							className="portrait-placeholder"
							data-aos="zoom-in"
							data-aos-delay="500">
							<img
								src={profilePhoto}
								alt="Safina Khairani"
							/>
						</div>

						<div
							className="floating-card top"
							data-aos="fade-down"
							data-aos-delay="700">
							<ShieldCheck size={18} />

							<div>
								<strong>Quality first</strong>
								<small>Ready for production</small>
							</div>
						</div>

						<div
							className="floating-card bottom"
							data-aos="fade-up"
							data-aos-delay="800">
							<Sparkles size={17} />

							<div>
								<strong>95%+ coverage</strong>
								<small>Major release testing</small>
							</div>
						</div>

						<div
							className="hero-stamp"
							data-aos="zoom-in"
							data-aos-delay="900">
							THINK
							<br />
							BEYOND
							<br />
							<span>THE HAPPY PATH</span>
						</div>
					</div>
				</section>

				{/* ABOUT */}
				<section
					id="about"
					className="section about">
					<div
						className="section-label"
						data-aos="fade-up">
						01 / ABOUT
					</div>

					<div className="about-grid">
						<div
							data-aos="fade-right"
							data-aos-duration="900">
							<h2>
								Quality is not a final step.
								<br />
								<em>It’s a mindset.</em>
							</h2>
						</div>

						<div
							className="about-copy"
							data-aos="fade-left"
							data-aos-duration="900"
							data-aos-delay="150">
							<p>In digital banking, even a small issue can affect someone’s trust. I help teams release features that are secure, reliable, and easy to understand.</p>

							<p>I also test the less obvious paths: unusual inputs, different devices, and the things users might do that nobody expected.</p>

							<div className="principles">
								<div
									data-aos="fade-up"
									data-aos-delay="200">
									<b>01</b>
									<span>
										Creativity
										<br />
										<small>Explore what could go wrong.</small>
									</span>
								</div>

								<div
									data-aos="fade-up"
									data-aos-delay="300">
									<b>02</b>
									<span>
										Collaboration
										<br />
										<small>Quality is a team effort.</small>
									</span>
								</div>

								<div
									data-aos="fade-up"
									data-aos-delay="400">
									<b>03</b>
									<span>
										Growth mindset
										<br />
										<small>Every project is an opportunity to learn.</small>
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ALL PROJECTS */}
				<section
					id="projects"
					className="section all-projects">
					<div className="all-projects-heading">
						<div
							data-aos="fade-right"
							data-aos-duration="900">
							<div className="section-label">02 / ALL PROJECTS</div>
							<h2 className="all-projects-title">
								<span className="project-flower coral">✿</span> All Projects <span className="project-flower lime">✿</span>
							</h2>
						</div>
						<p
							data-aos="fade-left"
							data-aos-delay="150">
							Digital banking testing and quality assurance projects
						</p>
					</div>

					<div className="project-archive">
						{projects.map((project, index) => (
							<article
								className={`archive-card ${project.accent} ${project.image ? 'has-image' : ''}`}
								style={project.image ? { backgroundImage: `url("${project.image}")` } : undefined}
								key={`archive-${project.number}`}
								onClick={() => setActiveProject(project)}
								data-aos="fade-up"
								data-aos-delay={index * 120}>
								<span className="archive-topline">
									<span>{project.number}</span>
									<span>{project.year}</span>
								</span>
								<span className="project-tag">{project.tag}</span>
								<strong>{project.title}</strong>
								<a
									className="archive-arrow"
									href={project.url}
									target="_blank"
									rel="noreferrer"
									onClick={(event) => event.stopPropagation()}>
									View case study <ArrowUpRight size={16} />
								</a>
							</article>
						))}
					</div>
				</section>

				{/* SKILLS */}
				<section
					id="skills"
					className="section skills">
					<div
						className="section-label"
						data-aos="fade-up">
						03 / TOOLKIT
					</div>

					<div className="skills-grid">
						<div
							data-aos="fade-right"
							data-aos-duration="900">
							<h2>
								The way I
								<br />
								<em>work.</em>
							</h2>

							<p>My approach combines careful analysis, business context, and straightforward communication with both technical and non-technical teams.</p>
						</div>

						<div
							className="skill-block"
							data-aos="fade-left"
							data-aos-duration="900"
							data-aos-delay="150">
							<h4>CORE SKILLS</h4>

							<div className="chips">
								{skills.map((x, index) => (
									<span
										key={x}
										data-aos="zoom-in"
										data-aos-delay={200 + index * 80}>
										{React.createElement(skillIcons[index], { size: 15 })}
										{x}
									</span>
								))}
							</div>

							<h4 className="tools-title">TOOLS</h4>

							<div className="chips tools">
								{tools.map((x, index) => (
									<span
										key={x}
										data-aos="zoom-in"
										data-aos-delay={300 + index * 80}>
										<img
											className="tool-logo-image"
											src={`/src/assets/tools-logo/${x.toLowerCase().replace(/\s+/g, '-')}.svg`}
											alt={`${x} logo`}
										/>
										{x}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* EXPERIENCE */}
				<section className="section experience">
					<div
						className="section-label"
						data-aos="fade-up">
						04 / EXPERIENCE
					</div>

					<div className="timeline">
						<div
							className="timeline-item"
							data-aos="fade-right"
							data-aos-duration="800">
							<span>06/2023 — NOW</span>

							<div>
								<h3>Testing Analyst</h3>
								<p>PT Bank Central Asia</p>
							</div>

							<p className="timeline-detail">Business & functional analysis · UAT · End to end testing · Requirements validation · Cross platform analysis</p>
						</div>

						<div
							className="timeline-item"
							data-aos="fade-left"
							data-aos-duration="800"
							data-aos-delay="150">
							<span>08/2022 — 11/2022</span>

							<div>
								<h3>Quality Control Intern</h3>
								<p>PT Indofood Sukses Makmur</p>
							</div>

							<p className="timeline-detail">Research on seasoning shelf life across storage temperature, humidity, packaging materials, and methods.</p>
						</div>

						<div
							className="timeline-item education"
							data-aos="fade-right"
							data-aos-duration="800"
							data-aos-delay="300">
							<span>2019 — 2023</span>

							<div>
								<h3>Bachelor of Food Technology</h3>
								<p>Universitas Katolik Soegijapranata · GPA 3.46/4.00</p>
							</div>
						</div>
					</div>
				</section>

				{/* CONTACT */}
				<section
					id="contact"
					className="contact section">
					<div
						className="contact-inner"
						data-aos="fade-up"
						data-aos-duration="1000">
						<div className="section-label">05 / GET IN TOUCH</div>

						<h2
							data-aos="fade-up"
							data-aos-delay="100">
							Let’s create
							<br />
							<em>better digital experiences.</em>
						</h2>

						<p
							data-aos="fade-up"
							data-aos-delay="200">
							If you’d like to talk about QA, digital products, or a new opportunity, feel free to reach out.
						</p>

						<a
							className="contact-email"
							href="mailto:Fina811@gmail.com"
							data-aos="zoom-in"
							data-aos-delay="300">
							Fina811@gmail.com <ArrowUpRight />
						</a>

						<div
							className="contact-meta"
							data-aos="fade-up"
							data-aos-delay="400">
							<span>
								<MapPin size={15} /> Tangerang, Indonesia
							</span>

							<a
								href="https://www.linkedin.com/in/safinakhairani/"
								target="_blank"
								rel="noreferrer">
								LinkedIn <ExternalLink size={14} />
							</a>

							<a
								href="https://www.instagram.com/safinakhairani/"
								target="_blank"
								rel="noreferrer">
								<Instagram size={15} /> @safinakhairani <ExternalLink size={14} />
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<span>© 2026 Safina Khairani</span>
				<span>TEST · ANALYZE · IMPROVE</span>
			</footer>

			{/* PROJECT MODAL */}
			{activeProject && (
				<div
					className="modal-backdrop"
					onClick={() => setActiveProject(null)}>
					<div
						className="modal"
						onClick={(e) => e.stopPropagation()}
						data-aos="zoom-in"
						data-aos-duration="400">
						<button
							className="modal-close"
							onClick={() => setActiveProject(null)}>
							<X />
						</button>

						<span className="project-tag">{activeProject.tag}</span>

						<h2>{activeProject.title}</h2>

						<div className="modal-grid">
							<div
								data-aos="fade-right"
								data-aos-delay="100">
								<h4>THE CHALLENGE</h4>
								<p>{activeProject.problem}</p>
							</div>

							<div
								data-aos="fade-left"
								data-aos-delay="150">
								<h4>MY CONTRIBUTION</h4>
								<p>{activeProject.contribution}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

createRoot(document.getElementById('root')).render(<App />);
