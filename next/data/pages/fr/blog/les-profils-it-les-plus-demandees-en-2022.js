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
                    "title": "Les profiles IT les plus demandés en 2022",
                    "content": "Niveau debutant.",
                    "backgroundImgSrc": "/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg"
                }
            }
        },
        "props": {
            "stickyTop": 100,
            "treeNodes": [
                {
                    "id": "item-1",
                    "text": "Introduction",
                    "nodes": [
                        {
                            "id": "item-1-1",
                            "text": "Core concepts"
                        },
                        {
                            "id": "item-1-2",
                            "text": "Basic example",
                            "nodes": [
                                {
                                    "id": "item-1-2-1",
                                    "text": "How it works"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "item-2",
                    "text": "Guide lines"
                },
                {
                    "id": "item-3",
                    "text": "Related resources",
                    "nodes": [
                        {
                            "id": "item-3-1",
                            "text": "Advanced use of concepts"
                        },
                        {
                            "id": "item-3-2",
                            "text": "Professional feedback"
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
                   "markdownAsset": "fr/blog/les-profils-it-les-plus-demandees-en-2022.md"
                }
            }
        ]
    }
];

export default data;
