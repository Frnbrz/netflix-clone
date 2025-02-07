import { Info, Play } from "lucide-react";

interface Props {
  title: string;
  description: string;
}
export default function SliderVideoContent({
  title, description
}: Props) {
  return (
    <div className="main-content">
      <h2 className="main-content__title">
        {title}
      </h2>
      <p className="main-content__description">
        {description}
      </p>
      <div className="main-content__buttons">
        <button className="button button--primary" aria-label="Reproducir video">
          <Play className="icon" />
          Reproducir
        </button>
        <button className="button button--secondary" aria-label="Más información sobre el video">
          <Info className="icon" />
          Más información
        </button>
      </div>
    </div>
  )
}
