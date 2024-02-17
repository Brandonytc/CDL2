var config = {
    style: 'mapbox://styles/brandonytc/clsk7d4h200fw01qx7erwg8tc',
    accessToken: 'pk.eyJ1IjoiYnJhbmRvbnl0YyIsImEiOiJjbHMxN3J2aDQwOG9hMmlxbmQ3MXNpcHdxIn0.g9OojKfOqGpIrEC1w7VDOA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Libraries and HDBs',
    subtitle: 'How accessible are they to the less privileged?',
    byline: 'By Brandon Yeo',
    footer: 'Source: data.gov.sg, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Libraries in Singapore',
            image: './images/img1.jpg',
            description: 'In Singapore, the National Library Board (NLB) provides library services and membership to all Singaporeans for free. Free reading resources are useful for the less privileged and lower income to access knowledge, improving social mobility. These are the public library locations in Singapore.',
            location: {
                center: [103.82092, 1.34470],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Price',
                     opacity: 0,
                     duration: 0
                 },
                 {
                    layer: 'Distance',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                 {
                    layer: 'Distance',
                    opacity: 1,
                    duration: 1000
                 }
                
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'These are public housing locations in Singapore.',
            image: './images/DistLegend.png',
            description: 'The lighter the color, the closer the distance to a public library.',
            location: {
                center: [103.82092, 1.34470],
                zoom: 10.6,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Distance',
                     opacity: 1,
                     duration: 1000
                 }
            ],
            onChapterExit: [

                 {
                    layer: 'Distance',
                    opacity: 0,
                    duration: 0
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'And these are the housing prices:',
            image: './images/PriceLegend.png',
            description: 'The brighter the circles, the higher the price (per sqm). One pattern that can be observed is how cheaper housing is located further away from their closest public library.',
            location: {
                center: [103.82092, 1.34470],
                zoom: 10.6,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Price',
                    opacity: 1,
                    duration: 1000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'Distance',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Lets take a closer look at Clementi library:',
            image: './images/library2.webp',
            description: 'The closer to the library, the more expensive housing tends to be. This potentially means that less priviledged children also have a harder time accessing public libraries which are further from them. A decentralised dispersion of libraries could be a more socially equitable strategy.',
            location: {
                center: [103.76435, 1.31487],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
