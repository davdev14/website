const data = [
    {
        "layout": "ScrollSpyLayout",
        "header":  {
            "widget": "AuthorContentTitle",
            "props": {
                "author": {
                    "name": "Author: M. Jhon Corl Balken",
                    "readTime": "Read time: 2 min",
                    "publicationDate": "Last modified: July 9, 2021",
                    "imgSrc": {
                        "src": "/img/profile/1.jpg",
                        "width": 897,
                        "height": 918
                    }
                },
                "content": {
                    "title": "SEO : Search Engine optimization",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "treeNodes": [
                {
                    "id": "item-1",
                    "text": "SEO : Search Engine optimization",
                },
                {
                    "id": "item-2",
                    "text": "LE SEO OFFRE :",
                    "nodes": [
                        {
                            "id": "item-2-1",
                            "text": "La visibilité"
                        },
                        {
                            "id": "item-2-2",
                            "text": "Un trafic mieux ciblé"
                        },
                        {
                            "id": "item-2-3",
                            "text": "Une meilleur taux de conversion"
                        }
                    ]
                }
            ]
        },
        "items": [
            {
                "widget": "MarkdownViewer",
                "props": {
                    "style": {
                        "padding": "2em 2%"
                    },
                   "markdownAsset": "fr/blog/services/seo.md"
                }
            }
        ]
    }
];

export default data;
