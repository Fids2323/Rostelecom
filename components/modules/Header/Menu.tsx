import Logo from "@/components/elements/logo/Logo";
import { AllowedLangs } from "@/constants/lang";
import { setLang } from "@/contex/lang";
import { $menuIsOpen, closeMenu } from "@/contex/modals";
import { useLang } from "@/hooks/useLang";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";
import { AnimatePresence, motion } from "framer-motion"
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

	const clothLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translations[lang].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[lang].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translations[lang].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[lang].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: translations[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: translations[lang].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translations[lang].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

	return (
		<nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
			<div className="container nav-menu__container">
				<div className={`nav-menu__logo ${menuIsOpen ? 'open' : 'close'}`}>
					<Logo/>
				</div>	
			<img className={`nav-menu__bg ${menuIsOpen ? 'open' : 'close'}`} src="/img/menu-bg.png" alt="menu background" />
			<button className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : 'close'}`} onClick={handleCloseMenu}>
			</button>
			<div className={`nav-menu__lang ${menuIsOpen ? 'open' : 'close'}`}>
				<button className={`btn-reset nav-menu__lang__btn ${lang === "ru" ? 'lang-active' : ''}`} onClick={handleSwitchLangToRu}>
					RU
				</button>
				<button className={`btn-reset nav-menu__lang__btn ${lang === "en" ? 'lang-active' : ''}`} onClick={handleSwitchLangToEn}>
					EN
					</button>
					<ul className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : 'close'}`}>
						<li className="nav-menu__list__item">
							<button className="btn-reset nav-menu__list__item__btn">
								{translations[lang].main_menu.catalog}
							</button>
							<AnimatePresence>
								{showCatalogList && (
									<motion.ul
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="list-reset nav-menu__accordion"
									>
										<li className="nav-menu__accordion__item">
											
										</li>
									</motion.ul>
								)}
							</AnimatePresence>
						</li>
						<li className="nav-menu__list__item"></li>
						<li className="nav-menu__list__item"></li>
					</ul>
			</div>
			</div>
		</nav>
	);
};

export default Menu;
