import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO
} from '../components';
import resume from '../../data/profile';
import '../main.css';
import hrefstyle from '../assets/style.css';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <link rel="stylesheet" type="text/css" src={hrefstyle} />
    <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="f0e58040-9330-4baa-b89d-d9afe616707c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experience && <Experience data={resume.experience} />}
          {resume.projects && <Projects data={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          {resume.skills && <Skills data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
