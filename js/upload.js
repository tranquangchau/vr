var feedback = function(res) {
    if (res.success === true) {
		/*
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
            'Image : ' + '<br><input class="image-url" value=\"' + get_link + '\"/>' + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
		*/	
		var id =res.data.id;
		window.location.replace("./view.html?image="+id);
    }
};

new Imgur({
    clientid: 'fee6630ece001ff', //You can change this ClientID
    callback: feedback
});