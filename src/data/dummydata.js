import React from 'react';

import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GrDocumentExcel } from 'react-icons/gr';
import { IoDocumentSharp } from 'react-icons/io';
import{RiHome2Line} from 'react-icons/ri';
import {TbReport} from 'react-icons/tb';
import {RiGovernmentLine} from 'react-icons/ri';
import {FaWpforms} from 'react-icons/fa';





export const gridOrderImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );
  
  export const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );


  export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'home',
          icon: <RiHome2Line/>,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'applications',
          icon: <GrDocumentExcel />,
          
        },
        {
          name: 'documents',
          icon: <GrDocumentExcel/>,
        },
        
        {
          name: 'mscsact',
          icon: <RiGovernmentLine />,
        },
        {
          name: 'mscsmis',
          icon: <RiGovernmentLine />,
          
        },
        {
          name: 'reports',
          icon: <TbReport />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'calendar',
          icon: <AiOutlineCalendar />,
        },
        {
          name: 'kanban',
          icon: <BsKanban />,
        },
        {
          name: 'editor',
          icon: <FiEdit />,
        },
        
      ],
    },
    {
      title: 'Charts',
      links: [
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
       
        {
          name: 'bar',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <FiPieChart />,
        },
       
      ],
    },
  ];



  export const ordersGrid = [
   
    { 
      field: 'Sr.No.',
      headerText: 'Name of society',
      width: '150',
      textAlign: 'Center',
    },
  
    {
      field: 'Address',
      headerText: 'Address',
      width: '150',
      textAlign: 'Center',
    },

    {
      field: 'State',
      headerText: 'State',
      width: '150',
      textAlign: 'Center',
    },

    {
      field: 'District',
      headerText: 'District',
      width: '150',
      textAlign: 'Center',
    },

    {
      field: 'Date of Registration',
      headerText: 'Date of Registration',
      width: '150',
      textAlign: 'Center',
    },

    {
      field: 'Area of Operation',
      headerText: 'Area of Operation',
      width: '150',
      textAlign: 'Center',
    },

    {
      field: 'Sector Type',
      headerText: 'Sector Type',
      width: '150',
      textAlign: 'Center',
    },

  
  ];


  export const orderData =[
    {
   
    society: "saharayn universal multipurose society limited" ,
    location: "At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh",
    st: "UTTAR PRADESH",
    dist:"KUSHI NAGAR",
    reg:"-",
    oper: "Haryana, UttarPradesh, Himachal, Punjab",
    type:"Credit"
    },

    {
     
      society: "JMJ Multi State Agro Cooperative Society Ltd." ,
      location: "TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala",
      st: "KERALA",
      dist:"",
      reg:"-",
      oper: "13/10/2022",
      type:"Agro"
      },

      {
        
        society: "Devbhoomi Agro Multi State Cooperative Society Ltd." ,
        location: "S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661",
        st: "UTTARAKHAND",
        dist:"",
        reg:"04/10/2022",
        oper: "Tamil Nadu, karnataks",
        type:"Agro"
        },
     

        {
          
          society: "Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd." ,
          location: "Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra",
          st: "MAHARASHTRA",
          dist:"",
          reg:"04/10/2022",
          oper: "Haryana, Punajb",
          type:"Health/Hospital"
          },

          {
            
            society: "Agriculture Development Cooperative Federation" ,
            location: "A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab 160055",
            st: "PUNJAB",
            dist:"",
            reg:"22/09/2022",
            oper: "Manipur, Meghalaya",
            type:"Federation"
            },

            {
             
              society: "Prosperity Multi State Housing Cooperative Society ltd." ,
              location: "Jayem Arcade 385 A6, First Floor,Kamarajar Road, Peelamedu, Coimbatore 641004",
              st: "TAMIL NADU",
              dist:"",
              reg:"15/09/2022",
              oper: "Maharashtra, Gujarat, Rajasthan",
              type:"Housing"
              },

              {
               
                society: "Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)" ,
                location: "Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana",
                st: "TELANGANA",
                dist:"",
                reg:"12/09/2022",
                oper: "Gujarat, Rajasthan",
                type:"Agro"
                },

                {
                 
                  society: "Shri Sharda Agro Multi State Co- operative Society Ltd." ,
                  location: "Shri Sharda Agro Multi State Co-operative Society Ltd.",
                  st: "UTTAR PRADESH",
                  dist:"",
                  reg:"02/09/2022",
                  oper: "Maharashtra,Goa.Karnataka, Andhra Pradesh",
                  type:"Agro"
                  },

                  {
                   
                    society: "Shri Sharda Agro Multi State Co- operative Society Ltd." ,
                    location: "Shri Sharda Agro Multi State Co-operative Society Ltd.",
                    st: "UTTAR PRADESH",
                    dist:"",
                    reg:"02/09/2022",
                    oper: "Maharashtra,Goa.Karnataka, Andhra Pradesh",
                    type:"Agro"
                    },


                    {
                   
                      society: "Travancore Cochin Tourism Cooperative Society Ltd" ,
                      location: "Idukki, Kerala 685584",
                      st: "KERALA",
                      dist:"IDUKKI",
                      reg:"31/08/2022",
                      oper: "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
                      type:"Tourism"
                      },

                      {
                        no: 11,
                        society: "Janamaitheri Agricultural Cooperative Society Ltd." ,
                        location: "Janamaitheri Agricultural Cooperative Society Ltd.",
                        st: "KERALA",
                        dist:"THIRUVANANTHAPURAM",
                        reg:"16/08/2022",
                        oper: "Maharashtra, Gujarat, Rajasthan",
                        type:"Agro"
                        },


                        {
                          no: 12,
                          society: "Swaraj Multipurpose Federation of Cooperative Society Ltd" ,
                          location: "Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road,Faridabad 121001 Haryana",
                          st: "HARYANA",
                          dist:"",
                          reg:"16/08/2022",
                          oper: "Gujarat, Rajasthan",
                          type:"Federation"
                          },

                          {
                            no: 13,
                            society: "Green Safe Multi State Agriculture Cooperative Society Ltd." ,
                            location: "Coimbatore, Tamil Nadu",
                            st: "TAMIL NADU",
                            dist:"COIMBATORE",
                            reg:"12/08/2022",
                            oper: "Haryana, Delhi",
                            type:"Agro"
                            },

                            {
                              no: 14,
                              society: "Mango Growers cooperative society Ltd. (MANCO)" ,
                              location: "Visakhapatnam",
                              st: "ANDHRA PRADESH",
                              dist:"VISAKHAPATANAM",
                              reg:"10/08/2022",
                              oper: "Haryana, Delhi, UttarPradesh, ",
                              type:"Agro	"
                              },

                              {
                                no:15,
                                society: "Srijan Krishi Vipnan Multi State Cooperative Society Ltd." ,
                                location: "Lucknow",
                                st: "UTTAR PRADESH",
                                dist:"LUCKNOW",
                                reg:"29/07/2022",
                                oper: "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
                                type:"Agro	"
                                },

                                {
                                  no: 16,
                                  society: "Kamal Multispeciality Cooperative Hospital & Research center Ltd." ,
                                  location: "Beed Maharashtra",
                                  st: "MAHARASHTRA",
                                  dist:"BEED",
                                  reg:"22/07/2022",
                                  oper: "Maharashtra, Gujarat, Rajasthan",
                                  type:"Health/Hospital	"
                                  },

                                  {
                                    no:17,
                                    society: "Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd." ,
                                    location: "Ahmednagar",
                                    st: "MAHARASHTRA",
                                    dist:"AHMEDNAGAR",
                                    reg:"24/06/2022",
                                    oper: "Haryana, Punjab, Rajasthan",
                                    type:"Health/Hospital	"
                                    },


                                    {
                                      no: 18,
                                      society:"The Urban Care Multi State Agro Cooperative Society Ltd." , 
                                      location: "Kerala",
                                      st: "KERALA",
                                      dist:"KOZHIKODE",
                                      reg:"27/06/2022",
                                      oper: "Haryana, Rajasthan",
                                      type:"Haryana, Rajasthan"
                                      },

                                      {
                                        no: 19,
                                        society: "Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)" ,
                                        location: "Kerala",
                                        st: "KERALA",
                                        dist:"THRISSUR",
                                        reg:"27/06/2022",
                                        oper: "Gujarat, Rajasthan, Haryana, Delhi",
                                        type:"Fisheries	"
                                        },

                                        {
                                          no: 20,
                                          society: "Swayam Samruddhi Multi State Cooperative Society Ltd." ,
                                          location: "Hyderabad, Telangana",
                                          st: "TELANGANA",
                                          dist:"HYDERABAD",
                                          reg:"15/06/2022",
                                          oper: "Kerala, karnataka, Maharashtra, Gujarat",
                                          type:"Agro	"
                                          },  
                                          
                                          
                                        {
                                          no: 21,
                                          society: "Shree Sai Seva Multi Specialty Cooperative Hospital and Research center ltd" ,
                                          location: "Ahmednagar, Maharashtra",
                                          st: "MAHARASHTRA",
                                          dist:"AHMEDNAGAR",
                                          reg:"15/06/2022",
                                          oper: "Maharashtra, Karnataka, Tamil nadu",
                                          type:"Health/Hospital	"
                                          },  
        

                                          
                                        {
                                          no: 22,
                                          society: "Venkateshwara Multi State Multi Specialty Hospital and Research Ltd." ,
                                          location: "Maharashtra",
                                          st: "MAHARASHTRA",
                                          dist:"NASIK",
                                          reg:"08/06/2022",
                                          oper: "Haryana, Gujarat, Maharashtra, Delhi",
                                          type:"Health/Hospital	"
                                          },  


                                          
                                        {
                                          no: 23,
                                          society: "Venkateshwara Multi State Multi Specialty Hospital and Research Ltd." ,
                                          location: "Maharashtra",
                                          st: "MAHARASHTRA",
                                          dist:"NASIK",
                                          reg:"08/06/2022",
                                          oper: "Haryana, Gujarat, Maharashtra, Delhi",
                                          type:"Health/Hospital	"
                                          },  


                                          
                                        {
                                          no: 24,
                                          society: "Kairali Agriculture Multi State Cooperative Society Ltd." ,
                                          location: "Kerala",
                                          st: "KERALA",
                                          dist:"THRISSUR",
                                          reg:"06/06/2022",
                                          oper: "Maharashtra, Gujarat, Rajasthan",
                                          type:"Agro	"
                                          },  



                                          
                                        {
                                          no: 25,
                                          society: "Jewan Kothi Multi State Agro Cooperative Society Ltd." ,
                                          location: "Uttar Pradesh",
                                          st: "UTTAR PRADESH",
                                          dist:"BASTI",
                                          reg:"06/06/2022",
                                          oper: "Haryana, UttarPradesh, Himachal, Punjab",
                                          type:"Agro"
                                          },  


                                          
                                        {
                                          no: 26,
                                          society: "Bharathimanass AgricultureCooperative Ltd. (BHARATHIMANAS)" ,
                                          location: "Manipur",
                                          st: "MANIPUR",
                                          dist:"BISHNUPUR",
                                          reg:"03/06/2022",
                                          oper: "Bihar, West bengal, Odisha",
                                          type:"Agro"
                                          },  


                                          
                                        {
                                          no: 27,
                                          society: "Youth Employability Skill Training Society Ltd." ,
                                          location: "PATHANAMTHITTA",
                                          st: "KERALA",
                                          dist:"ERNAKULAM",
                                          reg:"02/06/2022",
                                          oper: "Tamil Nadu, karnataks",
                                          type:"Agro"
                                          },  
  ];

  export const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];


  export const scheduleDate = [
    {
      Id: 1,
      Subject: 'Vanashri Cooperative Power & Agro Progressive ltd',
      Location: 'Sangli , Maharashtra',
      StartTime: '2021-01-10T04:00:00.000Z',
      EndTime: '2021-01-10T05:30:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: "Samrudh Marathwada Multi State Vehicle Services Cooperative Society Ltd.",
      Location: 'Beed, maharashtra',
      StartTime: '2021-01-11T06:30:00.000Z',
      EndTime: '2021-01-11T08:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Prestige Agro Multi State Cooperative Society Ltd',
      Location: 'Uttar Pradesh',
      StartTime: '2021-01-12T04:00:00.000Z',
      EndTime: '2021-01-12T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 4,
      Subject: "Dr Appasahed Urf Sa. Re. Patil  Jayysinghpur Udgaon Sahakari Bank Ltd",
      Location: 'Kolhapur, maharashtra',
      StartTime: '2021-01-13T07:30:00.000Z',
      EndTime: '2021-01-13T09:00:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 5,
      Subject: 'Krushisadhna Mahila Multi State Agro Cooperative society Ltd',
      Location: 'Nashik maharashtra',
      StartTime: '2021-01-14T06:30:00.000Z',
      EndTime: '2021-01-14T08:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 6,
      Subject: "Seva Sadan Multi Specialty Cooperative Hospital and Research Center Ltd",
      Location: 'Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)',
      StartTime: '2021-01-14T04:00:00.000Z',
      EndTime: '2021-01-14T05:30:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 7,
      Subject: 'Bulandshahr Agro MultiState cooperative Society Ltd',
      Location: 'Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393',
      StartTime: '2021-01-15T05:30:00.000Z',
      EndTime: '2021-01-15T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 8,
      Subject: 'The Walmik Multi State Cooperative Handloom Weavers Cooperative Society Ltd',
      Location: 'Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur 440009, Maharashtra',
      StartTime: '2021-01-16T03:30:00.000Z',
      EndTime: '2021-01-16T04:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 9,
      Subject: 'Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd',
      Location: 'S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409',
      StartTime: '2021-01-18T05:30:00.000Z',
      EndTime: '2021-01-18T07:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 10,
      Subject: 'The Bhuj Mercantile Coop. Bank Ltd',
      Location: 'Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006(Gujarat)',
      StartTime: '2021-01-20T05:30:00.000Z',
      EndTime: '2021-01-20T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 11,
      Subject: 'The Sutex Cooperative Bank Ltd',
      Location: 'Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat',
      StartTime: '2021-01-21T04:00:00.000Z',
      EndTime: '2021-01-21T05:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 12,
      Subject: 'The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd',
      Location: 'SShop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat',
      StartTime: '2021-01-08T04:30:00.000Z',
      EndTime: '2021-01-08T06:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 13,
      Subject: 'BharathiMana Fishermen development Cooperative Society ltd.',
      Location: 'Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur',
      StartTime: '2021-01-06T05:00:00.000Z',
      EndTime: '2021-01-06T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 14,
      Subject: 'Aliens vs Humans',
      Location: 'Research Center of USA',
      StartTime: '2021-01-05T04:30:00.000Z',
      EndTime: '2021-01-05T06:00:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2021-01-19T04:00:00.000Z',
      EndTime: '2021-01-19T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 16,
      Subject: 'Sky Gazers',
      Location: 'Alaska',
      StartTime: '2021-01-22T05:30:00.000Z',
      EndTime: '2021-01-22T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-11T00:00:00.000Z',
      EndTime: '2021-01-11T02:00:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      Location: 'Space Center USA',
      StartTime: '2021-01-11T11:30:00.000Z',
      EndTime: '2021-01-11T13:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      Location: 'San Fransisco',
      StartTime: '2021-01-14T00:30:00.000Z',
      EndTime: '2021-01-14T02:00:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 20,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-14T10:30:00.000Z',
      EndTime: '2021-01-14T12:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 21,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2021-01-10T08:30:00.000Z',
      EndTime: '2021-01-10T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 22,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2021-01-12T09:00:00.000Z',
      EndTime: '2021-01-12T10:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 23,
      Subject: 'Sky Gazers',
      Location: 'Greenland',
      StartTime: '2021-01-15T09:00:00.000Z',
      EndTime: '2021-01-15T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 24,
      Subject: 'JMJ Multi State Agro Cooperative Society Ltd.',
      Location: 'KERALA',
      StartTime: '2021-01-16T07:00:00.000Z',
      EndTime: '2021-01-16T09:00:00.000Z',
      CategoryColor: '#7fa900',
    },
  ];
  
  export const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },
    ],
  
    [
      { x: new Date(2005, 0, 1), y: 10 },
      { x: new Date(2006, 0, 1), y: 20 },
      { x: new Date(2007, 0, 1), y: 30 },
      { x: new Date(2008, 0, 1), y: 39 },
      { x: new Date(2009, 0, 1), y: 50 },
      { x: new Date(2010, 0, 1), y: 70 },
      { x: new Date(2011, 0, 1), y: 100 },
    ],
  ]; 
  export const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: true },
  ];

  export const pieChartData = [
    { x: 'Labour', y: 18, text: '18%' },
    { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' },
    { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' },
    { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' },
  ];
  export const ecomPieChartData = [
    { x: '2018', y: 18, text: '35%' },
    { x: '2019', y: 18, text: '15%' },
    { x: '2020', y: 18, text: '25%' },
    { x: '2021', y: 18, text: '25%' },
  ];


  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Devbhoomi Agro Multi State Cooperative Society Ltd..',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Prosperity Multi State Housing Cooperative Society ltd.',
      Status: 'Open',
      Summary: 'Arrange a web meeting with the customer to get new requirements.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'Janamaitheri Agricultural Cooperative Society Ltd.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Swaraj Multipurpose Federation of Cooperative Society Ltd',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    },
    {
      Id: 'Task 6',
      Title: 'Kairali Agriculture Multi State Cooperative Society Ltd.',
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-robert-king',
    },
    {
      Id: 'Task 7',
      Title: 'Task - 29009',
      Status: 'Review',
      Summary: 'Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR).',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
    {
      Id: 'Task 8',
      Title: 'Task - 29010',
      Status: 'Close',
      Summary: 'The Urban Care Multi State Agro Cooperative Society Ltd.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Review,IE',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 3,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 9',
      Title: 'Task - 29011',
      Status: 'Validate',
      Summary: 'Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Validation,Fix',
      Estimate: 1,
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-steven-walker',
    },
    {
      Id: 'Task 10',
      Title: 'Task - 29015',
      Status: 'Open',
      Summary: 'Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Database,SQL',
      Estimate: 5.5,
      Assignee: 'Margaret hamilt',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 11',
      Title: 'Task - 29016',
      Status: 'InProgress',
      Summary: 'Fix cannot open user’s default database SQL error.',
      Priority: 'Critical',
      Type: 'Bug',
      Tags: 'Database,Sql2008',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 12',
      Title: 'Task - 29017',
      Status: 'Review',
      Summary: 'Fix the issues reported in data binding.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Databinding',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-janet-leverling',
    },
    {
      Id: 'Task 13',
      Title: 'Task - 29018',
      Status: 'Close',
      Summary: 'Analyze SQL server 2008 connection.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Grid,Sql',
      Estimate: 2,
      Assignee: 'Andrew Fuller',
      RankId: 4,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-andrew-fuller',
    },
    {
      Id: 'Task 14',
      Title: 'Task - 29019',
      Status: 'Validate',
      Summary: 'Validate databinding issues.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Margaret hamilt',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-margaret-hamilt',
    },
    {
      Id: 'Task 15',
      Title: 'Task - 29020',
      Status: 'Close',
      Summary: 'Analyze grid control.',
      Type: 'Story',
      Priority: 'High',
      Tags: 'Analyze',
      Estimate: 2.5,
      Assignee: 'Margaret hamilt',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-high, e-margaret-hamilt',
    },
    {
      Id: 'Task 16',
      Title: 'Task - 29021',
      Status: 'Close',
      Summary: 'Stored procedure for initial data binding of the grid.',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Databinding',
      Estimate: 1.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-release, e-steven-walker',
    },
    {
      Id: 'Task 17',
      Title: 'Task - 29022',
      Status: 'Close',
      Summary: 'Analyze stored procedures.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Procedures',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 7,
      Color: '#02897B',
      ClassName: 'e-story, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 18',
      Title: 'Task - 29023',
      Status: 'Validate',
      Summary: 'Validate editing issues.',
      Type: 'Story',
      Priority: 'Critical',
      Tags: 'Editing',
      Estimate: 1,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-critical, e-nancy-davloio',
    },
    {
      Id: 'Task 19',
      Title: 'Task - 29024',
      Status: 'Review',
      Summary: 'Test editing functionality.',
      Type: 'Story',
      Priority: 'Normal',
      Tags: 'Editing,Test',
      Estimate: 0.5,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#02897B',
      ClassName: 'e-story, e-normal, e-nancy-davloio',
    },
    {
      Id: 'Task 20',
      Title: 'Task - 29025',
      Status: 'Open',
      Summary: 'Enhance editing functionality.',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Editing',
      Estimate: 3.5,
      Assignee: 'Andrew Fuller',
      RankId: 5,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-low, e-andrew-fuller',
    },
    {
      Id: 'Task 21',
      Title: 'Task - 29026',
      Status: 'InProgress',
      Summary: 'Improve the performance of the editing functionality.',
      Type: 'Epic',
      Priority: 'High',
      Tags: 'Performance',
      Estimate: 6,
      Assignee: 'Nancy Davloio',
      RankId: 5,
      Color: '#e91e64',
      ClassName: 'e-epic, e-high, e-nancy-davloio',
    },
    {
      Id: 'Task 22',
      Title: 'Task - 29027',
      Status: 'Open',
      Summary: 'Arrange web meeting with the customer to show editing demo.',
      Type: 'Others',
      Priority: 'High',
      Tags: 'Meeting,Editing',
      Estimate: 5.5,
      Assignee: 'Steven walker',
      RankId: 6,
      Color: '#1F88E5',
      ClassName: 'e-others, e-high, e-steven-walker',
    },
    {
      Id: 'Task 23',
      Title: 'Task - 29029',
      Status: 'Review',
      Summary: 'Fix the editing issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Editing,Fix',
      Estimate: '3.5',
      Assignee: 'Janet Leverling',
      RankId: 6,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-janet-leverling',
    },
    {
      Id: 'Task 24',
      Title: 'Task - 29030',
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-critical, e-steven-walker',
    },
    {
      Id: 'Task 25',
      Title: 'Task - 29031',
      Status: 'Testing',
      Summary: 'Fix the issues reported in Safari browser.',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'Fix,Safari',
      Estimate: 1.5,
      Assignee: 'Nancy Davloio',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-nancy-davloio',
    },
  ];

  export const EditorData = () => (
    <div>
      <h3>
        Try React
        React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
  
        Online Playgrounds
        If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
  
        If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.
  
        Add React to a Website
        You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.
  
        Create a New React App
        When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!
  
        As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.
  
        Learn React
        People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.
  
        If you prefer to learn by doing, start with our practical tutorial.
        If you prefer to learn concepts step by step, start with our guide to main concepts.
        Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.
  
        First Examples
        The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.
  
        React for Beginners
        If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!
  
        React for Designers
        If you’re coming from a design background, these resources are a great place to get started.
  
        JavaScript Resources
        The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.
  
        We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
      </h3>
    </div>
  );

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];
  

  export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];
 