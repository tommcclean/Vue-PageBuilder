export default {
    page: {
        pageId: 1,
        pageName: 'My first page',
        sections: [{
                sectionId: 0,
                fields: [{
                        fieldType: 'heading',
                        fieldId: 1,
                        properties: {
                            text: 'Welcome to my page'
                        }
                    }, {
                        fieldType: 'paragraph',
                        fieldId: 1,
                        properties: {
                            text: 'This is my first paragraph'
                        }
                    },
                    {
                        fieldType: 'paragraph',
                        fieldId: 2,
                        properties: {
                            text: 'This is my second paragraph'
                        },
                    },
                    {
                        fieldType: 'square-image',
                        fieldId: 3,
                        properties: {
                            imageSource: '/assets/sample.jpg',
                            alternateText: 'My sample picture',
                            width: 200,
                            height: 200
                        },
                    }
                ]
            }
        ]
    }
};