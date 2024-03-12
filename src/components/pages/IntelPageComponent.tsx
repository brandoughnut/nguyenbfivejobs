import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import intel from '../assets/logointel.png';
import goals from '../assets/goals.png';

const IntelPageComponent = () => {
  return (
    <div className='pb-5'>
      <Container>
        <Row className='mb-3'>
            <Col lg={4} className='m-auto'>
            <div className='mb-3'>
              <img className='headerBG img-fluid' src={intel} alt='google logo'/>
            </div>
                <h3><a href="https://jobs.intel.com/en/job/san-jose/software-application-development-engineer/41147/62511099088" className='careerText' target='_blank' rel="noopener noreferrer">Software Application Development Engineer</a></h3>
                <h5 className='mb-2'>Tech Stack</h5>
                <ul>
                    <li>C++</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Swift</li>
                    <li>Objective-C</li>
                    <li>.NET</li>
                    <li>SQL</li>
                    <li>React</li>
                    <li>AngularJS</li>
                </ul>
                <p>Based on the current tech stack, there are some new skills I need to learn. I will need to learn how to use different databases. I will also have to learn the programming languages Java and Python.</p>
            </Col>
            <Col lg={8}>
                <div className='intelImg'></div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <h1 className='mb-4'>Why Intel?</h1>
          <Col lg={6}>
            <h2>Culture</h2>
            <ul>
              <li>Intel values creativity and encourages employees to think outside the box, take risks, and push the boundaries of technology </li>
              <li>Intel's culture is built on a foundation of integrity, respect, and inclusion, where employees from diverse backgrounds feel valued and empowered to contribute their ideas and perspectives </li>
            </ul>
            <div className='text-center mt-5'>
              <img className='img-fluid goalsImg' src={goals} alt='goals photo'/>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Benefits</h2>
            <ul>
              <li>Intel offers retirement savings plans, including 401(k) plans with employer matching contributions </li>
              <li>Intel offers a variety of training programs, workshops, and educational opportunities to help employees enhance their skills, stay current with industry trends, and advance their careers within Intel. </li>
              <li>Intel offers a wide range of personal and work-related issues, including mental health, financial planning, and work-life balance.</li>
            </ul>
            <h2 className='mt-5'>Goals</h2>
            <ul>
              <li>Actively participating in brainstorming sessions, hackathons, and innovation initiatives to generate new ideas and solutions.</li>
              <li>Networking and building relationships with colleagues across different teams and departments.</li>
              <li>Mastering new technologies and developing my skills and expertise in the field.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntelPageComponent
