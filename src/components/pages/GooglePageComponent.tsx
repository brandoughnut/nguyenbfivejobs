import React from 'react'
import '../styles/style.css';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../assets/logogoogle.png';
import goals from '../assets/goals.png';

const GooglePageComponent = () => {
  return (
    <div className='pb-5'>
      <Container>
        <Row className='mb-3'>
            <Col lg={4} className='m-auto'>
            <div className='mb-3'>
              <img className='headerBG img-fluid' src={google} alt='google logo'/>
            </div>
                <h3><a href="https://www.google.com/about/careers/applications/jobs/results/75510017731502790-senior-analyst-strategic-intelligence-and-government" className='careerText' target='_blank' rel="noopener noreferrer">Senior Analyst, Strategic Intelligence and Government</a></h3>
                <h5 className='mb-2'>Tech Stack</h5>
                <ul>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>NodeJS</li>
                    <li>Google</li>
                    <li>MongoDB</li>
                    <li>CockroachDB</li>
                    <li>SQL</li>
                    <li>LINE</li>
                    <li>Ruby</li>
                    <li>Elasticsearch</li>
                </ul>
                <p>Based on the current tech stack, there are some new skills I need to learn. I will need to learn how to use different databases. I will also have to learn the programming languages Java and Python.</p>
            </Col>
            <Col lg={8}>
                <div className='googleImg'></div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <h1 className='mb-4'>Why Google?</h1>
          <Col lg={6}>
            <h2>Culture</h2>
            <ul>
              <li>Google is renowned for its unique, vibrant workplace culture, and campus. </li>
              <li>The company fosters an environment of innovation, creativity, and collaboration. </li>
              <li>Google also emphasizes diversity, inclusion, and employee well-being, creating a supportive and inclusive atmosphere where everyone can thrive.</li>
            </ul>
            <div className='text-center mt-5'>
              <img className='img-fluid goalsImg' src={goals} alt='goals photo'/>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Benefits</h2>
            <ul>
              <li>Google offers a comprehensive benefits package that includes competitive compensation, health insurance, retirement plans, and stock options. </li>
              <li>Employees also have access to various perks such as on-site wellness and fitness centers, free meals, shuttle services, and childcare facilities. </li>
              <li>Google provides generous parental leave, tuition reimbursement, and opportunities for professional development.</li>
            </ul>
            <h2 className='mt-5'>Goals</h2>
            <ul>
              <li>Prioritizizing my well-being and maintaining a healthy work-life balance.</li>
              <li>Networking and building relationships with colleagues across different teams and departments.</li>
              <li>Mastering new technologies and developing my skills and expertise in the field.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GooglePageComponent
