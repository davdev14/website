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
                "title": "Formations pour les particuliers et le personnel des entreprises",
                "content": "Bénéficiez des conseils de nos experts dans le choix de l'orientation que vous donnerez à votre carrière professionnelle."
            }
        },
        "items": [
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Formations pour les particuliers",
                    "bgColor": "#0078d4",
                    "imgSrc": "/img/christina-wocintechchat.jpg",
                    "content": "Boostez votre carrière professionnelle a l'aide de nos formations pratique tout en profitant des avantages de l'apprentissage en ligne interactif en direct.",
                    "linkText": "Découvrir nos formations",
                    "linkPath": "/trainings-and-certifications/trainings",
                    "items":[
                        "Formation en ligne ou sur site",
                        "Planing hebdomadaire",
                        "Approche par projet",
                        "Attestations de formation"
                    ]
                }
            },
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Formations pour les certifications",
                    "bgColor": "#d83b01",
                    "imgSrc": "/img/felipe-gregate-Ph2KD5qr7VQ-unsplash.jpg",
                    "content": "Avec le soutien de nos experts à travers des cours et des labs pratiques, nous préparons les organisations et les professionnels à obtenir des certifications.",
                    "linkText": "Parcourir nos offres",
                    "linkPath": "/trainings-and-certifications/certification-training",
                    "items":[
                        "Formation en ligne ou sur site",
                        "Horaires flexible",
                        "Séances de travail dédiées",
                        "Évaluations hebdomadaires"
                    ]
                }
            },
            {
                "widget": "CartTopImageTitleContent",
                "props": {
                    "title": "Formations pour les organisations",
                    "bgColor": "#7719aa",
                    "imgSrc": "/img/christina-wocintechchat-com-rg1y72ekw6o-unsplash.jpg",
                    "content": "Optez pour le format de formation qui convient le mieux a votre équipe et définissez un context de la formation selon vos besoin.",
                    "linkText": "Demander une cotation",
                    "linkPath": "/trainings-and-certifications/certification-training",
                    "items":[
                        "Formation en ligne ou sur site",
                        "Horaires flexible",
                        "Séances de travail dédiées",
                        "Attestations de formation"
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
                    "title": "Formation des praticiens",
                    "content": "Un programme de formation complet d'un an qui vous prépare à l'emploi...",
                    "linkText": "Découvrez tous les programmes de formation des praticiens",
                    //"linkUrl": "/trainings-and-certifications/certification-training",
                    "linkUrl": "#",
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
                "content": "Des formations très demandées..."
            }
        },
        "items": Posts
    }
];

export default data;
