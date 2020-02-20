import React from 'react';
import { Header, Footer } from '../components';
import resume from '../../data/profile';
import '../main.css';


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
            className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
            src="./perfil.jpg"
            alt="profile"
        />
        </div>
        
     </section>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Docs;
