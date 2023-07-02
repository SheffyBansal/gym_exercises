import './App.css';
import{Route,Routes} from 'react-router-dom';
import{Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroBannerImage from '../src/assets/images/banner.png'

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto" >
      {/* <img src={HeroBannerImage} alt="banner" className='hero-banner-img' style={{position:'absolute', right:'1px', top:'-3vh', height:'120vh', width:'55vw'}} /> */}

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>

  );
}

export default App;
