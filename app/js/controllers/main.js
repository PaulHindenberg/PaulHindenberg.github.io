angular.module('app')
    .controller('MainCtrl', function ($scope, $log) {
window.scope = $scope;
        $scope.test = 'Hallo localhost';

        $scope.openUrl = function(url){
            window.open(url,'_blank');
        }

        $scope.me = {name: 'Paul Hindenberg', jobTitle:'Ria Developer & Consultant', email:'contact_Paul@Hindenberg.de',imgUrl:'app/img/mainpic-v2.png', logoUrl:'app/img/logo_big.png',
            welcomeTxt:"Hi,<br> I'm Paul and currently studying Information Management and Consulting (MSc.) in Ludwigshafen am Rhein, University of Applied Science, based in Germany. As Freelancer, I use my knowledge in different projects, mostly as Application Developer or/and Consultant.\n\n I mostly use this Webpage to keep track of my doings. So if You want to know more details, about me or my work, feel free to have a look.",
            skills:[
                {text:'Individual Software Development'},
                {text:'RIA Development with Flex and Java, AngularJS and PHP'},
                {text:'Multi Media Development with Wowza Media Server'},
                {text:'DBs: mySQL, sqlite, mongoDB, SAP HANA (first exp.)'},
                {text:'Mobile App Development with Phonegap and Adobe AIR'},
                {text:'Projectmanagement'},
                {text:'Business Processes: (E)EPK, BPMN, KSA'},
                {text:'Basic Knowledge in various SAP Modules'}
            ]};

        $scope.projects = [
            {employer:'Solid Thinking Interactive', employerUrl:'http://www.solid-thinking.com/',employerImgUrl:'',client:'MediaRebel',clientUrl:'http://mediarebel.com/',
              name:'Deposition Player',date:'since December 2013',url:'',imgUrl:'app/img/placeholder.jpg',
              text:'The Web Application allows for the legal-industry related viewers to watch video depositions along with the transcript taken by the court reporter.',
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
                name:'Rebroadcaster Pro',date:'since September 2013',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'Willow Mobile',date:'since August 2013',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'Policaster',date:'July - August 2013',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'Vetflix',date:'April - July 2013',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'mixLive TV',date:'January - June 2013',url:'http://mixlive.tv',imgUrl:'app/img/placeholder.jpg',
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
                name:'DatetheDoc',date:'September 2012',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'TruckPTI',date:'Juli - September 2012',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'NASATalk',date:'Juli - January 2013',url:'',imgUrl:'app/img/placeholder.jpg',
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
                name:'Language Twin',date:'May - September 2012',url:'http://www.languagetwin.com/',imgUrl:'app/img/placeholder.jpg',
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
                name:'Sportalytics',date:'April - September 2012',url:'http://www.languagetwin.com/',imgUrl:'app/img/placeholder.jpg',
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
                name:'FHB - Website',date:'March - October 2012',url:'https://www.fhb.com/en/',imgUrl:'app/img/placeholder.jpg',
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
                name:'Starchat',date:'February - Juli 2012',url:'',imgUrl:'app/img/placeholder.jpg',
                text:'Development of a Multi-Video-Chat Application - 3 international DevTeams (U.S., Oranje + us)',
                languages:[
                    {name:'ActionScript3,'},
                    {name:'MXML,'},
                    {name:'PHP,'},
                    {name:'SQL,'},
                    {name:'Java'}
                ],
                techs:[
                    {name:'Adobe/ Apache Flex,'},
                    {name:'Wowza Media Server'}
                ]
            },


        ];
    });