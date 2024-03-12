import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import nvidia from '../assets/logonvidia.png';
import goals from '../assets/goals.png';

const NvidiaPageComponent = () => {
  return (
    <div className='pb-5'>
      <Container>
        <Row className='mb-3'>
            <Col lg={4} className='m-auto'>
            <div className='mb-3'>
              <img className='headerBG img-fluid' src={nvidia} alt='google logo'/>
            </div>
                <h3><a href="https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/Senior-Infrastructure-System-Software-Engineer_JR1979841" className='careerText' target='_blank' rel="noopener noreferrer">Senior AI Infrastructure Services Software Engineer
</a></h3>
                <h5 className='mb-2'>Tech Stack</h5>
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>SLURM</li>
                    <li>PBS Pro</li>
                    <li>BCM</li>
                    <li>AWS EC2</li>
                </ul>
                <p>Based on the current tech stack, I am unfamiliar with any of the tools and technologies. It will definitely take time in order to be proficient with the technologies. Also since this position works with AI I would need to do a lot of research.</p>
            </Col>
            <Col lg={8}>
                <div className='nvidiaImg'></div>
            </Col>
        </Row>
        <Row className='mb-4'>
            <h1 className='mb-4'>Why Nvidia?</h1>
          <Col lg={6}>
            <h2>Culture</h2>
            <ul>
              <li>Nvidia's culture reflects a passion for pushing the boundaries of what's possible in the field.</li>
              <li>Nvidia encourages employees to think creatively, take risks, and tackle complex challenges in AI research, development, and applications </li>
              <li>Nvidia provides the necessary tools and technology to facilitate remote work, ensuring that employees can remain productive and engaged regardless of their location</li>
            </ul>
            <div className='text-center mt-5'>
              <img className='img-fluid goalsImg' src={goals} alt='goals photo'/>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Benefits</h2>
            <ul>
              <li>Nvidia provides a range of perks and programs to promote work-life balance and employee satisfaction, such as flexible work arrangements, wellness initiatives, and opportunities for professional development </li>
              <li>Nvidia provides resources for preventive care, wellness programs, and mental health support</li>
              <li>Nvidia provides competitive salaries and bonuses to attract and retain top talent in the industry.</li>
            </ul>
            <p style={{color: '#ffefef'}}>&nbsp</p>
            <h2 className='mt-5'>Goals</h2>
            <ul>
              <li>Acquire the latest technologies to build myself an amazing computer</li>
              <li>Networking and building relationships with colleagues across different teams and departments.</li>
              <li>Mastering new technologies and developing my skills and expertise in the field and hopefully obtaining a lead position</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NvidiaPageComponent
