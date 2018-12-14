import { DOMUtilities } from './DOMUtilities.js';

const actionsPanel = document.getElementById('actions-panel');
const actionsDOM = actionsPanel.querySelectorAll('.action');

const attackBtn = actionsPanel.querySelector('#attack');
const passBtn = actionsPanel.querySelector('#pass');
const cureBtn = actionsPanel.querySelector('#cure');

const panelName = actionsPanel.querySelector('#panel-name');
const panelLife = actionsPanel.querySelector('#panel-life');
const panelMagic = actionsPanel.querySelector('#panel-magic');

attackBtn.addEventListener('click', ev => {
    const heroes = document.querySelectorAll('.hero');
    const enemies = document.querySelectorAll('.enemy');

    DOMUtilities.setFocusStyle(attackBtn, 'focus');
    heroes.forEach(hero => {
        DOMUtilities.detachClick(hero, DOMUtilities.removeClass(hero, 'enabled'));
    });
    enemies.forEach(enemy => {
        DOMUtilities.attachClick(enemy, DOMUtilities.addClass(enemy, 'enabled'));
    });
});

passBtn.addEventListener('click', ev => {
    DOMUtilities.setFocusStyle(passBtn, 'focus');
});

cureBtn.addEventListener('click', ev => {
    DOMUtilities.setFocusStyle(cureBtn, 'focus');
});

export const actionPanel = {
    showPanel: function() {
        DOMUtilities.addClass(actionsPanel, 'd-flex');
    },
    hidePanel: function() {
        DOMUtilities.removeClass(actionsPanel, 'd-flex');
    },
    removeOptionFocus: function() {
        DOMUtilities.removeClass(actionsDOM, 'focus');
    },
    setData: function(data) {
        DOMUtilities.addClass(actionsPanel, 'd-flex');
        this.removeOptionFocus();
        panelName.textContent = data.name;
        panelLife.textContent = data.life;
        panelMagic.textContent = data.magic;
    },
    clickAction: function(elTarget) {
        DOMUtilities.setFocusStyle(elTarget, 'focus');
    }
};