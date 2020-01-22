import React from 'react';


const crisp = () =>{
    
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="f0e58040-9330-4baa-b89d-d9afe616707c";
    (function(){ 
        d=document;
        s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
    })();
        
}

export default crisp;