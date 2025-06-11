import "../styles/components/Contact.css";
import ButtonContact from "./ButtonContact";

export default function Contact() {
  return (
    <div className="main-contact">
      <div>
        <p>Entre em contato e conheça nossas</p>
        <p>oportunidades de desenvolvimento.</p>
      </div>
      <ButtonContact size="large" fontColor="#000000" />
    </div>
  );
}
