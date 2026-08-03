import React, { useState } from 'react'
import { createRoot } from 'react dom/client'
import {
  ArrowUpRight, CheckCircle2, ChevronDown, ExternalLink,
  Figma, Mail, MapPin, Menu, X, ShieldCheck, Sparkles
} from 'lucide react'
import './styles.css'

const projects = [
  {
    number: '01',
    title: 'myBCA on Smartwatch',
    tag: 'DIGITAL BANKING',
    description:
      'A wearable banking experience supporting NFC Pay, QRIS, and Cardless Transaction across Wear OS and Watch OS.',
    problem:
      'With limited smartwatch screen space, small interaction decisions can strongly affect navigation, clarity, and transaction completion.',
    contribution:
      'Validated the user experience during UAT and helped ensure banking information was displayed accurately, securely, and consistently across devices.',
    accent: 'lavender',
  },
  {
    number: '02',
    title: 'Gebyar Hadiah BCA',
    tag: 'STRATEGIC QA',
    description:
      'BCA loyalty program features across myBCA and BCA Mobile, including points, Gacha rewards, vouchers, and lucky draws.',
    problem:
      'Complex campaign business rules require broad scenario coverage to make sure eligibility, calculations, rewards, and redemption behave correctly.',
    contribution:
      'Performed end to end testing, created and executed test scenarios, and validated business rules against campaign requirements.',
    accent: 'mint',
  },
  {
    number: '03',
    title: 'Apply Credit Card Online',
    tag: 'MYBCA',
    description:
      'A secure digital credit card application flow inside the myBCA mobile experience.',
    problem:
      'A multi step financial journey needs reliable validation, clear user interactions, and consistent behavior across the complete application flow.',
    contribution:
      'Performed end to end, regression, and UAT testing; translated business requirements into comprehensive test scenarios and collaborated with analysts and developers to resolve issues.',
    accent: 'peach',
  },
]

const skills = ['Strategic thinking', 'Problem solving', 'Process improvement', 'Stakeholder management', 'Cross functional collaboration']
const tools = ['Figma', 'Postman', 'Jira', 'Google Workspace', 'Microsoft Office']

