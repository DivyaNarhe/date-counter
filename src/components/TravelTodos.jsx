import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
    {
        id: 1, description: "Passport" , quantity: 2 , packed: false 
    },
    {
        id: 2, description: "Jacket" , quantity: 1 , packed: false 
    },
    {
        id: 3, description: "Charger" , quantity: 1 , packed: false 
    },
];


export default function TravelTodos(){
    const [items, setItems] = useState(initialItems);

    return (
        <div className="travel-todos">
            <Logo />
            <Form items={items} setItems={setItems} />
            <PackingList items={items} setItems={setItems} />
            <Stats items={items} />
        </div>
    );
}