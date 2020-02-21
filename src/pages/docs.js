import React from 'react';
import { Header, Footer } from '../components';
import resume from '../../data/profile';
import '../main.css';
import imgA from '../assets/IMG_20200220_133350.jpg';
import imgB from '../assets/IMG_20200220_133204.jpg';
import imgC from '../assets/IMG_20200220_133002.jpg';
import imgD from '../assets/IMG_20200219_193900.jpg';
import imgE from '../assets/IMG_20200220_133229.jpg';
import imgF from '../assets/IMG_20200220_132804.jpg';
import imgG from '../assets/IMG_20200219_194250.jpg';
import hrefstyle from '../assets/style.css';




const Docs = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5"> 
    <link rel="stylesheet" type="text/css" src={hrefstyle} />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <section className="py-5 border-b border-neutral-300 lg:flex items-center">
        <div className="my-5">
        <img
            className="docs"
            src={imgA}
            alt="profile"
        />
        <img
            className="docs"
            src={imgB}
            alt="profile"
        />
        <img
            className="docs"
            src={imgC}
            alt="profile"
        />
        <img
            className="docs"
            src={imgD}
            alt="profile"
        />
        <img
            className="docs"
            src={imgE}
            alt="profile"
        />
        <img
            className="docs"
            src={imgF}
            alt="profile"
        />
        <img
            className="docs"
            src={imgG}
            alt="profile"
        />
        </div>   
     </section>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Docs;
