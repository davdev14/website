const data = [
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "0%"
        },
        "items": [
            {
                "widget": "ImageViewer",
                "props": {
                    "style": {
                        "backgroundColor": "#ebe9e8;"
                    },
                    "src": "/img/header3266x960.jpg",
                    "width": 3266,
                    "height": 960
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-1 row-cols-lg-2",
            "ctnStyle": {
                "padding": "5em 3%"
            }
        },
        "items": [
            {
                "widget": "TitleCards",
                "props": {
                    "title": "Creating Unforgettable",
                    "centerTitle": "Digital Experiences.",
                    "cardsContent": [
                        {
                            "title": "<a href='#'>World Class Technology Solutions</a>",
                            "content": "Developing and implementing the newest and most efficient technology is how we assist in growing your business in the digital space.",
                            "img": {
                                "src": "/img/app-design.jpg",
                                "width": 500,
                                "height": 375
                            }
                        },
                        {
                            "title": "<a href='#'>Advice & Quotes <span>for Business and Individuals</span></a>",
                            "content": "Benefit from all the expertise of our specialists and obtain quotes for the realization of your projects.",
                            "img": {
                                "src": "/img/stat.jpg",
                                "width": 500,
                                "height": 375
                            }
                        },
                        {
                            "title": "<a href='#'>Trainings and Certifications</a>",
                            "content": "Customizable training offers and international certification for individuals and company staff.",
                            "img": {
                                "src": "/img/christina-wocintechchat-com-rg1y72ekw6o-unsplash.jpg",
                                "width": 500,
                                "height": 375
                            }
                        }
                    ]
                }
            },
            {
                "widget": "ConsultationScheduleForm",
                "props": {
                    "postFormUrl": "api/forms/app-consultation-schedule/data",
                    "countryListUrl": "api/list/country"
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3",
            "style": {
                "textAlign": "center"
            },
            "ctnStyle": {
                "padding": "5%",
                "backgroundColor": "#ebe9e8"
            }
        },
        "items": [
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Optimize your business for success",
                    "img": {
                        "src": "/img/evangeline-shaw.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Learn how to optimize your business for success. Don't rely on old metrics or outdated systems, let your own data serve you the results you desire...",
                    "linkText": "Learn more",
                    "linkPath": "/services/search-engine-optimization"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Innovative and creative solutions for your business",
                    "img": {
                        "src": "/img/daria-nepriakhina.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "We bring your ideas to life by designing and developing effective solutions that have a positive impact on your business.",
                    "linkText": "Learn more",
                    "linkPath": "/services/web-marketing"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Experts at your service: successful planning",
                    "img": {
                        "src": "/img/scott-graham.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Our staff are experts in bringing businesses the best digital solutions for increased growth and revenues...",
                    "linkText": "Learn more",
                    "linkPath": "/trainings-and-certifications"
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "0%"
        },
        "items": [
            {
                "widget": "TitleContentWithBackgroundImg",
                "style": {
                    "backgroundColor": "#ebe9e8"
                },
                "props": {
                    "title": "About us",
                    "content": "We take pride in providing highest-quality services for our clients allowing them to reach their goals. Our mission is to assist businesses in succeeding by providing the best digital solutions in a timely fashion for sustainable growth and increased revenues.",
                    "linkRef": "#",
                    "linkText": "Learn more about our us...",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        ]
    }
];

export default data;
