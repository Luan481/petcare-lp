import type React from "react"

interface MediaProps {
    icon: React.ReactElement
}

export default function SocialMedia({icon}: MediaProps) {

    return (
        <a href="" className="border-2 p-1.5 rounded-full border-[#ccc]">
            {icon}
        </a>
    )
}