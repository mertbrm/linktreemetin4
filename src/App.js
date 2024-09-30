
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import profilePic from "./Untitled2.png";
import { 
    FaInstagram,
    FaTelegram,
    FaYoutube,
    FaTwitter,
    FaCode,
    FaTiktok,
    FaWhatsapp
  } from 'react-icons/fa';

import { createClient } from '@supabase/supabase-js'
import Icon from "./Icon";
function App() {
  const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJ_URL, process.env.REACT_APP_SUPABASE_PROJ_KEY);

  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {  
    async function getLinks() {
      setLoading(true);
      try {

        const linksData = await supabase.from('links').select().order('id', {ascending:true});
        console.log(links);
        setLinks(linksData.data);
        setLoading(false);
      } catch(e){
        console.log(e);
        setLoading(false);
      }
    }
    
    getLinks()
  }, [])

  return (
    <div className="App  bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-800 to-zinc-100">
      <div  className="App-header container mx-auto pt-10 pb-3">
        <img src={profilePic} className="profile-pic w-52 mx-auto mb-5 rounded-full" alt="logo" />
        <h1 className="text-3xl font-bold" style={{fontFamily:'Afacad Flux'}}>BE STRONG TEAM</h1>
        <p className='text-base font-medium'>Join our Team</p>
        {
          loading ? <p>Please wait while I get my links ready...</p>
          :
          <ul className="flex flex-col w-full pt-2 m-2">
  {
  links && links.map((link) => (
  
      <a href={link.url} title={link.title} target="_blank" rel='noreferrer'
        style={{ textDecoration: 'none', border: '2.5px solid' }}
      key={link.id} 
              className={` flex items-center m-2  w-80 mx-auto py-3 px-3 rounded-2xl text-lg md:text-md font-semibold ${
                link.url === 'https://metinsoytari.com' ? ' text-slate-900  h-20 flex items-center bold bg-gradient-to-r from-slate-100 to-slate-400 hover:from-slate-200 hover:to-slate-400 transition-all duration-300 ease-in-out'  : 'bg-slate-200 h-16 text-slate-900  hover:bg-slate-300  items-center flex transition-all duration-200 ease-in-out'
              }`}
      >          
        <Icon iconName={link.icon} size="28px" /> <p  className="ml-2">{link.title}</p>
      </a>
  ))
}
         </ul>
        }


  <div className='flex justify-center w-full my-5'> 
  <ul className="flex w-96 justify-evenly text-slate-900 text-4xl">
    <li>
      <a href="https://www.instagram.com/metin.soytari" className='flex justify-between' target="_blank" rel="noreferrer">
        <Icon iconName="FaInstagram" />
      </a>
    </li>
    <li>
      <a href="https://wa.me/38349472875" className='flex justify-between' target="_blank" rel="noreferrer">
        <Icon iconName="FaWhatsapp"  />
      </a>
    </li>
    <li>
      <a href="https://www.tiktok.com/@metinsoytari04" className='flex justify-between' target="_blank" rel="noreferrer">
        <Icon iconName="FaTiktok"/>
      </a>
    </li>
  </ul>
    
      </div>

      <div className='flex justify-center w-full mt-5 mb-2 opacity-95'>
        <p className='text-zinc-800 font-medium' style={{fontSize:"16px"}}> <a href="https://instagram.com/mertbrm" target="_blank"> developed by mert bayram </a></p>
      </div>
</div>
    </div>
  );
}



export default App;
