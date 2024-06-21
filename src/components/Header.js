import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <button className="logo__btn" data-text="Awesome">
                    <span className="logo__text">&nbsp;React Shop&nbsp;</span>
                    <span aria-hidden="true" className="logo__text-hover">
                        &nbsp;React&nbsp;Shop&nbsp;
                    </span>
                </button>
            </Link>
            <ul className="d-flex align-center">
                <li
                    onClick={props.onClickCart}
                    className="mr-30 cu-p d-flex align-center"
                >
                    <img
                        width={18}
                        height={18}
                        src="./img/cart.svg"
                        alt="Корзина"
                    />
                    <span>{totalPrice} руб.</span>
                </li>
                <Link to="/favorites">
                    <li className="mr-30 cu-p d-flex align-center">
                        <img
                            className="d-flex align-center"
                            width={18}
                            height={18}
                            src="./img/heart.svg"
                            alt="Закладки"
                        />
                        <p>Закладки</p>
                    </li>
                </Link>
                <Link to="/orders">
                    <li className="d-flex align-center">
                        <img
                            width={18}
                            height={18}
                            src="./img/user.svg"
                            alt="Пользователь"
                        />
                        <p>Профиль</p>
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
