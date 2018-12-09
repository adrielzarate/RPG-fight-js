'use strict';

export let heroTemplate = (hero) => `<div id="${hero.id}" class="hero">
    <div class="character-picture"></div>
    <div>
        <div class="name">${hero.name}</div>
        <div class="d-flex">
            <div class="d-flex">
                <div><3</div> <!-- life -->
                <div class="life">${hero.life}</div>
            </div>
            <div class="d-flex">
                <div>*</div> <!-- magic -->
                <div class="magic">${hero.magic}</div>
            </div>
        </div>
    </div>
</div>
`;