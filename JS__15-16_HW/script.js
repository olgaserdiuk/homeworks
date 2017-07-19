/*var apiKey = 'x9bdfu4j2jxdrrdfdq75usp6';

$.ajax(
    {
        type:'GET',
        url:"https://api.gettyimages.com/v3/search/images/creative?phrase=kitties",
         beforeSend: function (request)
            {
                request.setRequestHeader("Api-Key", apiKey);
            }})
    .done(function(data){
        console.log("Success with data")
        for(var i = 0;i<data.images.length;i++)
        {
           $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
        }
    })
    .fail(function(data){
        alert(JSON.stringify(data,2))
    });*/

     /*на клик кнопки, сделать получение value из инпута
     и значение этого value просто подставить в тот URL*/