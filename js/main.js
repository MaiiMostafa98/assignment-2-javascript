
//Objects
/*
var fp = {
    elgomla : "Do not take life too seriously. You will not get out alive.",
    writer : "*Elbert Hubbard*",
}

var sp = {
    elgomla : "You miss 100% of the shots you don't take.",
    writer : "*Wayne Gretzy*",
}

var thp = {
    elgomla : "The best revenge is massive success.",
    writer : "*Frank Sinatra*",
}

var fp = {
    elgomla : "It's not what happens to you, but how you react to it that matters.",
    writer : "*Epictetus*",
}
*/





function printData()
{
        
     
     var json =
    [
      {
       elgomla : "Do not take life too seriously. You will not get out alive.",
       writer : "*Elbert Hubbard*",
      },
  
      {
       elgomla : "You miss 100% of the shots you don't take.",
       writer : "*Wayne Gretzy*",
      },
  
      {
        elgomla : "The best revenge is massive success.",
        writer : "*Frank Sinatra*",
      },
  
      {
        elgomla : "It's not what happens to you, but how you react to it that matters.",
        writer : "*Epictetus*",
      },
  
    ]

    var num = Math.floor(Math.random() * json.length);

     document.getElementById("paragraph1").innerHTML=(json[num].elgomla);
     document.getElementById("paragraph2").innerHTML=(json[num].writer);
  
}