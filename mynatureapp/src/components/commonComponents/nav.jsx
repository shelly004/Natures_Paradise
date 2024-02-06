import React from "react";

// import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <div class="item1">
            <div class="header" >
                <img src='/assets/Logo/logoTreeBig.jpg' alt="Tree logo" />
                <h2>Nature's Paradise<br />
                    <span>Make your Home a Greener Place !!</span></h2>
                <p><a href="/login">Login</a></p>
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <li><a href="/Home">HOME</a></li>
                        <li><div class="dropdown">
                            <a href="products.html"><button class="dropbtn">PRODUCTS</button></a>
                            <div class="dropdown-content">
                                <a href="/Bonsai">Bonsai</a>
                                <a href="#">Flower saplings</a>
                                <a href="#">Fruit saplings</a>
                                <a href="#">Organic manure</a>
                                <a href="#">Gardening tools</a>
                                <a href="#">Vegetable saplings</a>
                                <a href="#">Fruit seeds</a>
                                <a href="#">Vegetable seeds</a>
                                <a href="#">Special Offers</a>
                            </div>
                        </div></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">FEEDBACK</a></li>
                    </ul>
                </nav>
            </div>



        </div>
    )
}