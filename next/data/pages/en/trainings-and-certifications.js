import { Posts } from "./_data/posts/trainings";

const data = [
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3",
            "style": {
                "textAlign": "center"
            },
            "ctnStyle": {
                "backgroundColor": "#ebe9e8",
                "padding": "5%"
            }
        },
        "header": {
            "widget": "TitleSeparatorContent",
            "props": {
                "style": {
                    "textAlign": "center"
                },
                "separatorColor": "#7719aa",
                "ctnStyle": "text-align: center;",
                "title": "Training for individuals and teams",
                "content": "Benefit from the guidance of our experts in choosing the orientation you give you a professional career"
            }
        },
        "items": [
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Trainings For Individuals",
                    "bgColor": "#0078d4",
                    "imgSrc": "/img/christina-wocintechchat.jpg",
                    "content": "Boost your professional career with our hands-on training while enjoying the benefits of interactive live e-learning",
                    "linkText": "Discover Trainings",
                    "linkPath": "/trainings-and-certifications/trainings",
                    "items":[
                        "Online / On site training",
                        "Weekly schedule",
                        "Project based approach",
                        "Training certificate"
                    ]
                }
            },
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Certification Trainings",
                    "bgColor": "#d83b01",
                    "imgSrc": "/img/felipe-gregate-Ph2KD5qr7VQ-unsplash.jpg",
                    "content": "Through courses and practical labs, we prepare organizations and professionals to obtain certifications.",
                    "linkText": "Browse Trainings",
                    "linkPath": "/trainings-and-certifications/certification-training",
                    "items":[
                        "Online / On site training",
                        "Flexible schedule",
                        "Dedicated work sessions",
                        "Weekly evaluation"
                    ]
                }
            },
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Team / Corporate Training",
                    "bgColor": "#7719aa",
                    "imgSrc": "/img/christina-wocintechchat-com-rg1y72ekw6o-unsplash.jpg",
                    "content": "Choose the training format that best suits your team and define a training context according to your needs.",
                    "linkText": "Request Training",
                    "linkPath": "/trainings-and-certifications/training-service",
                    "items":[
                        "Online / On site training",
                        "Flexible schedule",
                        "Dedicated work sessions",
                        "Training certificate"
                    ]
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
                "widget": "SideImageTitleContent",
                "props": {
                    "ctnStyle": {
                        "backgroundColor": "#423e3b",
                        "color": "#fff"
                    },
                    "backgroundImgSrc": "/img/pexels-mikhail-nilov-9242857.png",
                    "separatorColor": "#0078d4",
                    "title": "Practitioner training",
                    "content": "A comprehensive one-year training program that make you job ready...",
                    "linkText": "Explore all practitioner training programs",
                    "linkUrl": "/trainings-and-certifications/certification-training"
                }
            }
        ]
    },
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4",
            "style": {
                "textAlign": "center"
            },
            "ctnStyle": {
                "padding": "5%"
            }
        },
        "header": {
            "widget": "TitleSeparatorContent",
            "props": {
                "separatorColor": "#0078d4",
                "title": "High in demand trainings",
                "content": "Learn how IT inovations can improve your busines"
            }
        },
        "items": Posts
    }
];

export default data;
