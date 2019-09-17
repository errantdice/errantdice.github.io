//var jQueryScript = document.createElement('script');  
//jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
//document.head.appendChild(jQueryScript);

//
//function loadScript(src, callback)
//{
//  var s,
//      r,
//      t;
//  r = false;
//  s = document.createElement('script');
//  s.type = 'text/javascript';
//  s.src = src;
//  s.onload = s.onreadystatechange = function() {
//    console.log( this.readyState ); //uncomment this line to see which ready states are called.
//    if ( !r && (!this.readyState || this.readyState == 'complete') )
//    {
//      r = true;
//      callback();
//    }
//  };
//  t = document.getElementsByTagName('script')[0];
//  t.parentNode.insertBefore(s, t);
//}

function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    var head = document.getElementsByTagName("head")[0]
    head.appendChild(script);
}

//function loadScript(src) {
//    return new Promise(function (resolve, reject) {
//        var s;
//        s = document.createElement('script');
//        s.src = src;
//        s.onload = resolve;
//        s.onerror = reject;
//        document.head.appendChild(s);
//    });
//}

function getQuery(query) {
    "use strict";
    var pairs, pair, folder, name, i;
    pairs = {};
    for (i = 0; i < query.length; i = i + 1) {
        pair = query[i].split("=");
        pairs.set(pair[0], pair[1]);
    }
    folder = "actors/";
    name = pairs.get("name");
    if (name !== null) {
        name = folder.concat(name);
        name = name.concat(".json");
    }
    
}