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
            "props":{
                "style": {
                    "textAlign": "center"
                },
                "title": "Featured posts",
                "content": "Submit your project or support an existing one."
            }
        },
        "cls": "row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3",
        "style": "padding: ; text-align: center",
        "items": [
            {
                "widget": "CartTitleContentImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit",
                    "imgSrc": "/img/blog-img-1.jpg",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "linkText": "Excepteur sint occaecat cupidatat non proident",
                    "linkPath": "/blog/blog-article-1"
                }
            },
            {
                "widget": "CartTitleContentImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit",
                    "imgSrc":"/img/christina-wocintechchat.jpg",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "linkText": "Excepteur sint occaecat cupidatat non proident",
                    "linkPath": "/blog/blog-article-1"
                }
            },
            {
                "widget": "CartTitleContentImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit",
                    "imgSrc": "/img/christina-wocintechchat-com-rg1y72ekw6o-unsplash.jpg",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "linkText": "Excepteur sint occaecat cupidatat non proident",
                    "linkPath": "/blog/blog-article-1"
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
                "title": "High in demand trainings",
                "content": "Learn how IT inovations can improve your busines"
            }
        },
        "items": [
            {
                "widget": "CartTitleImage",
                "props": {
                    "title": "Les profiles IT les plus demandés en 2022",
                    "imgSrc": "/img/surface-yn9rw5s0PNE-unsplash.jpg",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
                    "titleLink": "/blog/les-profils-it-les-plus-demandees-en-2022"
                }
            },
            {
                "widget": "CartTitleImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit.",
                    "imgSrc": "/img/stat.jpg",
                    "titleLink": "/blog/blog-article-2",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                }
            },
            {
                "widget": "CartTitleImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit.",
                    "imgSrc": "/img/daria-nepriakhina.jpg",
                    "titleLink": "/blog/blog-article-3",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                }
            },
            {
                "widget": "CartTitleImage",
                "props": {
                    "title": "Lorem ipsum dolor sit amet adipiscing elit.",
                    "imgSrc": "/img/ben.jpg",
                    "titleLink": "/blog/blog-article-3",
                    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
                }
            }
        ]
    }
];

export default data;
