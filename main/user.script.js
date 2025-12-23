// ==UserScript==
// @name         Etiquetas Gitlab
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Script para etiquetar las tareas de forma más cómoda
// @author       Jesús Lorenzo
// @match        https://git.factorlibre.com/*/issues/*
// @icon         https://odoo.factorlibre.com/web_favicon/favicon
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @resource css https://raw.githubusercontent.com/FlJesusLorenzo/tamper-monkey-imputar/refs/heads/main/main/css/style.css
// @updateURL    https://github.com/FlJesusLorenzo/tamper-monkey-labels/raw/refs/heads/main/main/script.user.js
// @downloadURL  https://github.com/FlJesusLorenzo/tamper-monkey-labels/raw/refs/heads/main/main/script.user.js
// ==/UserScript==
(function() {
    'use strict';

    function createPopup(){}
    function startObserver() {
        observer.observe(document.body, { childList: true, subtree: true });
        if (this) this.removeEventListener("click", startObserver);
    }

    observer = new MutationObserver(() => {
        const new_issue_labels = document.querySelector("[data-test-id='sidebar-labels']")
        const new_div = document.getElementById('label_config')

        if (!(new_issue_labels || issue_labels) || new_div) return;
        if (new_issue_labels) createPopup()
        else if (issue_labels) createPopup()
        
    })
    startObserver()
})();
