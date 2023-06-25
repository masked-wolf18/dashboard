import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useStateContext } from '../contexts/ContextProvider';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
       <div className="mt-10">
        <div  className="flex flex-wrap lg:flex-nowrap justify-left ">

      <div className=" bg-white dark:text-gray-200 gark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-90 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">


        <Container className="flex justify-between items-left">
          <Row>
            <Col md={8}>
              <h1 className="heading-lg font-bold text-gray-400 text-2xl">Multi State Cooperative Societies ACT, 2002</h1>
              <p className="text-xl pt-6">An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The Multi State Cooperative Societies Bill was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).</p>
            </Col>
            <div >
              <h2 className="pt-10 text-gray-400 text-xl border-solid border-5 border-black">Latest Hearings</h2>
              
              <p className="pt-5 ">"Medcity Cooperative Hospital and Research Center Ltd.,KERALA "</p>
              
              <p className="pt-5 ">"Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.,MAHARASHTRA"</p>

              <p className="pt-5 ">Global Federation of Natural Farming Cooperative Ltd.,UTTAR PRADESH</p>
              
              <div className='pt-4'>
               <Link to="/https://mscs.dac.gov.in/NoticeNew.aspx"> Read More...</Link>
              </div>

              </div>

              <br></br>


              <div >
              <h2 className="pt-10 text-gray-400 text-xl border-solid border-5 border-black">Latest Certificates</h2>
              
              <p className="pt-5 ">COSMOS Cooperative Bank Ltd., ,MAHARASHTRA</p>
              
              <p className="pt-5 ">Wishvaas Credit Cooperative Society Ltd.,,PUNJAB</p>

              <p className="pt-5 ">Mahesh Multi State Cooperative Credit Society Ltd.,MAHARASHTRA</p>
              
              <div className='pt-4'>
               <Link to="/https://mscs.dac.gov.in/NoticeNew.aspx"> Read More...</Link>
              </div>
            
             </div>


               <br></br>


              <div >
              <h2 className="pt-10 text-gray-400 text-xl border-solid border-5 border-black">Latest Order Sheet</h2>
              
              <p className="pt-5 ">Home Multi State Cooperative Housing Society Ltd</p>
              
              <p className="pt-5 ">Lokmanya Multipurpose Cooperative Society Limited, Belgaum, Karnataka: Order Sheet of Hearing held on 14.02.2022</p>

              <p className="pt-5 ">Lotus Agricultural and Marketing Cooperative Society Ltd., Pitampura, New Delhi: Order Sheet of Hearing held on 04.02.2022</p>
              
              <div className='pt-4'>
               <Link to="/https://mscs.dac.gov.in/NoticeNew.aspx"> Read More...</Link>
              </div>

              </div>

              <br></br>

          </Row>
        </Container>
       
      </div>
      
         
    </div> 
    </div>
  )
}

export default Home;