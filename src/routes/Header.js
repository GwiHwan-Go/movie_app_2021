import React from "react";
import "./Header.css";


function Header(){
    return (
    <>
    <div class="logo">
        <a href="https://MyfirstWebsite.gwihwango.repl.co">
            <i class="fab fa-youtube"></i>
        </a>
        <span class="title">Youtube</span>
    </div>
    
    <div class="icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-v"></i>
    </div>
    </>
    )
}

export default Header;