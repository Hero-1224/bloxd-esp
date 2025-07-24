// ==UserScript==
// @name         Bloxd ESP (Ore + Player)
// @match        *://bloxd.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const observer = new MutationObserver(() => {
        const players = document.querySelectorAll('[id*="Player"]');
        const ores = document.querySelectorAll('[id*="Ore"]');
        players.forEach(p => p.style.outline = '2px solid red');
        ores.forEach(o => o.style.outline = '2px solid lime');
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
