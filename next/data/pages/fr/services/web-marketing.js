import { Component  as Testimonials } from "../_data/components/testimonials";

const data = [
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "items": [
            {
                "widget": "ImageTitleContentHeader",
                "props": {
                    "style": {
                        "backgroundColor": "#ebe9e8"
                    },
                    "title": "Marketing sur les réseaux sociaux",
                    "content": "Gagnez en notoriété sur les plateformes populaires sur Internet en utilisant nos stratégies de marketing Web.",
                    "imgSrc": {
                        "src": "/img/alexandru-acea-GhwCef9VRr4-unsplash.png",
                        "width": 500,
                        "height": 500
                    }
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "header": {
            "widget": "TitleSeparatorContent",
            "props": {
                "style": {
                    "textAlign": "center",
                    "color": "rgb(18, 90, 121)",
                    "fontWeight": "700",
                    "paddingTop": "4em"
                },
                "title": "NOTRE PROCESSUS DE TRAVAIL EN 6 ÉTAPES"
            }
        },
        "items": [
            {
                "widget": "NumberedTitleContentList",
                "props": {
                    "items": [
                        {
                            "title": "Concevoir",
                            "content": "Nous concevons un prototype de votre projet en veillant à ce qu'il corresponde a vos besoin et aux  exigences que vous avez exprimés."
                        },
                        {
                            "title": "Developper",
                            "content": "Notre équipe technique met en œuvre le projet selon le prototype conçu."
                        },
                        {
                            "title": "Tester",
                            "content": "La phase de test nous permet de nous assurer que votre produit fonctionne correctement et qu'il est fiable, utilisable et conviviale."
                        },
                        {
                            "title": "Valider",
                            "content": "Inspection finale du logiciel par l'équipe impliquée avant validation pour passer à la phase de livraison."
                        },
                        {
                            "title": "Livrer",
                            "content": "Une fois la validation terminée, nous publions le logiciel sur le site Web ou la boutique d'applications de votre entreprise pour que vous puissiez l'utiliser."
                        },
                        {
                            "title": "Améliorer continuellement",
                            "content": "Bénéficiez d'un véritable retour d'information sur ce qui requiert votre attention directement de la part de votre utilisateur pour améliorer davantage l'application."
                        }
                    ]
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "items": [
            {
                "widget": "ImageTitleContentSection",
                "props": {
                    "title": "Une approche centrée sur l'utilisateur",
                    "content": "Nous nous concentrons sur les utilisateurs et leurs besoins à chaque étape de notre processus de développement.",
                    "imgSrc": "/img/cytonn-photography-vWchRczcQwM-unsplash.jpg"
                }
            }
        ]
    },
    Testimonials
];

export default data;
