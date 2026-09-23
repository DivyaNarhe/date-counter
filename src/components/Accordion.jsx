import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
  
];


export default function Accordion() {
  const [ currOpen , setCurrOpen ] = useState(null);

  return <div className="accordion">
    { faqs.map((faq, index) => (
      <AccordionItem key={faq.title} num={index + 1} title={faq.title} text={faq.text} currOpen={currOpen} setCurrOpen={setCurrOpen} />
    )) }
  </div>;
}

function AccordionItem({ num, title, text, currOpen, setCurrOpen }) {
  const isOpen = currOpen === num;

  function handleToggle(){
    setCurrOpen( isOpen ? null : num );
  }

  return(
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? ` 0${num}`: num }</p>
      <h3 className="title">{title}</h3>
      <p className="icon">{ isOpen ? '-' : '+'}</p>
      <div className="content-box" style={ { display: isOpen ? 'block' : 'none' } }>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}