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

  const navigateToGoogle = () => {
    navigate('/google');
  }
  const navigateToAdobe = () => {
    navigate('/adobe');
  }
  const navigateToIntel = () => {
    navigate('/intel');
  }
  const navigateToNetflix = () => {
    navigate('/netflix');
  }
  const navigateToNvidia = () => {
    navigate('/nvidia');
  }

  return (
    <div className='text-center'>
      <h1>5 Places I Want to Work At.</h1>
      <p className='headerText mt-4'>Here the top 5 tech companies I would like to work at. I will dive into why I want to work there, skills needed and hypothetical goals.</p>
      <div className='mt-4'>
        <Button onClick={navigateToGoogle} className='btnHome' variant="dark">
          <img className='logoImg me-3' src={google} alt='google logo'/>
          Google
          </Button>
        <Button onClick={navigateToAdobe} className='btnHome mx-3' variant="dark">
          <img className='logoImg me-3' src={adobe} alt='adobe logo'/>
          Adobe
          </Button>
        <Button onClick={navigateToIntel} className='btnHome' variant="dark">
          <img className='logoImg me-3' src={intel} alt='intel logo'/>
          Intel
          </Button>
      </div>
      <div className='mt-3'>
        <Button onClick={navigateToNetflix} className='btnHome me-2' variant="dark">
          <img className='logoImg me-3' src={netflix} alt='netflix logo'/>
          Netflix
          </Button>
        <Button onClick={navigateToNvidia} className='btnHome ms-2' variant="dark">
          <img className='logoImg me-3' src={nvidia} alt='nvidia logo'/>
          Nvidia
          </Button>
      </div>
    </div>
  )
}

export default HomePageComponent
