import React from "react";
import blogData from "../data/blog";

function Header (prop) {
    return (
        <header>
            <h1>{blogData.name}</h1>
        </header>
    )
}
    


export default Header;