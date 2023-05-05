import { Component  as Testimonials } from "../_data/components/testimonials";

const data = [
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "items": [
            {
                "widget": "ImageTitleContentHeader",
                "props": {
                    "style": {
                        "backgroundColor": "#ebe9e8"
                    },
                    "title": "Digital Transformation Consulting",
                    "content": "We create commercial value through digital by supporting companies in their process of innovation and migration to digital technologies.",
                    "imgSrc": {
                        "src": "/img/alexandru-acea-GhwCef9VRr4-unsplash.png",
                        "width": 500,
                        "height": 500
                    }
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "header": {
            "widget": "TitleSeparatorContent",
            "props": {
                "style": {
                    "textAlign": "center",
                    "color": "rgb(18, 90, 121)",
                    "fontWeight": "700",
                    "paddingTop": "4em"
                },
                "title": "OUR 6 STEPS DEVELOPMENT PROCESS"
            }
        },
        "items": [
            {
                "widget": "NumberedTitleContentList",
                "props": {
                    "items": [
                        {
                            "title": "Design",
                            "content": "We design a prototype of your project, ensuring that it meets your needs and the requirements you have expressed."
                        },
                        {
                            "title": "Develop",
                            "content": "Our technical team implements the project according to the prototype designed."
                        },
                        {
                            "title": "Test",
                            "content": "Testing allows us to ensure that your product is working properly and that it is reliable, usable and user-friendly."
                        },
                        {
                            "title": "Review",
                            "content": "Final inspection of the software by the team involved before validation to move on to the delivery phase."
                        },
                        {
                            "title": "Deliver",
                            "content": "Once review is done, we publish the software to your company's website or app store for you to use."
                        },
                        {
                            "title": "Rinse & Repeat",
                            "content": "Benefit real feedback and real guidance on what requires your attention directly from your user to improve le app further."
                        }
                    ]
                }
            }
        ]
    },
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "2%"
        },
        "items": [
            {
                "widget": "ImageTitleContentSection",
                "props": {
                    "title": "A User Centered approach",
                    "content": "We focus on the users and their needs in each phase of our development process.",
                    "imgSrc": "/img/cytonn-photography-vWchRczcQwM-unsplash.jpg"
                }
            }
        ]
    },
    Testimonials
];

export default data;
