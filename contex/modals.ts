import { createDomain } from "effector";
//domain
const modals = createDomain();
//events
export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();
//store with events
export const $menuIsOpen = modals.createStore(false)
	.on(openMenu, () => true)
	.on(closeMenu, () => false)