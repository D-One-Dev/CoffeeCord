import styles from "./MainSideMenuOption.module.scss"

export default function MainSideMenuOption({title, isActive, redDot}) {
    let buttonClass = ""
    if(isActive) buttonClass += styles.Underlined;
    if(redDot) buttonClass += " " + styles.RedDot;
    return (
        <button>
            <h3 className={buttonClass}>{title}</h3>
        </button>
    )
}