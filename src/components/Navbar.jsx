import React from "react";
import { useRef } from "react";
export default function Navbar() {
    const navbar = useRef();
    function myFunction() {
        let sticky = navbar.current.offsetTop;
        if (window.pageYOffset >= sticky) {
          navbar.current.classList.add("sticky")
        } else {
          navbar.current.classList.remove("sticky");
        }
      }
    window.onscroll = function () {
        myFunction();
    }
    return(
        <div ref={navbar} className="navbar">
            <h1>PokeDex</h1>
            <div>
                <a href="#">Home</a>
                <a href="#form">PokeDex</a>
            </div>
        </div>
    )
}
