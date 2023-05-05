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
                    "title": "Web Marketing",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "treeNodes": [
                {
                    "id": "item-1",
                    "text": "Qu’elle est l'intérêt du Web Marketing pour notre entreprise",
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
                   "markdownAsset": "fr/blog/services/web_marketing.md"
                }
            }
        ]
    }
];

export default data;
