import React from "react";
import { ReactComponent as WhatsApp } from "../images/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../images/icons/instagram.svg";
import { ReactComponent as Telegram } from "../images/icons/telegram.svg";
import { ReactComponent as GitHub } from "../images/icons/github.svg";
import { ReactComponent as Discord } from "../images/icons/discord.svg";

export default function Header() {
    return (
        <div className="flex flex-row gap-6 justify-center lg:justify-start">
            <a className="lg:pl-10 xl:pl-16" href="https://api.whatsapp.com/send?phone=0990413841">
                <WhatsApp />
            </a>
            <a href="https://www.instagram.com/gucciscan">
                <Instagram />
            </a>
            <a href="http://t.me/gucciscan">
                <Telegram />
            </a>
            <a href="https://github.com/KorolovDenys">
                <GitHub />
            </a>
            <a href="https://discord.gg/z4EVcgGm">
                <Discord />
            </a>
        </div>
    )
}