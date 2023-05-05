import { Posts } from "./_data/posts/services";

const data = [
    {
        "layout": "GridLayout",
        "props": {
            "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3",
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
                "style": {
                    "textAlign": "center"
                },
                "separatorColor": "#7719aa",
                "title": "Des services IT adaptés à vos besoins",
                "content": "Nous proposons des services de conseil et d'assistance pour vos projets informatiques avec une planification technique sans frais cachés."
            }
        },
        "items": [
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Développement d'applications mobiles et Sites Web personnalisées",
                    "img":{
                        "src": "/img/walling-UP7JSnodG2M-unsplash.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Nous aidons à concevoir, créer et développer des idées pour les startups et les entreprises établies. Nous offrons toute l'expertise nécessaire pour construire des solutions qui répondent aux objectifs d'affaires et aux besoins des utilisateurs.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/mobile-web-custom-application-development"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Transformation numérique des entreprises",
                    "img":{
                        "src": "/img/ux-indonesia-8mikJ83LmSQ-unsplash.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Nous créons de la valeur commerciale par le numérique en accompagnant les entreprises dans leur processus d'innovation et de migration vers les technologies numériques.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/digital-transformation-consulting"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Conseil en solutions informatiques",
                    "img":{
                        "src": "/img/pexels-pavel-danilyuk-8761333.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Augmentez la productivité de votre entreprise à l'aide de solutions éprouvées prêtes à l'emploi. Nos experts trouvent la meilleure adéquation à vos besoins.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/it-solution-consulting"
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
                    "title": "SEO - Optimisation des moteurs de recherche",
                    "img":{
                        "src": "/img/internet-4463031_960_720.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Contactez notre service professionnel d'optimisation des moteurs de recherche pour vous aider à augmenter la visibilité et le trafic de votre site Web.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/search-engine-optimization"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Marketing sur les reseaux sociaux",
                    "img":{
                        "src": "/img/towfiqu-barbhuiya-nApaSgkzaxg-unsplash.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Gagnez en notoriété sur les plateformes populaires sur Internet en utilisant nos stratégies de marketing Web.",
                    "linkText": "En savoir plus",
                    "linkPath": "/services/web-marketing"
                }
            },
            {
                "widget": "CartTopImageTitleContent2",
                "props": {
                    "title": "Formations & Certifications pour les entreprises et les particuliers",
                    "img":{
                        "src": "/img/christina-wocintechchat-com-rg1y72ekw6o-unsplash.jpg",
                        "height": 300,
                        "width": 200
                    },
                    "content": "Nous proposons des formations en ligne et sur site dans des disciplines très demandées. Des formations a la demande sont également disponibles pour les entreprises qui ont besoin de maintenir le personnel compétitif.",
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
                "widget": "SideImageTitleContent",
                "props": {
                    "ctnStyle": {
                        "backgroundColor": "#423e3b",
                        "color": "#fff"
                    },
                    "backgroundImgSrc": "/img/pexels-mikhail-nilov-9242857.png",
                    "separatorColor": "#0078d4",
                    "title": "Formations pour les certifications",
                    "content": "Préparez-vous pour une carrière en demande!",
                    "linkText": "Découvrez nos programmes de formations pour les certifications",
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
                "title": "Nos offres de formation en cours",
                "content": "Des formations très demandées"
            }
        },
        "items": Posts
    }
];

export default data;
