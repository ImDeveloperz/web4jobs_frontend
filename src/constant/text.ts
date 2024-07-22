const Text = {
    Navbar: {
        listMenu: [
            {
                name: 'Home',
                link: '#home'
            },
            {
                name: 'About',
                link: '#about'
            },
            {
                name: 'Programs',
                link: '#programs'
            },
            {
                name: 'Blogs',
                link: 'https://www.yool.education/blog'
            },
        ],
        button: "Join Us Now!",
        listLang: ['English (Uk)', 'Francais (Fr)'],
    },
    pages: {
        Acceuil: {
            Hero: {
                title: 'Web4jobs is the first Moroccan ',
                title2: 'Tech Innovative Training',
                subTitle: "platform powered by",
                subTitle2: ' « QWASAR » a Sillicon Valley company',
                listAdvantages: ['24 hour access to coding platform.', '24 hour live-chat platform.', 'Guardianship/mentorshipavailable.', 'Part-timeand full-time training.', 'Extra-curricularactivities.', 'Certificateof completion.'],
                button: 'Discover Our Programs',
                imgUrl: '/../../../public/bgHero.jpeg',
            },
            Stats: {
                title: 'Our Stats',
                subTitle: 'This is our succes till this day!',
                cards: [
                    {
                        title: '10K',
                        description: "Students served across 4 continents since 2019.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: '90%',
                        description: "Employment rate within a few months of graduating.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: '#1',
                        description: "Software engineering program in Silicon Valley, California, and the US",
                        color: 'text-tertiary-color',
                    },
                ],
            },
            Futur: {
                title: 'The Future Of',
                title2: 'Tech Education',
                discription: "21st Century workplaceSkills are skills and abilities that have been identified as important for success in the 21st century.particularly compared to previous centuries.",
                discription2: "They include:",
                list: ["Propleme solving and critical thinking", "Creativity and innovation", "Communication", "Collaboration and teamwork", "Resourcefulness", "Ability to handle complexity and complexe problems", "Flexibility"],
            },
            Strategy: {
                title: 'Approach To Learning',
                subTitle: 'These are our strategies to teach our courses!',
                cards: [
                    {
                        title: 'Project-Based Learning',
                        description: "Students tackle challenging software projects to build key skills and problem-solving abilities. They also face coding exercises to prepare for technical interviews.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Practice & Repetition',
                        description: "Confidence in software engineering comes from practice and repetition. These actions reduce anxiety in the workplace and during job interviews.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Role Play',
                        description: "We employ role play for technical interviews and salary negotiation prep. You'll experience both sides (unique to our program), which will make you ready for real interviews.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Community',
                        description: "Knowledge thrives in our student community. We support your transition into tech roles. Your job is simply to engage and contribute.",
                        color: 'text-tertiary-color',
                    },
                ],
            },
            Prep: {
                title: 'Prep For The Shark Tank',
                subTitle: 'You better be ready for this one!',
                list: [
                    {
                        title: 'Project-Based Learning',
                        discription: " Being a good software engineer, ML engineer, developer, or data scientist isn’t something you’ll learn by reading a book or watching a video. You need to DO it! Learning by doing has been scientifically proven to be a superior way of learning, but more importantly, it's a method that simulates the workplace and prepares students for jobs.",
                        image: "/prep1.svg",
                        isLayoutCentered: true,
                        reversed: false
                    },
                    {
                        title: 'Mastery-Based Learning',
                        discription: 'We use mastery-based learning: you need to master each Season of the curriculum and the 12 subject areas covered in technical interviews. The point isn’t to pass; it’s to be confident and able to use the skills required for software engineer jobs.',
                        image: "/prep2.svg",
                        isLayoutCentered: false,
                        reversed: true
                    },
                    {
                        title: 'Gamified Learning',
                        discription: 'You will gain points for completing projects, correcting your peers, and contributing to the community. These points can be redeemed for peer reviews, special events, or special project opportunities.',
                        image: "/prep3.svg",
                        isLayoutCentered: true,
                        reversed: false
                    },
                    {
                        title: 'Dedicated Program Commitment & Hours',
                        discription: "For a successful learning experience, you’ll need to commit to full time work on the program: 9am to 5pm, Monday to Friday.",
                        image: "/prep4.svg",
                        isLayoutCentered: false,
                        reversed: true
                    },
                ],
            },
            Programs: {
                title: "3 Levels Remote Training Program",
                subTitle: "Our teaching strategie is based on a 3 poles plan",
                subTitle1: "NOOP",
                subTitle2: "APPRENTICE",
                subTitle3: "CONFIRMED",
                cards: [
                    {
                        image: "/program1.svg",
                        title: "Full Stack Program",
                        description: "This program focuses on front-end and back-end development, as well as strong fundamentals in data structures...",
                        buttonText: "Go For It!",
                        link: "/programs/fullStack",
                    },
                    {
                        image: "/cloud1.svg",
                        title: "DevOps/Cloud Program",
                        description: "This program focuses on architecture, infrastructure,monitoring, automation, and network programming...",
                        buttonText: "Go For It!",
                        link: "/programs/cloud",
                    },
                    {
                        image: "/data1.svg",
                        title: "Data Science Program",
                        description: "This program focuses on end-to-end data management anduse from collection to business decision-making...",
                        buttonText: "Go For It!",
                        link: "/programs/dataScience",
                    },
                    {
                        image: "/machineL1.svg",
                        title: "Machine Learning Program",
                        description: "This program focuses on the fundamentals of machine learning and data engineering as well as strong fundamentals in data...",
                        buttonText: "Go For It!",
                        link: "/programs/machineLearning",
                    },
                    {
                        image: "/softwareE1.svg",
                        title: "Software Engineering",
                        description: "This program focuses on software engineeringprinciples, as well as strong fundamentals in data structures...",
                        buttonText: "Go For It!",
                        link: "/programs/softwareEngineering",
                    },
                ]
            },
            About: {
                title: 'Who Are You?',
                subTitle: 'Identify yourself by one of these 3 categories!',
                cards: [
                    {
                        image: "/student.svg",
                        title: "Student",
                        description: "Regardless of where you start in your journey, prepare yourself to take your career to the next level.",
                        buttonText: "Join Now!",
                        link: "whoAreYou/student"
                    },
                    {
                        image: "/corporate.svg",
                        title: "Corporate",
                        description: "Regardless of where you start in your journey, prepare yourself to take your career to the next level.",
                        buttonText: "Join Now!",
                        link: "whoAreYou/corporate"
                    },
                    {
                        image: "/publicAdmin.svg",
                        title: "Public Administration",
                        description: "Regardless of where you start in your journey, prepare yourself to take your career to the next level.",
                        buttonText: "Join Now!",
                        link: "whoAreYou/publicAdministration"
                    },
                ]
            },
            Contact: {
                title: "Join Our SummerTech",
                subTitle: "Join Our SummerTech by entering your email adress!",
                button: "Join Now!",
            },
        },
    },
    Programs: {
        FullStack: {
            Hero: {
                title: 'Full Stack Program',
                review: 4.8,
                subTitle: "Introduction",
                description: 'Web4jobs by Qwasar Silicon Valley offers a competency-based certification in Full Stack Development. The program covers essential skills for creating software applications, websites, and mobile apps, focusing on both the front-end (appearance) and back-end (data and algorithms). ',
                image: "/program1.svg",
            },
            Aquirements: {
                title: 'Students Aquirements',
                subTitle: 'At the end of the training this is what students will have aquired!',
                list: ["Front-end and back-end programming,", "Ruby on Rails,", "Javascript, ", "Advanced SQL database knowledge,", "RESTful APIs, software architecture,", "Structured problem solving and debugging,", "Data structures and algorithms,", "SEO.", "SQL, SQLite, and databases,", "Wordpress, Shopify, and website CMSs,", "Cloud-hosting and app deployment,", "Extensive use of industry-standard tools such as Git. IDEs, and terminal commands."],
                image: "/program12.svg",
            },
            WhatToExpect: {
                title: 'What To Expect',
                subTitle: 'These are our ways of teaching our trainers!',
                cards: [
                    {
                        title: 'Remote training program',
                        description: "Students will gain experience building and developing software.By the time students complete the program they will earn an industry- standard certification in Full Stack Development from Qwasar.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'No tests, only projects',
                        description: "Each focus of this program will involve completing projects in teams as well individually to ensure students are learning and applying their knowledge.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Showcase projects to recruiters',
                        description: "Students will showcase approximately 5 to 20 projects representing thousands of lines of code for employers and interviews.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Interview training',
                        description: "As part of this program, students will complete technical interviews to prepare for job applications. Students will be guided on how to navigate  interviews including whiteboard coding.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: '20 hpw time commitment',
                        description: "Students will need to devote 20 hours a week minimum in order to fully learn the content necessary to pass the course and become a data scientist.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Build apps and sites solo or in groups.',
                        description: "Complete end-to-end software projects that cover both front-end and back-end development. ",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Write 30K lines across 20 projects',
                        description: "Students will write about 30,000 lines of code, gaining confidence and experience in software design and implementation.",
                        color: 'text-tertiary-color',
                    },
                ]
            },
            Cources: {
                title: "Course Meeting Schedule",
                subTitle: "This is a schedule of our courses,",
                subTitle2: "Download the program",
                cards: [
                    {
                        title: "Level 1 : NOOB",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : Preseason",
                                list: ["Bootcamp Javascript", "My bouncing box", "My css is easy", "My first backend"],
                            },
                            {

                                subTitle: "Season : 1st Full-Stack",
                                list: ["BootCamp C", "Print F"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    },
                    {
                        title: "Level  2 : APPRENTICE",
                        title2: "3 Months!",
                        color: "text-tertiary-color",
                        list: [
                            {
                                subTitle: "Season : 2nd Full-Stack",
                                list: ["Bootcamp Ruby", "My CSS is Easy I", "My Select Query", "My CSS is Easy II", "My SQLite", "My Users App", "My css is easy", "Bootcamp JS (Javascript)", "My Tetris", "My Basecamp 1", "My Green Wordpress"],
                            },
                        ],
                        bg: "bg-action-secondary",
                        hover: "hover:bg-hover-secondary",
                        colorButtonText: "text-black"
                    },
                    {
                        title: "Level 3 : CONFIRMED",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : 3rd Front-End Full-Stack",
                                list: ["Bootcamp ReactJS", "My Pokemon App", "My Yelp", "My Instagram", "My Dropbox"],
                            },
                            {
                                subTitle: "Season : 3rd Back-End Full-Stack",
                                list: ["My Basecamp 2", "My API", "My Yelp", "My Dropbox"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    }
                ]
            }
        },
        Cloud: {
            Hero: {
                title: 'DevOps & Cloud Program',
                review: 4.8,
                subTitle: "Introduction",
                description: 'Web4jobs by Qwasar Silicon Valley offers a competency-based DevOps/Cloud certification program. It teaches skills for becoming a DevOps/Cloud Engineer, focusing on building and maintaining server or cloud infrastructure. The program covers system maintenance, monitoring, scaling systems, and optimiTerraform, Puppet, Chef, Ansible, Jenkins, AWS/GCP/Azure,zing server use based on demand. ',
                image: "/cloud1.svg",
            },
            Aquirements: {
                title: 'Students Aquirements',
                subTitle: 'At the end of the training this is what students will have aquired!',
                list: ["Cloud infrastructure, scripting and monitoring systems", "Terraform, Puppet, Chef, Ansible, Jenkins, AWS/GCP/Azure,", "C Programming, Shell. ", "Docker, Kubernetes, virtual machines,", "Network programming,", "Public IaaS cloud infrastructure. ", "LibASM and Redis database.", "Javascript.", "Advanced SQL database knowledge,", "Structured problem solving and debugging,", "Data structures and algorithms,", "SQL, SQLite, and databases.", "Cloud-hosting and app deployment,", "Extensive use of industry-standard tools such as Git, IDEs, and terminal commands."],
                image: "/cloud2.svg",
            },
            WhatToExpect: {
                title: 'What To Expect',
                subTitle: 'These are our ways of teaching our trainers!',
                cards: [
                    {
                        title: 'Remote training program',
                        description: "Students will gain experience building and developing software.By the time students complete the program they will earn an industry- standard certification in Full Stack Development from Qwasar.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'No tests, only projects',
                        description: "Each focus of this program will involve completing projects in teams as well individually to ensure students are learning and applying their knowledge.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Showcase projects to recruiters',
                        description: "Students will showcase approximately 5 to 20 projects representing thousands of lines of code for employers and interviews.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Interview training',
                        description: "As part of this program, students will complete technical interviews to prepare for job applications. Students will be guided on how to navigate  interviews including whiteboard coding.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: '20 hpw time commitment',
                        description: "Students will need to devote 20 hours a week minimum in order to fully learn the content necessary to pass the course and become a data scientist.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Build apps and sites solo or in groups.',
                        description: "Complete end-to-end software projects that cover both front-end and back-end development. ",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Write 30K lines across 20 projects',
                        description: "Students will write about 30,000 lines of code, gaining confidence and experience in software design and implementation.",
                        color: 'text-tertiary-color',
                    },
                ]
            },
            Cources: {
                title: "Course Meeting Schedule",
                subtitle: "This is a schedule of our courses,",
                subTitle2: "Download the program",
                cards: [
                    {
                        title: "Level 1 : NOOB",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : Preseason",
                                list: ["Bootcamp Python", "My DS Babel", "My Select Query", "My NBA Game Analysis"],
                            }, {
                                subTitle: "Season : 1st DevOps",
                                list: ["BootCamp C", "Print F"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    },
                    {
                        title: "Level  2 : APPRENTICE",
                        title2: "3 Months!",
                        color: "text-tertiary-color",
                        list: [
                            {
                                subTitle: "Season : 2nd DevOps",
                                list: ["Domain Name", "Start my web server", "Configure my web address", "Secure Shell", "Start my web server", "Sending my first email", "Receiving my first email", "Configure IMAP"],
                            }
                        ],
                        bg: "bg-action-secondary",
                        hover: "hover:bg-hover-secondary",
                        colorButtonText: "text-black"
                    },
                    {
                        title: "Level 3 : CONFIRMED",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : 3rd DevOps",
                                list: ["Docker", "Operation Easy Website", "ELK and Moose", "The Chef and the Server", "Databases: Part 1", "Databases: The Sequel", "Databases: The Finale", "My Gitlab", "Green Eggs and Ham", "You Shall Not Pass"],
                            },
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    }
                ]
            }
        },
        Data: {
            Hero: {
                title: 'Data-Science Program',
                review: 4.8,
                subTitle: "Introduction",
                description: 'Web4jobs by Qwasar Silicon Valley offers a competency-based Data Science certification program. It covers data management from collection to decision-making and fundamentals in data structures and algorithms. Students learn programming concepts, data analysis, machine learning, and visualization using Python, Panda, Jupyter, Keras, and TensorFlow. Projects involve large, cost-optimized data sets. ',
                image: "/data1.svg",
            },
            Aquirements: {
                title: 'Students Aquirements',
                subTitle: 'At the end of the training this is what students will have aquired!',
                list: ["Python, Pytorch, R, SQL and noSQL databases", "Splunk, Tableau, data visualt", "Front-end and back-end programming", "Ruby on Rails", "Javascript", "Advanced SQL database knowledge", "RESTful APIs, software architecture", "Structured problem solving and debugging", "Data structures and algorithms", "SEO", "SQL, SQLite, and databases", "Wordpress, Shopify, and website CMSs", "Cloud-hosting and app deployment", "Extensive use of industry-standard tools such as Git, IDEs, and terminal commands"],
                image: "/data2.svg",
            },
            WhatToExpect: {
                title: 'What To Expect',
                subTitle: 'These are our ways of teaching our trainers!',
                cards: [
                    {
                        title: 'Remote training program',
                        description: "Students will gain experience building and developing software.By the time students complete the program they will earn an industry- standard certification in Full Stack Development from Qwasar.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'No tests, only projects',
                        description: "Each focus of this program will involve completing projects in teams as well individually to ensure students are learning and applying their knowledge.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Showcase projects to recruiters',
                        description: "Students will showcase approximately 5 to 20 projects representing thousands of lines of code for employers and interviews.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Interview training',
                        description: "As part of this program, students will complete technical interviews to prepare for job applications. Students will be guided on how to navigate  interviews including whiteboard coding.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: '20 hpw time commitment',
                        description: "Students will need to devote 20 hours a week minimum in order to fully learn the content necessary to pass the course and become a data scientist.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Build apps and sites solo or in groups.',
                        description: "Complete end-to-end software projects that cover both front-end and back-end development. ",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Write 30K lines across 20 projects',
                        description: "Students will write about 30,000 lines of code, gaining confidence and experience in software design and implementation.",
                        color: 'text-tertiary-color',
                    },
                ]
            },
            Cources: {
                title: "Course Meeting Schedule",
                subtitle: "This is a schedule of our courses,",
                subTitle2: "Download the program",
                cards: [
                    {
                        title: "Level 1 : NOOB",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : Preseason",
                                list: ["Bootcamp Python", "My DS Babel", "My Select Query", "My NBA Game Analysis"],
                            }, {
                                subTitle: "Season : 1st Data-Science",
                                list: ["BootCamp C", "Print F"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    },
                    {
                        title: "Level  2 : APPRENTICE",
                        title2: "3 Months!",
                        color: "text-tertiary-color",
                        list: [
                            {
                                subTitle: "Season : 2nd Data-Science",
                                list: ["My Mr Clean", "Bootcamp Data Science", "My Open the Iris", "My First Scraper", "My Tu Verras", "My M and A", "My Convex Optimization", "My Linear Regression", "My MobApp Studio", "My Netflix"],
                            }
                        ],
                        bg: "bg-action-secondary",
                        hover: "hover:bg-hover-secondary",
                        colorButtonText: "text-black"

                    },
                    {
                        title: "Level 3 : CONFIRMED",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : 3rd Data-Science",
                                list: ["Drive Me Crazy", "Operation Easy Website", "A Fool’s Fraud", "Coleridge Initiative"],
                            },
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    }
                ]
            }
        },
        MachineL: {
            Hero: {
                title: 'Machine Learning Program',
                review: 4.8,
                subTitle: "Introduction",
                description: 'Web4jobs by Qwasar Silicon Valley offers a competency-based Machine Learning certification program. It covers machine learning, data engineering, data structures, and algorithms. Students learn programming concepts, front-end and back-end languages like JavaScript, Python, Pytorch, and TensorFlow. Projects focus on databases, architecture, large data sets, and cloud deployment.',
                image: "/machineL1.svg",
            },
            Aquirements: {
                title: 'Students Aquirements',
                subTitle: 'At the end of the training this is what students will have aquired!',
                list: [
                    "Python, Pytorch, Jupyter",
                    "Keras, Panda, Tensor Flow, Kaggle",
                    "Structured problem solving and debugging",
                    "Advanced algorithms",
                    "Advanced data structures and databases",
                    "C",
                    "Cloud-hosting and app deployment",
                    "Extensive use of industry-standard tools such as Git, IDEs, and terminal commands"
                ],
                image: "/machineL2.svg",
            },
            WhatToExpect: {
                title: 'What To Expect',
                subTitle: 'These are our ways of teaching our trainers!',
                cards: [
                    {
                        title: 'Remote training program',
                        description: "Students will gain experience building and developing software.By the time students complete the program they will earn an industry- standard certification in Full Stack Development from Qwasar.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'No tests, only projects',
                        description: "Each focus of this program will involve completing projects in teams as well individually to ensure students are learning and applying their knowledge.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Showcase projects to recruiters',
                        description: "Students will showcase approximately 5 to 20 projects representing thousands of lines of code for employers and interviews.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Interview training',
                        description: "As part of this program, students will complete technical interviews to prepare for job applications. Students will be guided on how to navigate  interviews including whiteboard coding.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: '20 hpw time commitment',
                        description: "Students will need to devote 20 hours a week minimum in order to fully learn the content necessary to pass the course and become a data scientist.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Build apps and sites solo or in groups.',
                        description: "Complete end-to-end software projects that cover both front-end and back-end development. ",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Write 30K lines across 20 projects',
                        description: "Students will write about 30,000 lines of code, gaining confidence and experience in software design and implementation.",
                        color: 'text-tertiary-color',
                    },
                ]
            },
            Cources: {
                title: "Course Meeting Schedule",
                subtitle: "This is a schedule of our courses,",
                subTitle2: "Download the program",
                cards: [
                    {
                        title: "Level 1 : NOOB",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : Preseason",
                                list: ["Bootcamp Python", "My DS Babel", "My Select Query", "My NBA Game Analysis"],
                            }, {
                                subTitle: "Season : 1st AI/ML",
                                list: ["BootCamp C", "Print F"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    },
                    {
                        title: "Level  2 : APPRENTICE",
                        title2: "3 Months!",
                        color: "text-tertiary-color",
                        list: [
                            {
                                subTitle: "Season : 2nd AI/ML",
                                list: ["My Mr Clean", "Bootcamp Data Science", "My Open the Iris", "My First Scraper", "My Tu Verras", "My M and A", "My Convex Optimization", "My Linear Regression", "My MobApp Studio", "My Netflix"],
                            }
                        ],
                        bg: "bg-action-secondary",
                        hover: "hover:bg-hover-secondary",
                        colorButtonText: "text-black"
                    },
                    {
                        title: "Level 3 : CONFIRMED",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : 3rd AI/ML",
                                list: ["DocVisa for Lisa", "Classically Punk", "My Paypal", "Atari Games"],
                            },
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    }
                ]
            }
        },
        SoftwareE: {
            Hero: {
                title: 'Software Engeneering Program',
                review: 4.8,
                subTitle: "Introduction",
                description: 'Web4jobs by Qwasar Silicon Valley offers a competency-based Software Engineering certification program. It teaches the skills needed to build and engineer software and technical infrastructure, handling large data sets and advanced algorithms. The focus is on problem-solving and system design.',
                image: "/softwareE1.svg",
            },
            Aquirements: {
                title: 'Students Aquirements',
                subTitle: 'At the end of the training this is what students will have aquired!',
                list: [
                    "Advanced algorithms",
                    "Advanced data structures and databases",
                    "C++/OOP",
                    "Elixir",
                    "Network Programming",
                    "Sockets",
                    "Shell Virtual Machines",
                    "Javascript",
                    "RESTful APIs, software architecture",
                    "Structured problem solving and debugging",
                    "Extensive use of industry-standard tools such as Git, IDEs, and terminal commands"
                ],
                image: "/softwareE2.svg",
            },
            WhatToExpect: {
                title: 'What To Expect',
                subTitle: 'These are our ways of teaching our trainers!',
                cards: [
                    {
                        title: 'Remote training program',
                        description: "Students will gain experience building and developing software.By the time students complete the program they will earn an industry- standard certification in Full Stack Development from Qwasar.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'No tests, only projects',
                        description: "Each focus of this program will involve completing projects in teams as well individually to ensure students are learning and applying their knowledge.",
                        color: 'text-secondary-color',
                    },
                    {
                        title: 'Showcase projects to recruiters',
                        description: "Students will showcase approximately 5 to 20 projects representing thousands of lines of code for employers and interviews.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Interview training',
                        description: "As part of this program, students will complete technical interviews to prepare for job applications. Students will be guided on how to navigate  interviews including whiteboard coding.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: '20 hpw time commitment',
                        description: "Students will need to devote 20 hours a week minimum in order to fully learn the content necessary to pass the course and become a data scientist.",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Build apps and sites solo or in groups.',
                        description: "Complete end-to-end software projects that cover both front-end and back-end development. ",
                        color: 'text-tertiary-color',
                    },
                    {
                        title: 'Write 30K lines across 20 projects',
                        description: "Students will write about 30,000 lines of code, gaining confidence and experience in software design and implementation.",
                        color: 'text-tertiary-color',
                    },
                ]
            },
            Cources: {
                title: "Course Meeting Schedule",
                subtitle: "This is a schedule of our courses,",
                subTitle2: "Download the program",
                cards: [
                    {
                        title: "Level 1 : NOOB",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : Preseason",
                                list: ["Bootcamp Python", "My DS Babel", "My Select Query", "My NBA Game Analysis"],
                            }, {
                                subTitle: "Season : 1st AI/ML",
                                list: ["BootCamp C", "Print F"],
                            }
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    },
                    {
                        title: "Level  2 : APPRENTICE",
                        title2: "3 Months!",
                        color: "text-tertiary-color",
                        list: [
                            {
                                subTitle: "Season : 2nd Software Engeneering",
                                list: ["Domain Name", "Start my web server", "Configure my web address", "Secure Shell", "Start my web server", "Sending my first email", "Receiving my first email", "Configure IMAP"],
                            }
                        ],
                        bg: "bg-action-secondary",
                        hover: "hover:bg-hover-secondary",
                        colorButtonText: "text-black"
                    },
                    {
                        title: "Level 3 : CONFIRMED",
                        title2: "3 Months!",
                        color: "text-secondary-color",
                        list: [
                            {
                                subTitle: "Season : 3rd Software Engeneering",
                                list: ["Docker", "Operation Easy Website", "ELK and Moose", "The Chef and the Server", "Databases: Part 1", "Databases: The Sequel", "Databases: The Finale", "My Gitlab", "Green Eggs and Ham", "You Shall Not Pass"],
                            },
                        ],
                        bg: "bg-action-primary",
                        hover: "hover:bg-hover-primary",
                        colorButtonText: "text-primary-color"
                    }
                ]
            }
        },
    },
    WhoAreYou: {
        Student: {
            title: "Student",
            subTitle: "Lorem Ipsum Dolor Net Si!",
            title2: "Introduction",
            description1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title3: "Privileges",
            span1: "Students",
            description2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title4: "How A",
            span2: "Student",
            title5: "Can Contact Us?",
            description3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            image: "/student.svg",
        },
        Corporate: {
            title: "Corporate",
            subTitle: "Lorem Ipsum Dolor Net Si!",
            title2: "Introduction",
            description1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title3: "Privileges",
            span1: "Corporates",
            description2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title4: "How A",
            span2: "Corporate",
            title5: "Can Join Us?",
            description3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            image: "/corporate.svg",
        },
        PublicAdministration: {
            title: "Public Administration",
            subTitle: "Lorem Ipsum Dolor Net Si!",
            title2: "Introduction",
            description1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title3: "Privileges",
            span1: "Public Administration",
            description2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            title4: "How A",
            span2: "Public Administration",
            title5: "Can Contact Us?",
            description3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.",
            image: "/publicAdmin.svg",
        }
    },
    Footer: {
        logo: '/logo.svg',
        logo2: '/logo.svg',
        logo3: '/logo3.svg',
        title1: 'Pages & Links',
        list1: [
            {
                name: 'Home',
                link: '#home'
            },
            {
                name: 'About',
                link: '#about'
            },
            {
                name: 'Programs',
                link: '#programs'
            },
            {
                name: 'Blogs',
                link: 'https://www.yool.education/blog'
            },
        ],
        title2: 'Our Partners',
        list2: ['Noos', 'Cih', 'Capgemini', 'AttijariWafa Bank'],
        title3: 'Our Socials',
        list3: [
            {
                icon: '/facbook.svg',
                name: 'facebook@web4jobsmaroc',
                link: 'https://www.facebook.com/Web4jobsmaroc?mibextid=ZbWKwL'
            },
            {
                icon: '/instagram.svg',
                name: 'instagram@web4jobsmaroc',
                link: 'https://www.instagram.com/web4jobsmaroc/'
            },
            {
                icon: '/linkedin.svg',
                name: 'linkedin@web4jobs',
                link: 'https://www.linkedin.com/company/web4jobs/'
            },
        ],
        copyRight: 'All Right Reserved. 2024',
        iconCopyRight: '©',
    },
    SignUp: {
        title: "Sign Up",
        subTitle: "Please enter your informations!",
        input1: "First Name",
        placeholder1: "First Name...",
        input2: "Last Name",
        placeholder2: "Last Name...",
        input3: "Date of Birth",
        placeholder3: "Date of Birth...",
        input4: "Email Adress",
        placeholder4: "Type your email here...",
        input5: "Password",
        placeholder5: "Type your password here ...",
        input6: "Confirm Password",
        placeholder6: "Comfirme your password ...",
        check: "I read and agree to the ",
        link: "Privacy Policy " ,
        check2: "of Web4Jobs!",
        button: "Sign Up",
        text: "Already have an account?",
        link2: "Sign In",
    },
    SignIn: {
        title: "Sign In",
        subTitle: "Please enter your informations!",
        input1: "Email Adress",
        placeholder: "Type your email here...",
        input2: "Password",
        placeholder2: "Type your password here...",
        check: "Remember me",
        button: "Sign In",
        link: "Forgot Password?",
        button2: "Login with Google",
        button3: "Login with Apple",
        text: "Don't have an account?",
        link2: "Sign Up",
    },
    ForgotPassword1: {
        title: "Forgot Password?",
        subTitle: "Please enter your email to recover your password!",
        input1: "Email Adress",
        placeholder: "Type your email here...",
        button: "Recover Your Password",
    },
    ForgotPassword2: {
        title: "Email Verification ",
        subTitle: "Please enter the 6 digits code sent to your email!",
        text: "didn't receive the code?",
        link: "Resend Code",
        button: "Verify and Proceed",
    },
    ForgotPassword3: {
        title: "Forgot Password?",
        subTitle: "Please enter your new password!",
        input1: "New Password",
        placeholder: "Type your new password ...",
        input2: "Password Confirmation",
        placeholder2: "Retype your new password...",
        button: "Change Password",
    },
    Dashboard: {
        mycertificates: {
            title: "My Certificates",
            cards: [
                {
                    title: "Full Stack Development",
                    image: "/program1.svg",
                    level: "Entry Level : NOOB",
                    description: "This program focuses on front-end and back-end development, as well as strong fundamentals in data structures...",
                    link: "/certificates/fullStack"
                },
                {
                    title: "DevOps/Cloud Engineering",
                    image: "/cloud1.svg",
                    level: "Entry Level : NOOB",
                    description: "This program focuses on DevOps/Cloud Engineering principles, as well as strong fundamentals in data structures...",
                    link: "/certificates/cloud"
                },
                {
                    title: "Data Science",
                    image: "/data1.svg",
                    level: "Entry Level : NOOB",
                    description: "This program focuses on data science principles, as well as strong fundamentals in data structures...",
                    link: "/certificates/dataScience"
                },
                {
                    title: "Machine Learning",
                    image: "/machineL1.svg",
                    level: "Entry Level : NOOB",
                    description: "This program focuses on the fundamentals of machine learning and data engineering as well as strong fundamentals in data...",
                    link: "/certificates/machineLearning"
                },
                {
                    title: "Software Engineering",
                    image: "/softwareE1.svg",
                    level: "Entry Level : NOOB",
                    description: 'This program focuses on software engineering principles, as well as strong fundamentals in data structures...',
                    link: "/certificates/softwareEngineering"
                },
            ]
        },
        Settings: {
            title: "General Settings",
            cancelButton: "Cancel",
            saveButton: "Save Changes",
            changePasswordButton: "Change Password",
            title1: "Full Name",
            subTitle1: "Your first and last name",
            title2: "Avatar",
            subTitle2: "Your avatar will be used to identify you on the platform",
            button2: "Choose",
            description: "JPG, GIF or PNG, 1MB Max",
            title3: "Phone Number",
            subTitle3: "Your phone number will be used to contact you by the support team",
            title4: "Address",
            subTitle4: "Will help as to know your position to send you the certificate ",
            title5: "Email Contact",
            subTitle5: "Your principal Email will be used to contact you by the support team",
        }

    }

}
export default Text;