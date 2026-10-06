import { Children, useState } from "react";

export default function TextExpander( { 
    collapsedNumWords= 10, 
    expandButtonText= "Show More", 
    collapseButtonText = "Show Less", 
    buttonColor = "#1f09cd",
    expanded = false,
    className,
    children
}) {

    const [ isExpanded, setIsExpanded] = useState(expanded);

    const displayText = isExpanded ? children : children.split( " ").slice( 0, collapsedNumWords).join("") + "...";

    const buttonStyle= {
        background: "none",
        color: {buttonColor},
        padding: "6px 12px",
        fontSize: "14px" ,
    }

    const textStyle ={
        fontSize: "24px",
        fontFamily: "poppins",
        lineHeight: "1.4em",
    }


  return(
    <div className={className}>
        <p style={textStyle}>{displayText}</p>
        <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
            { isExpanded ? collapseButtonText : expandButtonText }
        </button>
    </div>
  );
}
