import "../styles/components/ButtonContact.css";

interface ButtonContactProps {
  size?: "small" | "medium" | "large";
  fontColor?: string;
}

export default function ButtonContact({
  size = "medium",
  fontColor = "#fff",
}: ButtonContactProps) {
  return (
    <button className={`btn-contact btn-${size}`} style={{ color: fontColor }}>
      Fale conosco
    </button>
  );
}
