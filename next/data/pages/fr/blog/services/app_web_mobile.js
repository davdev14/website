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
                    "title": "Application Web et Mobile ",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "treeNodes": [
                {
                    "id": "item-1",
                    "text": "Application Web && Mobile",
                    "nodes": [
                        {
                            "id": "item-1-1",
                            "text": "Visibilité"
                        },
                        {
                            "id": "item-1-2",
                            "text": "Rentabilité"
                        },
                        {
                            "id": "item-1-3",
                            "text": "Facilité accessibilité"
                        },
                        {
                            "id": "item-1-4",
                            "text": "Un suivi plus rapide des clients"
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
                   "markdownAsset": "fr/blog/services/app_web_mobile.md"
                }
            }
        ]
    }
];

export default data;
