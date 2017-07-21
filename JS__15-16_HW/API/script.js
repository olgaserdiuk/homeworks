$(document).ready(function(){




$('.myButton').click( function() {
	event.preventDefault();
    var inpVal = $(".myInput").val();
    getImages(inpVal);
}
);
	

function getImages(par){
    var apiKey = 'x9bdfu4j2jxdrrdfdq75usp6';
    $.ajax(
    {
        type:'GET',
        url:"https://api.gettyimages.com/v3/search/images/creative?phrase=" + par,
         beforeSend: function (request)
            {
                request.setRequestHeader("Api-Key", apiKey);
            }})
    .done(function(data){
        console.log("Success with data")
        $("#output").html('');
        // for(var i = 0;i<data.images.length;i++)
        for(var i = 0;i<9;i++)
        {
           $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
        }
    })
    .fail(function(data){
        alert(JSON.stringify(data,2))
    });
}


});

