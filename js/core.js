/* eslint-env browser */

function init() { // eslint-disable-line no-unused-vars
    'use strict'
    
    // Set the page title
    document.getElementById("title").innerHTML = "Errant Dice"
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/data/core.json")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.responseType = "json"
//    xhr.open("GET", "/data/core.json", false)
    xhr.onload = function() {
        // TODO Refactor into subfunction
//        var head = document.head
        var node = document.getElementById("core")
        var json = this.response
//        var json = JSON.parse(this.response)
        
        // CSS CDNs
        // Bootstrap CSS
        var link = document.createElement("link") 
        link.id = json.css.src.bootstrap.id
        link.rel = json.css.rel
        link.crossOrigin = json.css.crossorigin
        link.href = json.css.src.bootstrap.cdn.href
        link.integrity = json.css.src.bootstrap.cdn.integrity
        node.after(link)
        node = node.nextSibling
//        head.appendChild(link)
        
        // JS CDNs
        var scr
        // JQuery 
        scr = document.createElement("script")
        scr.id = json.js.src.jquery.id
        scr.type = json.js.type
        scr.crossOrigin = json.js.crossorigin
        scr.src = json.js.src.jquery.cdn.url
        scr.integrity = json.js.src.jquery.cdn.integrity
        node.after(scr)
        node = node.nextSibling
//        head.appendChild(scr)
        
        // Popper
        scr = document.createElement("script")
        scr.id = json.js.src.popper.id
        scr.type = json.js.type
        scr.crossOrigin = json.js.crossorigin
        scr.src = json.js.src.popper.cdn.url
        scr.integrity = json.js.src.popper.cdn.integrity
        node.after(scr)
        node = node.nextSibling
//        head.appendChild(scr)
        
        // Bootstrap
        scr = document.createElement("script")
        scr.id = json.js.src.bootstrap.id
        scr.type = json.js.type
        scr.crossOrigin = json.js.crossorigin
        scr.src = json.js.src.bootstrap.cdn.url
        scr.integrity = json.js.src.bootstrap.cdn.integrity
        node.after(scr)
        node = node.nextSibling
//        head.appendChild(scr)
    }
    xhr.send()
}

function defer(method) { // eslint-disable-line no-unused-vars
    try {
        method()
    } catch(e) {
        setTimeout(function() {defer(method)}, 0)
    }
}

function requires(method) { // eslint-disable-line no-unused-vars
    if (window.jQuery) {
        method()
    } else {
        throw new Error('jQuery is not Loaded')
    }
}

function header() { // eslint-disable-line no-unused-vars
    $.get("header.html", function(data) { // eslint-disable-line no-undef
        $("#header").replaceWith(data); // eslint-disable-line no-undef
    })
}

function footer() { // eslint-disable-line no-unused-vars
    $.get("footer.html", function(data) { // eslint-disable-line no-undef
        $("#footer").replaceWith(data); // eslint-disable-line no-undef
    })
}