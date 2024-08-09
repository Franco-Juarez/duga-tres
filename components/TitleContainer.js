import styles from "../styles/navBar.module.css";

export default function TitleContainer() {
  return (
    <div className={styles.titleContainer}>
      <h1>Un blog de tecnología</h1>
      <h5>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /> Dignissimos maiores molestiae temporibus illo expedita nostrum.
      </h5>
    </div>
  );
}
