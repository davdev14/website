const data = [
    {
        "layout": "ScrollSpyLayout",
        "header":  {
            "widget": "AuthorContentTitle",
            "props": {
                "author": {
                    "name": "Auteur: CIA-Service ",
                    "readTime": "Temps de lecture : 5 min",
                    "publicationDate": "Dernière modification : 18 Avril 2023",
                    "imgSrc": {
                        "src": "/img/profile/logo.png",
                        "width": 290,
                        "height": 300
                    }
                },
                "content": {
                    "title": "Développement Mobile Android",
                    "content": "Théorie && Pratique",
                    "backgroundImgSrc": "/img/android_mobile.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
             "sideTitle": "Nos formations en cours",
            "treeNodes": [
                {
                    "id": "/blog/training/developpement-mobile-android",
                    "text": "Développement Mobile Android",
                    
                  
                },
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
                   "markdownAsset": "fr/blog/training/developpement-mobile-android.md"
                }
            }
        ]
    }
];

export default data;
