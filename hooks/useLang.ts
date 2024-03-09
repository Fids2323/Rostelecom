'use client'
import { useUnit } from "effector-react";
import { $lang } from "@/contex/lang";
import translationsJson from '../public/translations/translations.json'

export const useLang = () => {
	const lang = useUnit($lang) //get store
	const translations = translationsJson
	return {lang, translations}
};

