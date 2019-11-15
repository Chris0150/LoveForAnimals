import image1 from '../images/users/1.jpg'
import image2 from '../images/users/2.jpg'
import image3 from '../images/users/3.jpg'
import image4 from '../images/users/4.jpg'
import image5 from '../images/users/5.jpg'
import image6 from '../images/users/6.jpg'
// import image7 from '../images/users/7.jpg'
// import image8 from '../images/users/8.jpg'
// import image9 from '../images/users/9.jpg'
// import image10 from '../images/users/10.jpg'
// import image11 from '../images/users/11.jpg'
// import image12 from '../images/users/12.jpg'
// import image13 from '../images/users/13.jpg'
// import image14 from '../images/users/14.jpg'
// import image15 from '../images/users/15.jpg'
// import image16 from '../images/users/16.jpg'
// import image17 from '../images/users/17.jpg'
// import image18 from '../images/users/18.jpg'
// import image19 from '../images/users/19.jpg'
// import image20 from '../images/users/20.jpg'
// import image21 from '../images/users/21.jpg'
// import image22 from '../images/users/22.jpg'
// import image23 from '../images/users/23.jpg'
// import image24 from '../images/users/24.jpg'
// import image25 from '../images/users/25.jpg'
// import image26 from '../images/users/26.jpg'
// import image27 from '../images/users/27.jpg'
// import image28 from '../images/users/28.jpg'
// import image29 from '../images/users/29.jpg'
// import image30 from '../images/users/30.jpg'
// import image31 from '../images/users/31.jpg'
// import image32 from '../images/users/32.jpg'

const tileData = [
    {
        img: image1,
        title: 'Mila',
        location: 'Barcelona',
        cols: 2,
        type: "redMarker"
    }, {
        img: image2,
        title: 'Kuna',
        location: 'Barcelona',
        type: "redMarker"
    }, {
        img: image3,
        title: 'Tera',
        location: 'Barcelona',
        type: "greenMarker"
    }, {
        img: image4,
        title: 'Sura',
        location: 'Barcelona',
        type: "redMarker"
    }, {
        img: image5,
        title: 'Mico',
        location: 'Barcelona',
        type: "orangeMarker"
    }, {
        img: image6,
        title: 'Teca',
        location: 'Barcelona',
        type: "redMarker"
    }
    // , {
    //     img: image7,
    //     title: 'Pilo',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    // }, {
    //     img: image8,
    //     title: 'Mota',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    // }, {
    //     img: image9,
    //     title: 'Puca',
    //     location: 'Barcelona', 
    //     cols: 2,
    //     type: "redMarker"
    // }, {
    //     img: image10,
    //     title: 'Sena',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image11,
    //     title: 'Fido',
    //     location: 'Barcelona',
    //     type: "orangeMarker"
    // }, {
    //     img: image12,
    //     title: 'Lupa',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }
    //  , {
    //      img: image13,
    //      title: 'Cola',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    //  }, {
    //     img: image14,
    //     title: 'Gula',
    //     location: 'Barcelona', 
    //     cols: 2,
    //     type: "redMarker"
    // }, {
    //     img: image15,
    //     title: 'Zola',
    //     location: 'Barcelona',
    //     type: "orangeMarker"
    // }, {
    //     img: image16,
    //     title: 'Lera',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image17,
    //     title: 'Musa',
    //     location: 'Barcelona',
    //     type: "orangeMarker",
    //     cols: 2
    // }, {
    //     img: image18,
    //     title: 'Mico',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image19,
    //     title: 'Taco',
    //     location: 'Barcelona',
    //     type: "orangeMarker"
    // }, {
    //     img: image20,
    //     title: 'Mila',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    // }, {
    //     img: image21,
    //     title: 'Kuna',
    //     location: 'Barcelona',
    //     type: "greenMarker",
    //     cols: 2
    // }, {
    //     img: image22,
    //     title: 'Mico',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // },{
    //     img: image23,
    //     title: 'Tera',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image24,
    //     title: 'Sura',
    //     location: 'Barcelona',
    //     type: "greenMarker",
    //     cols: 2
    // },{
    //     img: image25,
    //     title: 'Kuna',
    //     location: 'Barcelona',
    //     cols: 2,
    //     type: "orangeMarker"
    // } , {
    //     img: image26,
    //     title: 'Teca',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    // }, {
    //     img: image27,
    //     title: 'Pilo',
    //     location: 'Barcelona',
    //     type: "orangeMarker"
    // }, {
    //     img: image28,
    //     title: 'Mota',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image29,
    //     title: 'Puca',
    //     location: 'Barcelona',
    //     type: "greenMarker"
    // }, {
    //     img: image30,
    //     title: 'Sena',
    //     location: 'Barcelona', 
    //     cols: 2,
    //     type: "orangeMarker"
    // }, {
    //     img: image31,
    //     title: 'Fido',
    //     location: 'Barcelona',
    //     type: "redMarker"
    // }, {
    //     img: image32,
    //     title: 'Lupa',
    //     location: 'Barcelona',
    //     cols: 2,
    //     type: "Encotrada"
    // }
];

export default tileData;