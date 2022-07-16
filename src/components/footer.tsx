import React from "react"
import { ReactComponent as WhatsApp } from "../images/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../images/icons/instagram.svg";
import { ReactComponent as Telegram } from "../images/icons/telegram.svg";
import { ReactComponent as GitHub } from "../images/icons/github.svg";
import { ReactComponent as Discord } from "../images/icons/discord.svg";

export default function Footer() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto py-12">
                <div className="flex justify-center gap-4">
                    <a href="https://api.whatsapp.com/send?phone=0990413841">
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
            </div>
        </div>
    )
}