function App() {
  const [open, setOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => go('home')} aria label="Go home">
          S<span>.</span>
        </button>

        <nav className={open ? 'nav links open' : 'nav links'}>
          {['about', 'work', 'skills', 'contact'].map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item}
            </button>
          ))}
          <a href="mailto:Fina811@gmail.com" onClick={() => setOpen(false)}>Let’s talk ↗</a>
        </nav>

        <button className="menu btn" onClick={() => setOpen(!open)} aria label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero copy">
            <div className="eyebrow"><span className="dot" /> TESTING ANALYST · DIGITAL BANKING</div>
            <h1>Meet your<br /><em>problem hunter.</em></h1>
            <p className="hero lead">
              I don’t just test software — I protect the user experience.
            </p>
            <p className="hero body">
              Detail oriented Testing Analyst with 3 years of banking industry experience,
              focused on quality assurance, system analysis, UAT, and translating business
              requirements into reliable digital experiences.
            </p>
            <div className="hero actions">
              <button className="primary" onClick={() => go('work')}>Explore my work <ArrowUpRight size={17} /></button>
              <a className="secondary" href="mailto:Fina811@gmail.com">Get in touch <Mail size={16} /></a>
            </div>
          </div>

          <div className="hero card">
            <div className="orbit orbit one" />
            <div className="orbit orbit two" />
            <div className="portrait placeholder">
              <span>SK</span>
            </div>
            <div className="floating card top">
              <ShieldCheck size={18} />
              <div><strong>Quality first</strong><small>Ready for production</small></div>
            </div>
            <div className="floating card bottom">
              <Sparkles size={17} />
              <div><strong>95%+ coverage</strong><small>Major release testing</small></div>
            </div>
            <div className="hero stamp">THINK<br />BEYOND<br /><span>THE HAPPY PATH</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section label">01 / ABOUT</div>
          <div className="about grid">
            <div>
              <h2>Quality is not a final step.<br /><em>It’s a mindset.</em></h2>
            </div>
            <div className="about copy">
              <p>
                In digital banking, every successful transaction strengthens user confidence.
                My role is to help ensure every release is secure, reliable, understandable,
                and ready for production.
              </p>
              <p>
                I think beyond the happy path — exploring edge cases, user behavior, device
                differences, and potential risks before they reach customers.
              </p>
              <div className="principles">
                <div><b>01</b><span>Creativity<br /><small>Explore what could go wrong.</small></span></div>
                <div><b>02</b><span>Collaboration<br /><small>Quality is a team effort.</small></span></div>
                <div><b>03</b><span>Growth mindset<br /><small>Every project is an opportunity to learn.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="work heading">
            <div>
              <div className="section label">02 / SELECTED WORK</div>
              <h2>Projects that<br /><em>made an impact.</em></h2>
            </div>
            <p>From wearable banking to high visibility campaigns, these are selected projects from Safina’s portfolio.</p>
          </div>

          <div className="project list">
            {projects.map((project) => (
              <article className={`project ${project.accent}`} key={project.number}>
                <div className="project number">{project.number}</div>
                <div className="project main">
                  <span className="project tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="text button" onClick={() => setActiveProject(project)}>
                    View case study <ArrowUpRight size={16} />
                  </button>
                </div>
                <div className="project icon"><CheckCircle2 size={46} strokeWidth={1.1} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section label">03 / TOOLKIT</div>
          <div className="skills grid">
            <div>
              <h2>The way I<br /><em>work.</em></h2>
              <p>
                A combination of analytical thinking, business understanding, and close
                collaboration with technical and non technical stakeholders.
              </p>
            </div>
            <div className="skill block">
              <h4>CORE SKILLS</h4>
              <div className="chips">{skills.map(x => <span key={x}>{x}</span>)}</div>
              <h4 className="tools title">TOOLS</h4>
              <div className="chips tools">{tools.map(x => <span key={x}>{x === 'Figma' && <Figma size={15} />} {x}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section experience">
          <div className="section label">04 / EXPERIENCE</div>
          <div className="timeline">
            <div className="timeline item">
              <span>06/2023 — NOW</span>
              <div><h3>Testing Analyst</h3><p>PT Bank Central Asia</p></div>
              <p className="timeline detail">Business & functional analysis · UAT · End to end testing · Requirements validation · Cross platform analysis</p>
            </div>
            <div className="timeline item">
              <span>08/2022 — 11/2022</span>
              <div><h3>Quality Control Intern</h3><p>PT Indofood Sukses Makmur</p></div>
              <p className="timeline detail">Research on seasoning shelf life across storage temperature, humidity, packaging materials, and methods.</p>
            </div>
            <div className="timeline item education">
              <span>2019 — 2023</span>
              <div><h3>Bachelor of Food Technology</h3><p>Universitas Katolik Soegijapranata · GPA 3.46/4.00</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact inner">
            <div className="section label">05 / GET IN TOUCH</div>
            <h2>Let’s create<br /><em>better digital experiences.</em></h2>
            <p>Always excited to discuss quality, technology, and new challenges.</p>
            <a className="contact email" href="mailto:Fina811@gmail.com">Fina811@gmail.com <ArrowUpRight /></a>
            <div className="contact meta">
              <span><MapPin size={15} /> Tangerang, Indonesia</span>
              <a href="https://www.linkedin.com/in/safinakhairani/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
              <span>@safinakhairani</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Safina Khairani</span>
        <span>TEST · ANALYZE · IMPROVE</span>
      </footer>

      {activeProject && (
        <div className="modal backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal close" onClick={() => setActiveProject(null)}><X /></button>
            <span className="project tag">{activeProject.tag}</span>
            <h2>{activeProject.title}</h2>
            <div className="modal grid">
              <div><h4>THE CHALLENGE</h4><p>{activeProject.problem}</p></div>
              <div><h4>MY CONTRIBUTION</h4><p>{activeProject.contribution}</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
