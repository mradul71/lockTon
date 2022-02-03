import React from 'react';
import SideNav from './SideNav';
import SpreadSheet from './SpreadSheet';
import Democ from './Democ';
import './home.css'
import { Route, Routes } from 'react-router-dom';

function Home() {
  return(
      <div className='home'>
          <div className='nav-menu'>
              <SideNav />
          </div>
          <div className='table'>
              <Routes>
                  <Route path="/demo" element={<Democ />} exact />
                  <Route path="/sheet" element={<SpreadSheet />} exact/>
              </Routes>
          </div>
      </div>
  )
}

export default Home;
