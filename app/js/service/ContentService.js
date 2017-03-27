/**
 * Created by paulhindenberg on 02.05.14.
 */
angular.module('app')
.factory("ContentService", function(){
        var projects = [
            {employer:'Solid Labs', employerUrl:'http://www.solid-labs.eu/',employerImgUrl:'',client:'',clientUrl:'',
                name:'PocketProf',date:'since Feb 2014',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'PocketProf is a mobile App for Android and iOS that enables students to consume learning material as well as answering quizzes on the go to get even more educated.',
                languages:[
                    {name:'JS,'},
                    {name:'HTML5,'},
                    {name:'CSS3,'},
                    {name:'PHP,'},
                    {name:'SQL,'}
                ],
                techs:[
                    {name:'AngularJS,'},
                    {name:'Ionicframework,'},
                    {name:'MySQL,'}
                ]},
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'MediaRebel',clientUrl:'http://mediarebel.com/',
                name:'Deposition Player',date:'Dec 2013 - Feb 2014',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Failed - The Web Application allows for the legal-industry related viewers to watch video depositions along with the transcript taken by the court reporter.',
                languages:[
                    {name:'JS,'},
                    {name:'HTML5,'},
                    {name:'CSS3,'},
                    {name:'PHP,'},
                    {name:'SQL,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'AngularJS,'},
                    {name:'Bootstrap,'},
                    {name:'Wowza Media Server,'},
                    {name:'MySQL'}
                ]},
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'Rebroadcaster Pro',date:'since Sep 2013',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Web Application to manage broadcasts that are based on a serverside playlist. Web App allows modification of this playlists.',
                languages:[
                    {name:'JS,'},
                    {name:'HTML5,'},
                    {name:'CSS3,'},
                    {name:'PHP,'},
                    {name:'SQL,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'AngularJS,'},
                    {name:'Bootstrap,'},
                    {name:'Laravel,'},
                    {name:'MySQL,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive + Myself', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'Willow Mobile',date:'since Aug 2013',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'IPad and Android Tablet Version of Willow.<br> Willow is a Server Management and Monitoring Application for Wowza Media Server, developed and owned by Solid Thinking Interactive and myself.',
                languages:[
                    {name:'JS,'},
                    {name:'HTML5,'},
                    {name:'CSS3,'},
                    {name:'PHP,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Phonegap,'},
                    {name:'AngularJS,'},
                    {name:'Bootstrap,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'Policaster',date:'Jul - Aug 2013',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Development of an Online Presentation Application. Multi Live-Streaming, combined with Video on Demand and/or Images.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'SQL,'},
                    {name:'PHP,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'MySQL,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'Vetflix',date:'Apr - Jul 2013',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Development of an Online Presentation Application. Multi Live-Streaming, combined with Video on Demand, Images and or Powerpoint Presentations.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'SQL,'},
                    {name:'PHP,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'MySQL,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'mixLive TV',date:'Jan - Jun 2013',url:'http://mixlive.tv',imgUrl:'app/img/placeholder.jpg',
                text:'Development of the central Broadcasting Application and all following videoplayer.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'DatetheDoc',date:'Sep 2012',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'One-on-One Video Chat Elements.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'TruckPTI',date:'Jul - Sep 2012',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'TruckPTI (Pre-Trip-Info) is a mobile app adapted for Android and iOS devices to manage vehicle inspections. Those are required by law and had to be archived on paper, every time before starting the trip. The goal was to create and offer a simple solution for most Smartphones. ',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'NASA',clientUrl:'',
                name:'NASATalk',date:'Jul - Jan 2013',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Development of a Multi-Video-Chat Application - <strong>canceled/failed</strong>',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive + Myself', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'',clientUrl:'',
                name:'Willow',date:'since May 2012',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'50% ownership - lead Dev<br> Conception, development and continuous continuation of our own Server Management and Monitoring Application for Wowza Media Server - Willow',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'LanguageTwin',clientUrl:'',
                name:'Language Twin',date:'May - Sep 2012',url:'http://www.languagetwin.com/',imgUrl:'app/img/placeholder.jpg',
                text:'Development of the One-on-One Video Chat Component of LanguageTwin, which is practically the heart of LanguageTwin.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'LanguageTwin',clientUrl:'',
                name:'Sportalytics',date:'Apr - Sep 2012',url:'http://www.languagetwin.com/',imgUrl:'app/img/placeholder.jpg',
                text:'Flex based Web Application to create multiple video clips from one big video and some additional content management. Basically virtual video editing inside the cloud.',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'PHP,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'First Hawaiian Bank',clientUrl:'https://www.fhb.com/en/',
                name:'FHB - Website',date:'Mar - Oct 2012',url:'https://www.fhb.com/en/',imgUrl:'app/img/placeholder.jpg',
                text:'Custom Plugin Development for the new FHB Website, which is running on the CMS Mura. <br> Individual Backend and Frontend Plugins for managing the content.',
                languages:[
                    {name:'JS,'},
                    {name:'HTML,'},
                    {name:'CSS,'},
                    {name:'jQuery,'},
                    {name:'Coldfusion,'},
                    {name:'SQL'}
                ],
                techs:[
                    {name:'Mura,'},
                    {name:'ColdFusion9,'},
                    {name:'MySQL (Dev),'},
                    {name:'MSSQL (Prod),'}
                ]
            },
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'NASA',clientUrl:'',
                name:'Starchat',date:'Feb - Jul 2012',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Development of a Multi-Video-Chat Application - 3 international DevTeams (U.S., Netherlands + us)',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'PHP,'},
                    {name:'SQL,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'},
                    {name:'MySQL'}
                ]
            }
        ];
        var me = {name: 'Paul Hindenberg', jobTitle:'SPA Developer & Consultant', email:'Paul.Hindenberg@gambit.de',imgUrl:'app/img/mainpic-v2.png', logoUrl:'app/img/logo_big.png',
            welcomeTxt:"Hello and welcome,<br> I'm Paul and currently living between between Cologne and Bonn where I'm employed at Gambit Consulting. \n "
            + "Here I'm working mostly as an (not only :)) SAP developer as well as technical Consultant on various projects. "
            + "Before getting here I was studying Information Management and Consulting (MSc.) in Ludwigshafen am Rhein, University of Applied Science, based in Germany. As Freelancer, I was using my knowledge in different projects, mostly as Application Developer or/and Consultant.\n\n I mostly use this Webpage to keep track of my doings. So if You want to know more details, about me or my work, feel free to have a look.",
            skills:[
                {text:'Individual Software Development'},
                {text:'var. ABAP Development'},
                {text:'SPA Development with AngularJS, Vue, NodeJS, Flex, Java, PHP, ..'},
                {text:'Multi Media Development with Wowza Media Server'},
                {text:'DBs: mySQL, sqlite, mongoDB, redis, SAP HANA'},
                {text:'Hybrid App Development with Cordova, Ionic or Adobe AIR'},
                {text:'Project-Management'},
                {text:'Business Processes: (E)EPK, BPMN, KSA'}
            ]};
        var employments = [
            {employer:'Gambit Consulting', employerUrl:'http://www.gambit.de', employerImgUrl:'https://www.gambit.de/wp-content/uploads/2016/10/gambit_logo.png', date:'Nov 2014 - today',location:'Troisdorf, Germany',
                job:'IT and SAP Consultant', hasProjects:true,
                descr:['Working on various SAP and non SAP projects as technical consultant and developer']
            },
            {employer:'Hochschule Ludwigshafen am Rhein', employerUrl:'http://hs-lu.de', employerImgUrl:'', date:'March 2014', location:'Ludwigshafen am Rhein, Germany',
            job:'Lecturer of a Crash Course in SW Modeling and Databases', hasProjects:false,
            descr:['Lecturing a 5d week with 8h/day','Course Participants: Economic Students who want to start their IT Master studies, no/little prior knowledge']
            },
            {employer:'Self Employed', employerUrl:'', employerImgUrl:'', date:'since Feb 2012',location:'Various',
                job:'DevCon', hasProjects:true,
                descr:['Started being self-employed in Vancouver, BC, Canada','Continued it back in Germany next to school for my Master Degree.']
            },
            {employer:'Mount Seymour Resorts Ltd', employerUrl:'https://www.mountseymour.com', employerImgUrl:'https://www.mountseymour.com/template/images/logos/mount_seymour_logo_01_180x92.png', date:'Dec 2011 - March 2012',location:'Vancouver, BC, Canada',
                job:'Equipment Technician',
                descr:['Worked as technician in the Rentals Department.', 'Been responsible for all the rental equipment, customer equipment & cash register.']
            },
            {employer:'adesso AG', employerUrl:'http://www.adesso.de', employerImgUrl:'http://adesso.de/media/layout_neu/logo/topLogo.gif', date:'May 2010 - Jul 2011',location:'Berlin, Germany',
                job:'Working Student Development & Consulting', hasProjects:true,
                descr:['Primarily worked on Adobe Flex Projects']
            },
            {employer:'Fachhochschule Brandenburg', employerUrl:'http://www.fh-brandenburg.de', employerImgUrl:'', date:'Oct 2009 - Jan 2010', location:'Brandenburg, Germany',
                job:'Student Assistant (HiWi)', hasProjects:false,
                descr:['Support, Coordination and organization of classes throughout a project course','Course essence: Building a Chat Client with Adobe Flex and IRC']
            }
//            ,
//            {employer:'Bundeswehr (German Army)', employerUrl:'http://www.bundeswehr.de/‎', employerImgUrl:'', date:'Oct 2007 - Sept 2008', location:'Torgelow, Germany',
//                job:'Basic Military Service',
//                descr:['9 month basic military service + 2 month reserve', 'Human Resource Assistant']
//            }
//{employer:'', employerUrl:'', employerImgUrl:'', date:'',location:'',
//            job:'', hasProjects:false,
//            descr:['']
//    },


        ];

        var interests = ['Real Time Applications', 'IoT', 'Big Data'];

        var languages = [{language: 'German',skill:'First language'},{language: 'English',skill:'Business fluent'},{language: 'French',skill:'Basics'}];

        var skills = {  prog:['ABAP (Objects)', 'Deepstream (Hub)', 'SAPUI5 / openUI5', 'SAP Fiori', 'oData', 'JSON', 'Apache Hive', 'NodeJS', 'Vue 2 + Vuex', 'HTML', 'CSS', 'JS', 'AngularJS', 'Bootstrap', 'Ionicframework', 'Cordova/Phonegap', 'jQuery', 'SOAP', 'OOP', 'OOAD', 'PHP', 'Java', 'Hibernate', 'SQL', 'Actionscript 3', 'MXML', 'Adobe/Apache Flex (3+4)', 'Adobe AIR', 'Eclipse RCP', 'JFace', 'Coldfusion 10', 'XML'],                        
                        tools:['SAP Gateway', 'SAP Cloud Platform', 'SAP Hybris', 'Apache Hadoop', 'mySQL', 'MongoDB', 'Oracle', 'DB-Modelling', 'UML', 'Scrum', 'Jira', 'Hudson/Jenkins CI', 'MS Office', 'Project- & Team Management', 'BPMN', 'KSA', 'Systemanalysis','Process Modelling & -Optimisation','Mura CMS', 'Typo3'],
                        sap:['Landscape Transformation', 'SAP NetWeaver', 'ABAP (Objects)', 'SAPUI5 / openUI5', 'SAP Fiori', 'SAP Gateway']
                    };
        var courses = { fhb:[
                            {sem:'1. Semester', courses:['Grundlagen und Wirkungen der Wirtschaftsinformatik', 'Algorithmen und Datenstrukturen','Systemanalyse','Datenbanken - Anwendung und Entwicklung', 'Grundlagen der Wirtschafts- und Finanzmathematik', 'Grundlagen der Betriebswirtschaftslehre']},
                            {sem:'2. Semester', courses:['Objektorientierter Systementwurf', 'Datenbank - Modellierung und Strukturierung', 'Grundlagen der Prozessmodellierung', 'Grundlagen statistischer Methoden', 'Rechnungswesen und Buchf&uuml;hrung', 'Englisch anwenden in der Wirtschaftsinformatik']},
                            {sem:'3. Semester', courses:['Software Engineering und Projektmanagement', 'Usability und Software-Ergonomie', 'Betriebssysteme und Netzwerke', 'Gr&uuml;ndungsbezogene Betriebswirtschaftslehre 1', 'Wissenschaftliches Arbeiten Scientifical and Technical Writing', 'Soziale Kompetenzen']},
                            {sem:'4. Semester', courses:['Systemarchitektur und -integration', 'Secure Software Engineering', 'IT-Controlling', 'Information-Management', 'Management u. Organisation', 'DV orientiertes Wirtschaftsrecht', 'Gr&uuml;ndungsbezogene Betriebswirtschaftslehre 2 - Unternehmensnachfolge']},
                            {sem:'5. Semester', courses:['Grundlagen der VWL', 'Datenschutz und Sicherheit', 'Produktion, Logistik und Vertrieb', 'Softwareauswahl und -anpassung', 'Projektmanagement im Umfeld der betrieblichen Finanzplanung', 'Security Management for Enterprises']},
                            {sem:'6. Semester', courses:['Praxissemester!', 'Bachelor Thesis, Thema: [Vergleich von Cross-Plattform-Entwicklungsframeworks f&uuml;r Multi-Device-Applikationen]']}
                        ], hslu:[
                            {sem:'1. Semester', courses:['E-Commerce Strategy','E-Logistic Strategy','IT-Recht','Business Integration Consulting','Process Management (ARIS): Projekte I + II','ERP-Consulting (inkl. ERP-Architektur)','ERP-Prozesse (SAP ERP ECC)']},
                            {sem:'2. Semester', courses:['Modellierung Anwendungssysteme','Business Communication','Beratungsmanagement','IT Service Management','Information Systems Security','Software Engineering','Anwendungsentwicklung mit J2EE','Business Intelligence','Knowledge Management']},
                            {sem:'3. Semester', courses:['Realisierung Anwendungssysteme','Realisierung Business Intelligence','Realisierung Knowledge Management','Change Management','Corporate Performance Enhancement','Strategic Consulting','Marketing Prozesse & Systeme','Personal Prozesse & Systeme','Controlling Prozesse & Systeme']},
                            {sem:'4. Semester', courses:['Master Thesis, Thema: [Darstellung und Wertung von Softwarearchitekturen und Sicherheitskonzepten f&uuml;r Smart Grid Anwendungen]']}
                        ]
                        }
        var certificates = ['SAP Landscape Transformation Associate','MongoDB for Developers (M101 by 10gen)'];

        return{
            getMe: function(){
                return me;
            },
            getProjects: function(){
                return projects;
            },
            getEmployments: function(){
                return employments;
            },
            getCertificates: function(){
                return certificates;
            },
            getLanguages: function(){
                return languages;
            },
            getSkills: function(){
                return skills;
            },
            getCourses: function(){
                return courses;
            },
            getInterests: function(){
                return interests;
            }
        }

    })
