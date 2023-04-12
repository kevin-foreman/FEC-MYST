import React from "react";
import "/src/styles/SteamDeck.css"

function SteamDeck(){
    return(
        <div className="sdContainer">
            <div className="sdHeader">
                STEAM DECK COMPATABILITY
            </div>
            <div className="sdBanner">
                <div className="imgcontainer">
                    <svg className="svg" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path className="path" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
                            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z"
                        ></path>
                    </svg>
                    <span>Playable</span>
                </div>
                <div>
                    <a className="learnMore" href="">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default SteamDeck;
