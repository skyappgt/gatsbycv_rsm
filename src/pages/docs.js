import React from 'react';
import { Header, Footer } from '../components';
import resume from '../../data/profile';
import '../main.css';
import A from '../assets/IMG_20200220_133350.jpg';
import B from '../assets/IMG_20200220_133204.jpg';
import C from '../assets/IMG_20200220_133002.jpg';
import D from '../assets/IMG_20200219_193900.jpg';
import E from '../assets/IMG_20200220_133229.jpg';
import F from '../assets/IMG_20200220_132804.jpg';
import G from '../assets/IMG_20200219_194250.jpg';





const Docs = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5"> 
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <section className="py-5 border-b border-neutral-300 lg:flex items-center">
        <div className="my-5">
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={A}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={B}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={C}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={D}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={E}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={F}
            alt="profile"
        />
        <img
            className=" mx-auto lg:w-full xl:w-4/5"
            src={G}
            alt="profile"
        />
        </div>
        
     </section>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Docs;
