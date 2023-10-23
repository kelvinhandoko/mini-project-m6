import { IconType } from "react-icons"
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineWhatsApp,
} from "react-icons/ai"

interface About {
    personalData: Record<string, string>
    education: Record<string, string>
    skill: Array<string>
}

export const aboutData: About = {
    personalData: {
        name: "kelvin handoko",
        address: "medan",
        "no telepon": "0811111111",
    },
    education: {
        sd: "SD swasta",
        smp: "SMP swasta",
        sma: "SMA swasta",
    },
    skill: ["typescript", "javascript", "node js", "postgresql", "prisma", "python"],
}

export interface Contact {
    type: string
    Icon: IconType
    url: string
}

export const contactData: Array<Contact> = [
    {
        type: "whatsapp",
        Icon: AiOutlineWhatsApp,
        url: "https://www.whatsapp.com",
    },
    {
        type: "instagram",
        Icon: AiOutlineInstagram,
        url: "https://www.instagram.com/kelvin_handoko/",
    },
    {
        type: "github",
        Icon: AiOutlineGithub,
        url: "https://github.com/kelvinhandoko",
    },
    {
        type: "linkedin",
        Icon: AiOutlineLinkedin,
        url: "https://www.linkedin.com/in/kelvin-handoko-b01260234/",
    },
]
