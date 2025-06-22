import "../styles/components/ButtonContact.css";

interface ContactButtonProps {
  size?: "small" | "medium" | "large";
  fontColor?: string;
  onClick?: () => void;
}

export default function ContactButton({
  size = "medium",
  fontColor = "#fff",
  onClick = () => {},
}: ContactButtonProps) {
  return (
    <button
      className={`btn-contact btn-${size}`}
      style={{ color: fontColor }}
      onClick={onClick}
    >
      Fale conosco
    </button>
  );
}
