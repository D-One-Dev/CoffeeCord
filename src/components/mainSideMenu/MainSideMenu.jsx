import MainSideMenuOption from "../mainSideMenuOption/MainSideMenuOption"
import MainSideMenuProfileInfo from "../MainSideMenuProfileInfo/MainSideMenuProfileInfo"
import styles from "./MainSideMenu.module.scss"

export default function MainSideMenu() {
    return (
        <div className={styles.MainSideMenu}>
            <div className={styles.AppLabel}>
                <h2>coffeeCord</h2>
            </div>
            <div className={styles.NavButtons}>
                <MainSideMenuOption title="Home" />
                <MainSideMenuOption title="Messages" isActive={true}/>
                <MainSideMenuOption title="Groups" />
                <MainSideMenuOption title="Lives" />
                <MainSideMenuOption title="Discovery" />
                <MainSideMenuOption title="Bookmarks" />
                <MainSideMenuOption title="Settings" />
            </div>
            <MainSideMenuProfileInfo pfpImageSrc="../../../public\pfp.jpg" name="George Filatov" nick="@liggidarck"/>
        </div>
    )
}