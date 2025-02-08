import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { APP_FOLDER_NAME } from "../src/globals.js";

//Components 
import Header from '../components/Header';
import Footer from '../components/Footer';

//Pages
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import Home from '../pages/PageHome';
import PageMovie from '../pages/PageMovie';
import PageNotFound from '../pages/PageNotFound';

const AppRouter = () => {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`} >
        <div className='wrapper'>
            <Header />
                <main>
                    <Routes>
                        <Route path='/about' element={<PageAbout />} />
                        <Route path='/favourite' element={<PageFavourite />} />
                        <Route path='/' element={<Home />} />
                        <Route path="/movie/:id" element={<PageMovie />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </main>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
