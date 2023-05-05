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
                    "title": "A propos de CIA",
                    "content": "Qui Nous Sommes",
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
                    "title": "Ce Que Nous Faisons",
                    "content": "Nous apportons à nos clients et partenaires des solutions pour résoudre efficacement les problèmes qu'ils rencontrent. Nous formons les jeunes et les professionnels à l'utilisation des nouvelles technologies et techniques qui peuvent les aider à atteindre leurs objectifs plus rapidement."
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
                    "title": "Notre Mission",
                    "content": "Notre mission est d'aider les entreprises et les particuliers à se développer et à atteindre leurs objectifs en leur fournissant des solutions innovantes et un service de haute qualité."
                }
            },
            {
                "widget": "SimpleTextTitleContent",
                "props": {
                    "style": {
                        "padding": "4%"
                    },
                    "title": "Pourquoi Nous Le Faisons",
                    "content": "Nous savons que les personnes, les entreprises et les communautés ont besoin de solutions qui répondent durablement aux problèmes auxquels elles sont confrontées. En fournissant de telles solutions, nous contribuons à apporter des changements positifs dans le monde."
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
                "title": "Notre équipe",
                "content": "Nous sommes une équipe internationale, diversifiée et inclusive de professionnels utilisant nos connaissances et notre savoir-faire pour produire des solutions de qualité irréprochable permettant répondre efficacement et durablement aux problèmes rencontrés par les entreprises et les particuliers."
            }
        },
        "items": [
            {
                "widget": "CardCircularImage",
                "props": {
                    "title": "Pierre TOUBE",
                    "content": "Directeur & Co-fondateur",
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
                    "content": "Responsable du Digital & Co-fondateur",
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
                    "content": "Responsable Marketing et Communication",
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
                    "content": "Responsable des Programmes de Formation",
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
                    "content": "Responsable Développement Produits",
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
