import "../styles/components/ButtonContact.css";

interface ButtonContactProps {
  size?: "small" | "medium" | "large";
  fontColor?: string;
}

export default function ButtonContact<ButtonContactProps>({
  size = "medium",
  fontColor = "#fff",
}) {
  return (
    <button className={`btn-contact btn-${size}`} style={{ color: fontColor }}>
      Fale conosco
    </button>
  );
}
