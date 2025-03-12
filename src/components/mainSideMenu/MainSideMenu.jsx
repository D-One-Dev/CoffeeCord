import { useEffect } from "react";
import MainSideMenuOption from "../mainSideMenuOption/MainSideMenuOption";
import MainSideMenuProfileInfo from "../MainSideMenuProfileInfo/MainSideMenuProfileInfo";
import styles from "./MainSideMenu.module.scss";

export default function MainSideMenu() {
  fetch("http://localhost:3000/messages")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className={styles.MainSideMenu}>
      <div className={styles.AppLabel}>
        <h2>coffeeCord</h2>
      </div>
      <div className={styles.NavButtons}>
        <MainSideMenuOption title="Home" />
        <MainSideMenuOption title="Messages" isActive={true} />
        <MainSideMenuOption title="Groups" />
        <MainSideMenuOption title="Lives" redDot={true} />
        <MainSideMenuOption title="Discovery" />
        <MainSideMenuOption title="Bookmarks" />
        <MainSideMenuOption title="Settings" />
      </div>
      <MainSideMenuProfileInfo
        pfpImageSrc="/pfp.jpg"
        name="George Filatov"
        nick="@liggidarck"
      />
    </div>
  );
}
