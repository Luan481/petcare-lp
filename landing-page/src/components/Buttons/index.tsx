interface buttonProps{
    text: string
    bgColor: string
    textColor: string
    fontSize?: string
    link?: string
    isBorder?: boolean
    border?: string
}
export default function Button({border, link, bgColor, text, textColor, fontSize, isBorder}:buttonProps) {
    return (
    <a 
    href={link}
    className={`hidden md:block ${isBorder ? border : ""} ${bgColor} ${textColor} ${fontSize} text-sm px-6 py-2.5 rounded-full shadow-2xl ${border}`}>
        {text}
    </a>
    )
}