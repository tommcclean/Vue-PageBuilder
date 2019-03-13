export default {
    sections: [{
        id: 0,
        name: 'section name',
        fields: [{
                type: 'paragraph',
                id: 1,
                properties: {
                    text: 'This is my first paragraph'
                }
            },
            {
                type: 'paragraph',
                id: 2,
                properties: {
                    text: 'This is my second paragraph'
                },
            },
            {
                type: 'pictureRender',
                id: 3,
                properties: {
                    imageSource: '/assets/sample.jpg',
                    alternateText: 'My sample picture'
                },
            },
        ]
    }]
};