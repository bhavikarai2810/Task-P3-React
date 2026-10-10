const galleryImages = [
  { src: '/images/pic1.jpg', alt: 'Web development technology' },
  { src: '/images/pic2.jpg', alt: 'Website design and development' },
  { src: '/images/pic3.jpg', alt: 'Digital technology concept' },
  { src: '/images/pic4.jpg', alt: 'Artificial intelligence concept' },
];

export default function Gallery() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Gallery</h2>
      <hr />
      <div className="gallery">
        {galleryImages.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
}
