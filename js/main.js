var urlParams = new URLSearchParams(window.location.search);
var image = urlParams.get('image');
let baseUrl = 'apis/images/';

var Base64DecodeUrl = function(str) {
    str = str.slice(0, str.length + (str.length % 4));
    return str.replace(/-/g, '+').replace(/_/g, '/');
}

// if (!image) {
//     alert('Please reoperate again.');
// } else {
//     if (image.indexOf('base64') == -1) {
//     	var imageUri = baseUrl + image + '.jpg';
//         document.querySelector('#sky').setAttribute('src', imageUri);
//     } else {
//         document.querySelector('#sky').setAttribute('src', Base64DecodeUrl(image));
//     }
// }

    	var imageUri = 'https://i.imgur.com/05HFm8O.jpg';
        document.querySelector('#sky').setAttribute('src', imageUri);
