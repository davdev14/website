const data = [
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "0%"
        },
        "items": [
            {
                "widget": "SideImageTitleContent",
                "props": {
                    "style": {
                        "backgroundColor": "#cfd0cf"
                    },
                    "ctnStyle": {
                        "backgroundColor": "#423e3b",
                        "color": "#fff"
                    },
                    "title": "About CIA",
                    "content": "Who we are",
                    "backgroundImgSrc": "/img/pexels-rebrand-cities-1367272.jpg"
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "4%",
            "style": {
                "textAlign": "center",
                "backgroundColor": "#f1efed"
            }
        },
        "items": [
            {
                "widget": "SimpleTextTitleContent",
                "props": {
                    "style": {
                        "backgroundColor": "#ffffff",
                        "padding": "4%"
                    },
                    "title": "What We Do",
                    "content": "We provide our customers and partners with solutions to effectively solve the problems they encounter. We train young people and professionals in the use of new technologies and techniques that can help them achieve their goals more quickly."
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-1 row-cols-lg-2",
            "style": {
                "textAlign": "center",
                "padding": "0 4% 4%",
                "backgroundColor": "#f1efed"
            },
            "baseStyle": {
                "backgroundColor": "#f1efed ",
                "padding": "0 4%"
            }
        },
        "items": [
            {
                "widget": "SimpleTextTitleContent",
                "props": {
                    "style": {
                        "textAlign": "center",
                        "padding": "4%"
                    },
                    "title": "Our Mission",
                    "content": "Our mission is to help businesses and individuals grow and achieve their goals by providing them innovative solutions and a high-quality service."
                }
            },
            {
                "widget": "SimpleTextTitleContent",
                "props": {
                    "style": {
                        "padding": "4%"
                    },
                    "title": "Why We Do It",
                    "content": "We know that people, businesses and communities need solutions that sustainably address the issues they face. By providing such solutions, we are helping to bring about positive change in the world."
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "style": {
                "padding": "0 4%"
            },
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-3",
            "baseStyle": {
                "backgroundColor": "#ffffff" ,
                "padding":  "4% 4% 0;"
            } 
        },
        "header": {
            "widget": "SimpleTextTitleContent",
            "props":{
                "style": {
                    "textAlign": "center",
                    "padding": "4% 4% 2%",
                    "maxWidth": "50em",
                    "margin": "auto"
                },
                "title": "Our Lead Team",
                "content": "We are an international, diverse and inclusive team of professionals using our knowledge and know-how to produce impeccable quality solutions to respond effectively and sustainably to the problems encountered by businesses and individuals."
            }
        },
        "items": [
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Pierre TOUBE",
                    "content": "CEO & Co-funder",
                    "imgSrc": {
                        "src": "/img/team/tpp001.jpg",
                        "width": 500,
                        "height": 500
                    }
                }
            },
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Jores SIMO",
                    "content": "Head of Digital & Co-funder",
                    "imgSrc": {
                        "src": "/img/profile/1.jpg",
                        "width": 500,
                        "height": 375
                    }
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-3",
            "ctnStyle": {
                "padding": "0 4% 4%"
            },
            "baseStyle": "background-color: #ffffff; padding: 0 4%;"
        },
        "items": [
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Eldora Tremblay",
                    "content": "Head of Marketing and Communications",
                    "imgSrc": {
                        "src": "/img/profile/2.jpg",
                        "width": 500,
                        "height": 375
                    }
                }
            },
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Lamido Diego",
                    "content": "Head of Training Programs",
                    "imgSrc": {
                        "src": "/img/profile/3.jpg",
                        "width": 500,
                        "height": 375
                    }
                }
            },
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Zangou Iyon",
                    "content": "Head of Products Development",
                    "imgSrc": {
                        "src": "/img/profile/4.jpg",
                        "width": 500,
                        "height": 375
                    }
                }
            }
        ]
    }
];

export default data;
