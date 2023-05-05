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
                    "title": "Nous créons des Experiences",
                    "centerTitle": "Digitales Inoubliables.",
                    "cardsContent": [
                        {
                            "title": "<a href='#'>Des Solutions Technologiques <span>de Classe Mondiale</span></a>",
                            "content": "Mettre en œuvre les solutions technologiques les plus récentes et les plus efficaces est la façon dont nous vous aidons à développer votre entreprise dans le monde numérique.",
                            "img": {
                                "src": "/img/app-design.jpg",
                                "width": 500,
                                "height": 375
                            }
                        },
                        {
                            "title": "<a href='#'>Conseils & Devis <span>pour Entreprises et Particuliers</span></a>",
                            "content": "Bénéficiez de toute l'expertise de nos spécialistes et obtenez des devis pour la réalisation de vos projets.",
                            "img": {
                                "src": "/img/stat.jpg",
                                "width": 500,
                                "height": 375
                            }
                        },
                        {
                            "title": "<a href='#'>Formations et Certifications</a>",
                            "content": "Des offres de formation personnalisables et des certifications internationales pour les particuliers et le personnel des entreprises.",
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
                    "title": "Optimisez votre entreprise pour une réussite assurée",
                    "img":{
                        "src": "/img/evangeline-shaw.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Apprenez à optimiser votre entreprise pour réussir. Ne vous fiez pas à d'anciennes métriques ou à des systèmes obsolètes, laissez vos propres données vous servir les résultats que vous désirez...",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/search-engine-optimization"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Des solutions innovantes et créatives pour votre entreprise",
                    "img":{
                        "src": "/img/daria-nepriakhina.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Nous donnons vie à vos idées en concevant et en développant des solutions efficaces qui ont un impact positif sur votre entreprise.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/web-marketing"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Les experts à votre service: La planification qui assure votre succès",
                    "img":{
                        "src": "/img/scott-graham.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Notre personnel est expert pour apporter aux entreprises les meilleures solutions numériques pour une croissance et des revenus accrus...",
                    "linkText": "En savoir plus",
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
                    "title": "À propos de nous",
                    "content": "Nous sommes fiers de fournir à nos clients des services de la plus haute qualité leur permettant d'atteindre leurs objectifs. Notre mission est d'aider les entreprises à réussir en fournissant les meilleures solutions numériques en temps opportun pour une croissance durable et des revenus accrus.",
                    "linkRef": "/about",
                    "linkText": "En savoir plus sur nous...",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        ]
    }
];

export default data;
