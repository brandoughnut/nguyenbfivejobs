import React from 'react'
import '../styles/style.css';
import { Button } from 'react-bootstrap';
import google from '../assets/search.png';
import adobe from '../assets/adobe.png';
import intel from '../assets/intel.png';
import netflix from '../assets/netflix.png';
import nvidia from '../assets/nvidia.png';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {

  const navigate = useNavigate();

  return (
    <div className='text-center'>
      <h1>5 Place I Want to Work At.</h1>
      <p className='headerText mt-4'>This website is meant to talk about the 5 tech companies I wish to work at. I will dive into why I want to work there, skills needed and hypothetical goals.</p>
      <div className='mt-4'>
        <Button className='btnHome' variant="dark">
          <img className='logoImg me-3' src={google}/>
          Google
          </Button>
        <Button className='btnHome mx-3' variant="dark">
          <img className='logoImg me-3' src={adobe}/>
          Adobe
          </Button>
        <Button className='btnHome' variant="dark">
          <img className='logoImg me-3' src={intel}/>
          Intel
          </Button>
      </div>
      <div className='mt-3'>
        <Button className='btnHome me-2' variant="dark">
          <img className='logoImg me-3' src={netflix}/>
          Netflix
          </Button>
        <Button className='btnHome ms-2' variant="dark">
          <img className='logoImg me-3' src={nvidia}/>
          Nvidia
          </Button>
      </div>
    </div>
  )
}

export default HomePageComponent
