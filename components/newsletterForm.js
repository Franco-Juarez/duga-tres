import styles from "../styles/navBar.module.css";

export default function NewsletterForm() {

  return (
    <div className={styles.newsletterForm}>
      <form>
      <h4>Suscribite al newsletter</h4>
        <input placeholder="Ingresá tu correo electrónico"></input>
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
}
