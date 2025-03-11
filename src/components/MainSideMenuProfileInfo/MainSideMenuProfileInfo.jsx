import styles from "./MainSideMenuProfileInfo.module.scss"

export default function MainSideMenuProfileInfo({pfpImageSrc, name, nick}) {
    return (
        <>
            <div className={styles.MainSideMenuSpacer}></div>
            <div className={styles.MainSideMenuProfileInfo}>
                    <div className={styles.MainSideMenuProfilePictureHolder}>
                        <img className={styles.MainSideMenuProfilePicture} src={pfpImageSrc} alt="Your profile picture" />
                    </div>
                    <div className={styles.MainSideMenuProfileId}>
                        <div className={styles.MainSideMenuProfileName}>{name}</div>
                        <div className={styles.MainSideMenuProfileNick}>{nick}</div>
                    </div>
                </div>
        </>
    )
}