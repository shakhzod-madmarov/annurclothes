import img1 from "../assets/collectionsPage/Rectangle 313.png";
import img2 from "../assets/collectionsPage/Rectangle 314.png";
import img3 from "../assets/collectionsPage/Rectangle 315.png";
import img4 from "../assets/collectionsPage/Rectangle 316.png";
import img5 from "../assets/collectionsPage/Rectangle 317.png";
import img6 from "../assets/collectionsPage/Rectangle 318.png";
import img7 from "../assets/collectionsPage/Rectangle 319.png";
import img8 from "../assets/collectionsPage/Rectangle 320.png";
import img9 from "../assets/collectionsPage/Rectangle 321.png";

import "../styles/pages/Lookbook.css"

const Lookbook = () => {
  // Grouping images into different arrays
  const group1 = [img1, img4, img3, img2];
  const group2 = [img5];
  const group3 = [img6, img7, img8, img9];

  return (
    <div>
      <div className="group">
        {group1.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="group">
        {group2.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 5}`} />
        ))}
      </div>
      <div className="group">
        {group3.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 6}`} />
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
