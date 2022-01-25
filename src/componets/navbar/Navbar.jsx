import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css"

export default function Navbar({ basket }) { // { basket: [] } 
    const [isOpen, setIsOpen] = useState(false);

    const onModal = () => {
        // code
        setIsOpen(!isOpen)
    }

    return (
        <div className="container">
            Navbar
            <a href="#pizza">pizza</a>
            <Link to="/"> Main </Link>
            <Link to="/contacts"> Contacts </Link>
            <button onClick={onModal}>
                Корзина
                <span> {basket.length} </span>
            </button>


            <div onClick={onModal} className={css.modalWrapper + " " + (isOpen ? css.opened : "")}>
                <div onClick={(e) => e.stopPropagation()} className={css.modal}>
                    <button onClick={onModal}>CLose</button>
                    <div>
                        <h1>
                            {basket.length} товаров на
                            {basket.reduce((sum, pizza) => sum + pizza.price, 0)}
                            сомов
                        </h1>
                    </div>
                    <hr />
                    <div>
                        {
                            basket.map((pizza) => <div>
                                {pizza.name}
                                <div>{pizza.price}</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
