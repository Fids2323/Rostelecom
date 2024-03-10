import { AllowedLangs } from "@/constants/lang";
import { setLang } from "@/contex/lang";
import { $menuIsOpen, closeMenu } from "@/contex/modals";
import { useLang } from "@/hooks/useLang";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { useUnit } from "effector-react";
import React, { useState } from "react";

const Menu = () => {
	const [showCatalogList, setShowCatalogList] = useState(false)
	const [showBuyersList, setShowBuyersList] = useState(false)
	const [showContactsList, setShowContactsList] = useState(false)
	const menuIsOpen = useUnit($menuIsOpen)
	const { lang, translations } = useLang();

	const handleCloseMenu = () => {
		removeOverflowHiddenFromBody();
		closeMenu();
	}
//Switch Languages
	const handleSwitchLang = (lang:string) => { 
		setLang(lang as AllowedLangs)
		localStorage.setItem('lang', JSON.stringify(lang));
	}

	const handleSwitchLangToRu = () => handleSwitchLang('ru')
	const handleSwitchLangToEn = () => handleSwitchLang('en')

	return (
		<nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
			<button className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : 'close'}`} onClick={handleCloseMenu}>
			</button>
			<div className={`nav-menu__lang ${menuIsOpen ? 'open' : 'close'}`}>
				<button className={`btn-reset nav-menu__lang__btn ${lang === "ru" ? 'lang-active' : ''}`} onClick={handleSwitchLangToRu}>
					RU
				</button>
				<button className={`btn-reset nav-menu__lang__btn ${lang === "en" ? 'lang-active' : ''}`} onClick={handleSwitchLangToEn}>
					EN
				</button>
			</div>
			<h1>Menu</h1>
		</nav>
	);
};

export default Menu;
