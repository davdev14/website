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
                    "title": "Solution IT",
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
                },
                {
                    "id": "item-2",
                    "text": "Les développeurs web et mobile"
                },
                {
                    "id": "item-3",
                    "text": "le Webmaster"
                },
                {
                    "id": "item-3",
                    "text": "Le Data Analyst "
                },
                {
                    "id": "item-3",
                    "text": "Le SEO manager"
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
                   "markdownAsset": "fr/blog/services/it_solution.md"
                }
            }
        ]
    }
];

export default data;
