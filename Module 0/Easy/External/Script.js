'use strict';

const knop= documentFragment.getElementById('begroeting');
knop.addEventListener('click', () => {
    knop.textContent = knop.textContent === 'Hallo' ? 'Tot ziens!' : 'Hallo!';
});