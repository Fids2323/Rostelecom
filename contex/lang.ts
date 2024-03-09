'use client'
import { AllowedLangs } from './../constants/lang';
import { createDomain } from 'effector';
//domain
const lang = createDomain();
//event
export const setLang = lang.createEvent<AllowedLangs>();
//store 
export const $lang = lang
	.createStore(AllowedLangs.RU)   //default lang 
	.on(setLang, (_, lang) => lang) //listen event, (store, change)