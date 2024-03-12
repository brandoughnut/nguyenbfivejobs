import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import netflix from '../assets/logonetflix.png';
import goals from '../assets/goals.png';

const NetflixPageComponent = () => {
  return (
    <div className='pb-5'>
      <Container>
        <Row className='mb-3'>
            <Col lg={4} className='m-auto'>
            <div className='mb-3'>
              <img className='headerBG img-fluid' src={netflix} alt='google logo'/>
            </div>
                <h3><a href="https://jobs.netflix.com/jobs/320327168" className='careerText' target='_blank' rel="noopener noreferrer">Full Stack Software Engineer, Lifecycle Apps Team</a></h3>
                <h5 className='mb-2'>Tech Stack</h5>
                <ul>
                    <li>React</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>NodeJS</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>CockroachDB</li>
                    <li>MySQL</li>
                    <li>kafka</li>
                    <li>Cassandra</li>
                    <li>Atlas-DB</li>
                </ul>
                <p>Based on the current tech stack, I have a lot of the programming skills needed for this career. I would have to learn Python and the different databases. I have will also have to refine my logic in JavaScript and Java.</p>
            </Col>
            <Col lg={8}>
                <div className='netflixImg'></div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <h1 className='mb-4'>Why Netflix?</h1>
          <Col lg={6}>
            <h2>Culture</h2>
            <ul>
              <li>Netflix is known for its unique and high-performance culture. </li>
              <li>The company values freedom and responsibility, empowering employees to take ownership of their work and make decisions autonomously. </li>
              <li>Netflix encourages innovation and risk-taking, creating an environment where employees are encouraged to challenge the status quo and pursue bold ideas.</li>
            </ul>
            <div className='text-center mt-5'>
              <img className='img-fluid goalsImg' src={goals} alt='goals photo'/>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Benefits</h2>
            <ul>
              <li>Netflix includes generous compensation packages, comprehensive health insurance, retirement plans, and stock options.</li>
              <li>Netflix provides perks such as unlimited vacation time, parental leave, and support for continuing education and professional development. </li>
              <p style={{color: '#ffefef'}}>&nbsp</p>
              <p style={{color: '#ffefef'}}>&nbsp</p>
            </ul>
            <h2 className='mt-5'>Goals</h2>
            <ul>
              <li>Stay updated on emerging trends and best practices in full-stack development to ensure that your skills remain relevant and cutting-edge</li>
              <li>Networking and building relationships with colleagues across different teams and departments.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NetflixPageComponent
