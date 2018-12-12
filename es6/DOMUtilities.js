export const DOMUtilities = {
    getSiblings: function(elTarget) {
        return [...elTarget.parentElement.children].filter( selfTarget => selfTarget != elTarget );
    },

    setFocusStyle: function(elTarget, className) {
        const siblings = this.getSiblings(elTarget);
        this.removeClass(siblings, className);
        this.addClass(elTarget, className);
    },

    addClass: function(elTarget, className) {
        if( Object.keys(elTarget).length > 1 ) {
            elTarget.forEach( el => {
                el.classList.add(className);
            });
        } else {
            elTarget.classList.add(className);
        }
    },

    removeClass: function(elTarget, className) {
        if( Object.keys(elTarget).length > 1 ) {
            elTarget.forEach( el => {
                el.classList.remove(className);
            });
        } else {
            elTarget.classList.remove(className);
        }
    },

    attachClick: function(characterTarget, action) {
        characterTarget.addEventListener('click', (e) => {
            console.log('click added!');
            if (action) action(characterTarget, e);
        }, false);
    },

    detachClick: function(characterTarget, action) {
        characterTarget.removeEventListener('click', (e) => {
            console.log('click removed!');
            if (action) action(characterTarget, e);
        });
    }
};