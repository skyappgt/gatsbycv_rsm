import React from 'react';
import Contact from './contact';

const Header = ({ name, role, contacts }) => (
  <header className="border-b border-neutral-300 pb-2 md:flex items-center justify-between">
    <div>
      <h1 className="text-primary-500 text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-primary-900 leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="mt-5 md:mt-0 md:border-l md:border-neutral-300 md:pl-4">
      {contacts &&
        Object.keys(contacts).map(key => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
    <script type="text/javascript">
      {window.$crisp=[];window.CRISP_WEBSITE_ID="f0e58040-9330-4baa-b89d-d9afe616707c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();}    </script>
  </header>
);

export default Header;
