const data = [
    {
        "layout": "ScrollSpyLayout",
        "header":  {
            "widget": "AuthorContentTitle",
            "props": {
                "author": {
                 "name": "Auteur: CIA-Service ",
                    "readTime": "Temps de lecture: 5 min",
                    "publicationDate": "Dernière modification : 18 Avril 2023",
                    "imgSrc": {
                        "src": "/img/profile/logo.png",
                        "width": 290,
                        "height": 300
                    }
                },
                "content": {
                    "title": "Secrétariat Bureautique ",
                    "content": "Théorie && Pratique",
                    "backgroundImgSrc": "/img/secretariat.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "sideTitle": "Nos formations en cours",
            "treeNodes": [
                {
                    "id": "/blog/training/secretariat-bureautique",
                    "text": "Secrétariat Bureautique",
                    "title": "Secrétariat Bureautique",
                    "titleLink": "/blog/training/secretariat-bureautique"
                },
                {
                    "id": "/blog/training/design-graphique",
                    "text": "Design Graphique",
                    "title": "Secrétariat Bureautique",
                    "titleLink": "/blog/training/secretariat"
                },{
                    "id": "/blog/training/developpement-de-sites-web",
                    "text": "Développement de Sites web",
                    "titleLink": "/blog/training/secretariat-bureautique"
                    
                },{
                    "id": "/blog/training/developpement-mobile-android",
                    "text": "Développement Mobile Android",
                    "titleLink": "/blog/training/developpement-mobile-android"
                  
                },
                
            ]
        },
        "items": [
            {
                "widget": "MarkdownViewer",
                "props": {
                    "style": {
                        "padding": "2em 2%"
                    },
                   "markdownAsset": "fr/blog/training/secretariat-bureautique.md"
                }
            }
        ]
    }
];

export default data;
