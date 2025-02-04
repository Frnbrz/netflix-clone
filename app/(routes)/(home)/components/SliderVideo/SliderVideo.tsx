import SliderVideoContent from "./SliderVideoContent";

const title = "Cloneflix"
const description = "Aprende a crear desde cero un clon de Netflix con todas sus funciones clave, desde la gestión de usuarios hasta la reproducción de videos, mientras descubres los secretos detrás de una plataforma de streaming exitosa."

export default function SliderVideo() {
  return (
    <section className="slider-video">
      <video
        autoPlay
        loop
        muted
        className="slider-video__player"
        src="/videos/video-1.mp4"
        preload="auto"
        poster="/images/video-poster.jpg"
      />
      <SliderVideoContent title={title} description={description} />
      <div className="slider-video__gradient" />
    </section>
  )
}
