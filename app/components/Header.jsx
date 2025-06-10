import Image from "next/image"
export function Header () {
    return (
        <div className="Container">
        <div className="logotipo">
            <Image src="/public/images/Logo-Premolsul.png"
             width={200}
             height={100}
             alt="logo"   />
        </div>
        <div className="menu"></div>
        <div className="action"></div>
        </div>
    )
}