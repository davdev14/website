const data = [
    {
        "layout": "PaddedLayout",
        "props": {
            "padding": "0%"
        },
        "items": [
            {
                "widget": "SideImageTitleContent",
                "props": {
                    "style": {
                        "backgroundColor": "#cfd0cf"
                    },
                    "ctnStyle": {
                        "backgroundColor": "#423e3b",
                        "color": "#fff"
                    },
                    "title": "Contact CIA",
                    "content": "We are here for you",
                    "backgroundImgSrc": "/img/contact-us.jpg"
                }
            }
        ]
    },
    {
        "layout": "TwoSidesContentLayout",
        "props": {
            "padding": "0%",
            "title": "How can we help ?"
        },
        "items": [
            {
                "widget": "ContactForm",
                "props": {
                    "style": {
                        "backgroundColor": "#cfd0cf"
                    },
                    "actionUrl": "#",
                    "title": "I need to speak with sales",
                    "description": "Select your product area - you will be prompted to provide your contact details and a message, then a sales representative will contact you.",
                    "selectCategoryLabel": "Please select a category",
                    "selectCategoryHelpText": "Whic category are you contacting us about.",
                    "selectCategoryOptions": [
                        {
                            "value": 1,
                            "label": "Feedback, inquiries and concerns"
                        },
                        {
                            "value": 2,
                            "label": "Special offer request"
                        },
                        {
                            "value": 3,
                            "label": "Partnership program"
                        },
                        {
                            "value": 10,
                            "label": "Other..."
                        }
                    ],
                    "businessEmailLabel": "Business Email",
                    "businessEmailHelpText": "Our sale representative will contact you using this email.",
                    "MessageLabel": "Message",
                    "MessageHelpText": "Please tell us a bit about more.",
                    "receivePromoCheckboxLabel": "Message",
                    "receivePromoCheckboxHelpText": "Please tell us a bit about more.",
                    "submitButtonLabel": "Message"
                }
            },
            {
                "widget": "ContactItems",
                "props": {
                    "style": {
                        "backgroundColor": "#cfd0cf"
                    },
                    "items": [
                        {
                            "title": "Phone Numbers",
                            "items": [
                                "Tel: (+237) 693 48 06 50",
                                "Tel: (+237) 681 79 57 16",
                                "Email: contact@cia-service.com"
                            ]
                        },
                        {
                            "title": "Headquarters",
                            "items": [
                                "Cameroon,",
                                "Yaounde,",
                                "Anguissa (Shell Anguissa)"
                            ]
                        }
                    ]
                }
            }
        ]
    }
];

export default data;
