const Component = {
    "layout": "ColumnLayout",
    "props": {
        "style": {
            "padding": "1em"
        }
    },
    "header": {
        "widget": "CategorizedTitle",
        "props": {
            "title": "Ce que disent nos clients",
            "category": "Testimonials"
        }
    },
    "items": [
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Design#1",
                "company": "Mosens",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            }
        },
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Develop#",
                "company": "Dadick",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            }
        },
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Test#3",
                "company": "Commen Angel",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            }
        },
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Deliver#4",
                "company": "Drill",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            }
        },
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Rinse#",
                "company": "Engin",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            }
        },
        {
            "widget": "ReviewCard",
            "props": {
                "title": "Repeat#6",
                "company": "Doolu",
                "starts": {
                    "src": "/img/starts5-xs.png",
                    "width": 100,
                    "height": 20
                },
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            }
        }
    ]
};


export { Component }