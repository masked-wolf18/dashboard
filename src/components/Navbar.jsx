
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {  Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import Image from '../image/MSCS_LOGO.png';
import Profile from '../image/profile img.png';



const NavButton =({ title, customFunc, icon, color, dotColor }) => (<TooltipComponent content={title} position="BottomCenter">
<button
  type="button"
  onClick={customFunc}
  style={{ color }}
  className="relative text-xl rounded-full p-3 hover:bg-light-gray left-50"
>
  <span
    style={{ background: dotColor }}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
  ></span>
  {icon}
  
</button>
</TooltipComponent>

);


const Navbar = () => {
  const { activeMenu , setActiveMenu, handleClick ,isClicked, setIsClicked, setScreenSize, screenSize} = useStateContext();

 useEffect(()=>{
  const handleResize = () => setScreenSize(window.innerWidth);
  window.addEventListener('resize', handleResize);

  handleResize();
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 useEffect(() => {
  if (screenSize <= 900) {
    setActiveMenu(false);
  } else {
    setActiveMenu(true);
  }
}, [screenSize]);


  return (<div>
    <div style={{alignItems:'flex-start'}}>
      <img src={Image} width={80} height={80} alt="img" />
    </div>
    <div  className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((PrevActiveMenu) => !PrevActiveMenu)} color="pink" icon={<AiOutlineMenu />}/>

    <div className="flex">
    <NavButton title="Chat"
     dotColor="#03C9D7"
     customFunc={() => handleClick('chat')} color="pink" 
     icon={< BsChatLeft />}/>

    <NavButton
     title="Notification"
      dotColor="rgb(254, 201, 15)"
       customFunc={() => handleClick('notification')} 
       color="pink"
        icon={<RiNotification3Line />} /> 

    </div>
    <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={Profile}
              alt="user-profile"
            />

<p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                User1
              </span>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </p>

            </div>
    </TooltipComponent>

    {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification/>)}
        {isClicked.userProfile && (<UserProfile />)}
    </div>
    </div> 
  )
}

export default Navbar