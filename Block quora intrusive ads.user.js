// ==UserScript==
// @name         Block quora intrusive ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I call FXXK YOU to the ads with the same format as the answers.
// @author       Watashi
// @match        *://www.quora.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quora.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addElement
// @grant        GM_xmlhttpRequest
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @run-at document-end
// ==/UserScript==
/* eslint-env jquery */
(function() {
    'use strict';
    let fwords = [
        "Ad by",
        "Sponsored by",
        "Promoted by"
    ];

    let rm_qad = function(){
        fwords.forEach(function(value,index,array){
            let adstr1 = ":contains('"+ value +"')";
            $("div.q-text.qu-dynamicFontSize--small.qu-color--gray_light.qu-passColorToLinks" + adstr1).parents("div.q-box.qu-pt--medium").remove();

        });

        //$("div.q-box.qu-mt--n_small.qu-py--tiny").parents("div.q-box.qu-pt--medium").remove();

    }
    document.addEventListener('DOMNodeInserted', function() {
        rm_qad();
    }, false);
})();