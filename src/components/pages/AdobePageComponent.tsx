import React from 'react'
import '../styles/style.css';
import { Col, Container, Row } from 'react-bootstrap';
import adobe from '../assets/logoadobe.png';
import goals from '../assets/goals.png';

const AdobePageComponent = () => {
  return (
    <div className='pb-5'>
      <Container>
        <Row className='mb-3'>
            <Col lg={4} className='m-auto'>
            <div className='mb-3'>
              <img className='headerBG img-fluid' src={adobe} alt='adobe logo'/>
            </div>
                <h3><a href="https://careers.adobe.com/us/en/job/R143940/Senior-Software-Engineer" className='careerText' target='_blank' rel="noopener noreferrer">Senior Software Engineer</a></h3>
                <h5 className='mb-2'>Tech Stack</h5>
                <ul>
                    <li>C++</li>
                    <li>Swift</li>
                    <li>C#</li>
                    <li>Kotlin</li>
                    <li>Objective-C</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                </ul>
                <p>I am familiar with some of the programming languages needed for this position, but there are lots of tools I will need to pick up on, such as C++.</p>
            </Col>
            <Col lg={8}>
                <div className='adobeImg'></div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <h1 className='mb-4'>Why Adobe?</h1>
          <Col lg={6}>
            <h2>Culture</h2>
            <ul>
              <li>Adobe has embraced flexible work arrangements, allowing employees the freedom to work remotely or from office locations.</li>
              <li>Adobe encourages a culture of continuous learning and growth, supporting employees in developing their skills and pursuing their passions.  </li>
              <li>Adobe's global presence provides opportunities for employees to work on international projects</li>
            </ul>
            <div className='text-center mt-5'>
              <img className='img-fluid goalsImg' src={goals} alt='goals photo'/>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Benefits</h2>
            <ul>
              <li>Adobe provides a range of perks and programs to promote work-life balance and employee satisfaction, such as flexible work arrangements, wellness initiatives, and opportunities for professional development </li>
              <li>Adobe's benefits includes competitive compensation, health insurance, retirement plans, and stock options</li>
              <p style={{color: '#ffefef'}}>&nbsp</p>
              <p style={{color: '#ffefef'}}>&nbsp</p>
            </ul>
            <h2 className='mt-5'>Goals</h2>
            <ul>
              <li>Cultivating strong collaboration and communication skills to work effectively with cross-functional teams</li>
              <li>Consistently meeting project deadlines, adhering to quality standards, and producing code that is well-documented, maintainable, and scalable</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdobePageComponent
