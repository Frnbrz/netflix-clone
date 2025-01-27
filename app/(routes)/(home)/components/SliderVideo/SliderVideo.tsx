import { Info, Play } from "lucide-react";

export default function SliderVideo() {
  return (
    <div className="slider-video">
      <video autoPlay loop muted className="slider-video__player"
        src="/videos/video-1.mp4" />
      <div className="slider-video__content">
        <div className="slider-video__inner">
          <h2 className="slider-video__title">
            Cloneflix
          </h2>
          <p className="slider-video__description">
            Aprende a crear desde cero un clon de Netflix con todas sus
            funciones clave, desde la gestión de usuarios hasta la reproducción
            de videos, mientras descubres los secretos detrás de una plataforma
            de streaming exitosa.
          </p>
          <div className="slider-video__buttons">
            <button className="button button--primary">
              <Play className="slider-video__icon" />
              Reproducir
            </button>
            <button className="button button--secondary">
              <Info className="slider-video__icon" />
              Más información
            </button>
          </div>
        </div>
      </div>

      <div className="slider-video__gradient" />
    </div>
  )
}
