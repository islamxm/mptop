import { dropdown } from './modules/dropdown.js';
import * as flsFuncs from './modules/functions.js';
import { mobmenu } from './modules/mobmenu.js';
import { modal } from './modules/modal.js';
import { sl } from './modules/select.js';



document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    // dropdown()
    sl();
    mobmenu();
    modal();
})
