var body = document.querySelector( "body" );


var h1 = body.appendChild( document.createElement( "h1" ) );
h1.innerText = "Top 10 songs"; 


var songs = ["All About That Bass Meghan Trainor", "Take Me To Church Hozier", "Shake It Off Taylor Swift", "Animals Maroon 5", "The Heart Wants What It Wants Selena Gomez", "I'm Not The Only One Sam Smith", "Uptown Funk Mark Ronson Featuring Bruno Mars", 
"Habits (Stay High) Tove Lo", "Love Me Harder Ariana Grande The Weeknd"];

var ul = body.appendChild( document.createElement( "ul" ) );
    songs.forEach(function(song){
        var li = ul.appendChild(document.createElement("li"));
        li.innerText=song;
    })



