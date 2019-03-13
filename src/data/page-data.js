export default {
    page: {
        pageId: 1,
        pageName: 'My first page',
        sections: [{
                sectionId: 0,
                sectionName: 'My first section',
                fields: [{
                        fieldType: 'paragraph-render',
                        fieldId: 1,
                        properties: {
                            text: 'This is my first paragraph'
                        }
                    },
                    {
                        fieldType: 'paragraph-render',
                        fieldId: 2,
                        properties: {
                            text: 'This is my second paragraph'
                        },
                    },
                    {
                        fieldType: 'pictureRender',
                        fieldId: 3,
                        properties: {
                            imageSource: '/assets/sample.jpg',
                            alternateText: 'My sample picture',
                            width: 200,
                            height: 200
                        },
                    },
                    {
                        fieldType: 'alert-render',
                        fieldId: 4,
                        properties: {
                            text: 'This is an error message',
                            alertType: 'alert-danger'
                        },
                    }
                ]
            },
            {
                sectionId: 2,
                sectionName: 'Another section',
                fields: [{
                    fieldType: 'paragraph-render',
                    fieldId: 1,
                    properties: {
                        text: 'This is my first paragraph'
                    }
                }]
            }
        ]
    }
};