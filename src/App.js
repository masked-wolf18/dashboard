import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import{ Home, Bar, Line, Pie, Application, Calendar, Documents, Editor, Forms, Kanban, MscsAct, MscsMis, Reports } from './pages';


import './App.css';
import Receivedapplication from './pages/pages1/Receivedapplication';
import Statusofapplication from './pages/pages1/Statusofapplication';
import Userlogin from './pages/pages1/Userlogin';
import Userregistration from './pages/pages1/Userregistration';


import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu , setActiveMenu, themeSettings, setThemeSettings} = useStateContext();
 
  return ( 
  <div>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            onClick={()=> setThemeSettings(true)}
            style={{background: 'pink', borderRadius: '50%'}}>
              <FiSettings/>
            </button>
           
          </TooltipComponent>

        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar/>
          </div>

        ) :(
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar/>
          </div>  

        )}

        <div className={ activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar/>
            </div>
              
        
            <div>

             {themeSettings && <ThemeSettings/>}

              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>


                {/*Pages*/}
                <Route path='/documents' element={<Documents/>}></Route>
                <Route path='/forms' element={<Forms/>}>
                </Route>
                <Route path='/mscsact' element={<MscsAct/>}></Route>

                <Route path='/application' element={<Application/>}>
                  
                   
                  
                </Route>

                <Route path='/mscsmis' element={<MscsMis/>}>

                 
                 
                 

                </Route>

                <Route path='/reports' element={<Reports/>}></Route>
            

              {/*App*/}
              <Route path='/kanban' element={<Kanban/>}></Route>
              <Route path='/editor' element={<Editor/>}></Route>
              <Route path='/calendar' element={<Calendar/>}></Route>


               {/*Charts*/}  
               <Route path='/line' element={<Line/>}></Route>
               <Route path='/bar' element={<Bar/>}></Route>
               <Route path='/pie' element={<Pie/>}></Route>
               
               </Routes>
            </div>
         </div>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

