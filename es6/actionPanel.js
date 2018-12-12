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
    DOMUtilities.setFocusStyle(attackBtn, 'focus');
});

passBtn.addEventListener('click', ev => {
    DOMUtilities.setFocusStyle(passBtn, 'focus');
});

cureBtn.addEventListener('click', ev => {
    DOMUtilities.setFocusStyle(cureBtn, 'focus');
});

export const actionPanel = {
    removeOptionFocus: function() {
        DOMUtilities.removeClass(actionsDOM, 'focus');
    },
    setData: function(data) {
        this.removeOptionFocus();
        panelName.textContent = data.name;
        panelLife.textContent = data.life;
        panelMagic.textContent = data.magic;
    },
    clickAction: function(elTarget) {
        DOMUtilities.setFocusStyle(elTarget, 'focus');
    }
};