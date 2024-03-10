
import Link from "next/link";
import React from "react";

const Logo = () => {
	return <Link href='/'>
		<img className="logo__img" src="/img/logo.svg" alt="Logo" />
	</Link>;
};

export default Logo;
