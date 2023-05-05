const data = [
    {
        "layout": "ScrollSpyLayout",
        "header":  {
            "widget": "AuthorContentTitle",
            "props": {
                "author": {
                    "name": "Author: M. Jhon Corl Balken",
                    "readTime": "Read time: 2 min",
                    "publicationDate": "Last modified: October 20, 2022",
                    "imgSrc": {
                        "src": "/img/profile/1.jpg",
                        "width": 897,
                        "height": 918
                    }
                },
                "content": {
                    "title": "Formation",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "treeNodes": [
                {
                    "id": "item-1",
                    "text": "Formation les plus demandé en IT",
                    "nodes": [
                        {
                            "id": "item-1-1",
                            "text": "Les développeurs web et mobile"
                        },
                        {
                            "id": "item-1-2",
                            "text": "le Webmaster"
                        },
                        {
                            "id": "item-1-3",
                            "text": "Le Data Analyst "
                        },
                        {
                            "id": "item-1-4",
                            "text": "Le SEO manager"
                        }
                    ]
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
                   "markdownAsset": "fr/blog/services/training.md"
                }
            }
        ]
    }
];

export default data;
