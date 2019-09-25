/* eslint-env browser */
(function index() {
    'use strict';
    var index = "/data/index.json"
    
    var iQuery = {}
    window.iQuery = iQuery
    
    
    getJSON(index, function(){
        iQuery.index = this.response
    })
    
    function getJSON(url, fn){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.responseType = "json"
        xhr.onload = fn
        xhr.send()
    }
    
    
})()