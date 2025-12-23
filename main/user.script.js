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
// ==/UserScript==
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Selecciona el elemento donde quieres añadir el botón
        const sidebar = document.querySelector('.issuable-sidebar-header div[data-testid="sidebar-todo"]');
        if (sidebar) {
            // Crea el botón
            const button = document.createElement('button');
            button.classList.add('btn', 'hide-collapsed', 'btn-default', 'btn-sm', 'gl-button');
            const span = document.createElement('span');
            span.innerText = 'Tarea en Odoo';
            button.appendChild(span);
            // Añade un evento al botón para enviar la URL
            button.addEventListener('click', function() {
                const url = window.location.href;
                window.open("https://odoo.factorlibre.com/gitlab/go-to-task?incoming_url=" + url);
            });
            // Añade el botón al sidebar
            sidebar.appendChild(button);
        }
    });
})();
