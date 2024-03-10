'use client'
import Logo from "@/components/elements/logo/Logo";
import { useLang } from "@/hooks/useLang";
import Link from "next/link";
import Menu from "./Menu";
import { openMenu } from "@/contex/modals";
import { addOverflowHiddenFromBody } from "@/lib/utils/common";

const Header = () => {
	const { lang, translations } = useLang();
	
	const handleOpenMenu = () => { 
		addOverflowHiddenFromBody()
		openMenu()
	}

	return (
		<header className="header">
			<div className="container header__container">
				<button className="btn-reset header__burger" onClick={handleOpenMenu}>
					{translations[lang].header.menu_btn}
				</button>
				<Menu/>
				<div className="header__logo"><Logo/></div>
				<ul className="header__links list-reset">
					<li className="header__links__item">
						<button className="btn-reset header__links__item__btn header__links__item__btn--search"></button>
					</li>
					<li className="header__links__item">
						<Link className="header__links__item__btn header__links__item__btn--favorites" href='/favorites' />
					</li>
					<li className="header__links__item">
						<Link className="header__links__item__btn header__links__item__btn--compare" href='/comparison'/>
					</li>
					<li className="header__links__item">
						<Link className="header__links__item__btn header__links__item__btn--cart" href='/cart'/>
					</li>
					<li className="header__links__item">
						<Link className="header__links__item__btn header__links__item__btn--profile" href='/profile'/>
					</li>
				</ul>
			</div>
		</header>
	)
};

export default Header;
