import styles from "./MainSideMenuOption.module.scss"

export default function MainSideMenuOption({title, isActive}) {
    return (
        <button>
            <h3 className={isActive ? styles.Underlined : ""}>{title}</h3>
        </button>
    )
}