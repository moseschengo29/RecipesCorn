import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import gallery4 from "../assets/gallery/gallery-4.jpg";
import gallery5 from "../assets/gallery/gallery-5.jpg";
import gallery6 from "../assets/gallery/gallery-6.jpg";
import gallery7 from "../assets/gallery/gallery-7.jpg";
import gallery8 from "../assets/gallery/gallery-8.jpg";
import gallery9 from "../assets/gallery/gallery-9.jpg";
import gallery10 from "../assets/gallery/gallery-10.jpg";
import gallery11 from "../assets/gallery/gallery-11.jpg";
import gallery12 from "../assets/gallery/gallery-12.jpg";

function Gallery() {
  return (
    <div class="gallery">
      <figure class="gallery-item">
        <img src={gallery1} alt="Gallery" />
      </figure>
      <figure class="gallery-item">
        <img src={gallery2} alt="Gallery" />
      </figure>
      <figure class="gallery-item">
        <img src={gallery3} alt="Gallery" />
      </figure>
      <figure class="gallery-item">
        <img src={gallery4} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery5} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery6} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery7} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery8} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery9} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery10} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery11} alt="Gallery" />
      </figure>{" "}
      <figure class="gallery-item">
        <img src={gallery12} alt="Gallery" />
      </figure>
    </div>
  );
}

export default Gallery;
