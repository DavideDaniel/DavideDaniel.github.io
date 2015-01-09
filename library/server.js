/*
var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
  {
    path = request.url;
    console.log( request.url );
    // fs.readFile( "index.js", function ( err, data1 ) {
    fs.readFile( "davidsindex.html", function ( err, data1 )
      {
        var index = data1.toString()
        var books = [];
        var i = 0;
        var Book = function ( name, filename, url_name, author, image_link )
          {
            this.name = name;
            this.filename = filename;
            this.url_name = url_name;
            this.author = author;
            this.image = image_link;
            this.createHTML = function ( index )
            {
              fs.readFile("davidsindex.html", function ( err, data2 )
                {
                var text = data2.toString();
                var lines = text.replace( /\n/g, '<br>' )
                var newtext = '<p>' + lines + '</p>';
                var bookHtml = index.replace( "REPLACEME", newtext )
                console.log(link)
                console.log( "Hey" )
                response.end(data2)
                } )
            }
          }
          var Life_of_Chopin = new Book( "Life of Chopin", "Life_of_Chopin.txt", "/Life_of_Chopin", "Franz Liszt", "http://ecx.images-amazon.com/images/I/51-pei3JoUL._SY344_BO1,204,203,200_.jpg" );
          books.push(Life_of_Chopin );
          var Frankenstein = new Book("Frankenstein", "frankenstein.txt","/Frankenstein","Mary Wollstonecraft Shelley", "http://www.cardiffbooktalk.co.uk/sites/default/files/imagecache/cu_book_cover_large/book/cover/Frankenstein_large.jpg");
          books.push(Frankenstein);
          var Sherlock_Holmes = new Book("Sherlock Holmes", "sherlock_holmes.txt", "/Sherlock_Holmes", "Arthur Conan Doyle", "http://img1.imagesbn.com/p/9780062085740_p0_v1_s260x420.JPG");
          books.push(Sherlock_Holmes);
          var A_Tale_of_Two = new Book("A Tale of Two Cities","a_tale_of_two.txt","/A_Tale_of_Two","Charles Dickens", "http://park204.wikispaces.com/file/view/tale_of_two_cities_book.jpg/62106702/tale_of_two_cities_book.jpg");
          books.push(A_Tale_of_Two);
          var Harry_Potter = new Book("Harry Potter and the Sorcerer's Stone","HP1.txt","/Harry_Potter","JK Rowling","http://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg" );
          books.push(Harry_Potter);
          var Alice_in_Wonderland = new Book("Alice's Adventures in Wonderland", "Alice_Adventures.txt","/Alice_in_Wonderland","Lewis Carroll","http://www.blossombooks.co.uk/shop_image/product/11085.jpg" );
          books.push(Alice_in_Wonderland);



      if ( path === "/" || path === "/favicon.ico" )
        {
          fs.readFile("index.html", function ( err, data2 )
          {
            response.end(data2)
          })
        }

      for (var i = 0; i < books.length; i++)
          {
            if ( path === books[ i ].url_name )
               {
                books[ i ].createHTML( index )
               }

          };




})})})

server.listen( 2000 );
*/

var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{

  // if ( request.url === "/" || request.url === "/favicon.ico" )
  //   {
  //     fs.readFile("index.html", function ( err, data2 )
  //     {
  //       response.end(data2)
  //     })
  //   }

  path = request.url;
  console.log( request.url );
  // fs.readFile( "index.js", function ( err, data1 ) {
  fs.readFile( "davidsindex.html", function ( err, data1 )
  {
    var index = data1.toString()
    var books = [];
    var i = 0;
    var Book = function ( name, filename, url_name, author, image )
    {
      this.name = name;
      this.filename = filename;
      this.url_name = url_name;
      this.author = author;
      this.image = image;
      this.createHTML = function ( index ) {
        fs.readFile(filename, function ( err, data2 ) {

          var text = data2.toString();

          var lines = text.replace( /\n/g, '<br>' )
          var newtext = '<p>' + lines + '</p>';
          var bookHtml = index.replace( "REPLACEME", newtext )
          //    var link = '<a href=' + url_name + '>book</a>';
          //console.log(link)
          // var newHTML = bookHtml.replace( "@@", link )

          console.log( "Hey" )
          response.end(bookHtml)
        } )
      }
    }
    var Life_of_Chopin = new Book( "Life of Chopin", "Life_of_Chopin.txt", "/Life_of_Chopin", "Franz Liszt", "http://ecx.images-amazon.com/images/I/51-pei3JoUL._SY344_BO1,204,203,200_.jpg" );
    books.push(Life_of_Chopin );
    var Frankenstein = new Book("Frankenstein", "frankenstein.txt","/Frankenstein","Mary Wollstonecraft Shelley", "http://www.cardiffbooktalk.co.uk/sites/default/files/imagecache/cu_book_cover_large/book/cover/Frankenstein_large.jpg");
    books.push(Frankenstein);
    var Sherlock_Holmes = new Book("Sherlock Holmes", "sherlock_holmes.txt", "/Sherlock_Holmes", "Arthur Conan Doyle", "http://img1.imagesbn.com/p/9780062085740_p0_v1_s260x420.JPG");
    books.push(Sherlock_Holmes);
    var A_Tale_of_Two = new Book("A Tale of Two Cities","a_tale_of_two.txt","/A_Tale_of_Two","Charles Dickens", "http://park204.wikispaces.com/file/view/tale_of_two_cities_book.jpg/62106702/tale_of_two_cities_book...");
    books.push(A_Tale_of_Two);
    var Harry_Potter = new Book("Harry Potter and the Sorcerer's Stone","HP1.txt","/Harry_Potter","JK Rowling","http://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg" );
    books.push(Harry_Potter);
    var Alice_in_Wonderland = new Book("Alice's Adventures in Wonderland", "Alice_Adventures.txt","/Alice_in_Wonderland","Lewis Carroll","http://www.blossombooks.co.uk/shop_image/product/11085.jpg" );
    books.push(Alice_in_Wonderland);

    
    

    for (var i = 0; i < books.length; i++)
        {
    

    if ( path === "/" || path === "/favicon.ico" )
      {
          fs.readFile("index.html", function ( err, data3 )
        {
          response.end(data3)
        })
      }

      
          if ( path === books[i].url_name )
            {
              books[ i ].createHTML( index )
            }

          };




        })})

        server.listen( 80 );
