import { IAccordionProps } from "@/types/modules";
import React, { useState } from "react";

const Accordion = ({ children, title, titleClass, rotateIconClass } : IAccordionProps) => {
	const [expanded, setExpanded] = useState(false)
	
	const toggleAccordion = () => setExpanded(!expanded)
	return <div>Accordion</div>;
};

export default Accordion;
