import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useState } from "react";
import Footer from "./Footer";

export default function Home() {
  const navigate = useNavigate();

  const handleBgremoveClick = () => {
    navigate("/Bgremove");
  };

  const [bgImage, setBgImage] = useState("img1.jpg");

  const handleImageChange = (category) => {
    const imageMap = {
      People: "img1.jpg",
      Products: "product.jpg",
      Animals: "animal.png",
      Cars: "car.jpg",
      Graphics: "graphic.png",
    };

    setBgImage(imageMap[category]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.sec1}>
        <div className={styles.left}>
          <img src="\img1.jpg" alt="backimg" />
          <h1>Remove Image Background</h1>
          <h3>
            100% Automatically and <span>Free</span>
          </h3>
        </div>
        <div className={styles.right}>
          <div className={styles.upper}>
            <input type="file" id="upload" />
            <label htmlFor="upload" onClick={handleBgremoveClick}>
              Upload Image
            </label>
            <h3>or drop a file,</h3>
            <p>paste image or URL</p>
          </div>
        </div>
      </section>
      <section className={styles.sec2}>
        <div>
          <h1>Stunning Quality</h1>
          <div className={styles.buttons}>
            {["People", "Products", "Animals", "Cars", "Graphics"].map(
              (cat) => (
                <button key={cat} onClick={() => handleImageChange(cat)}>
                  {cat}
                </button>
              )
            )}
            {/* <button>People</button>
            <button>Products</button>
            <button>Aimals</button>
            <button>Cars</button>
            <button>Graphics</button> */}
          </div>
          <div
            className={styles.images}
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </div>
      </section>
      <section>
        <div className={styles.sec3}>
          <div className={styles.content}>
            <h1>
              Remove backgrounds 100% automatically in 5 seconds with one click
            </h1>
            <p>
              Thanks to remove.bg's clever AI, you can slash editing time - and
              have more fun
            </p>
            <p>
              No matter if you want to make a background transparent (PNG), add
              a white background to a photo, extract or isolate the subject, or
              get the cutout of a photo - you can do all this and more with
              remove.bg, the AI background remover for professionals.
            </p>
          </div>
          <div className={styles.pic}></div>
        </div>
      </section>
      <section className={styles.sec4}>
        <div>
          <h1>They love us. You will too </h1>
        </div>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.icon1}></div>
            <h3>
              “We are impressed by the AI and think it's the best choice on the
              market.”
            </h3>
            <div className={styles.img1}></div>
            <p>Emil Barsø Rheinlænder</p>
            <p>Content & Marketing Coordinator</p>
          </div>
          <div className={styles.review}>
            <div className={styles.icon2}></div>
            <h3>
              “remove.bg is leaps and bounds ahead of the competition. A
              thousand times better. It simplified the whole process.”
            </h3>
            <div className={styles.img2}></div>
            <p>Marc Cohen</p>
            <p>CEO</p>
          </div>
          <div className={styles.review}>
            <div className={styles.icon3}></div>
            <h3>
              “We were impressed by its ability to account for pesky, feathery
              hair without making an image look jagged and amateurish.”
            </h3>
            <div className={styles.img3}></div>
            <p>Taylor Hatmaker</p>
            <p>Senior Technology Editor</p>
          </div>
        </div>
      </section>
      <hr className={styles.hr} />
      <footer className={styles.footer}>
        <div className={styles.footersection}>
          <h4>Learn more</h4>
          <ul>
            <li>Magic Brush</li>
            <li>Individuals</li>
            <li>Photographers</li>
            <li>Marketing</li>
            <li>Developers</li>
            <li>Ecommerce</li>
            <li>Media</li>
            <li>Car Dealerships</li>
            <li>Enterprise</li>
            <li>Success stories</li>
          </ul>
        </div>

        <div className={styles.footersection}>
          <h4>Tools & API</h4>
          <ul>
            <li>API Documentation</li>
            <li>Integrations, tools & apps</li>
            <li>Photoshop Extension</li>
            <li>Windows / Mac / Linux</li>
            <li>Android App</li>
            <li>Design Templates</li>
          </ul>
        </div>

        <div className={styles.footersection}>
          <h4>Support</h4>
          <ul>
            <li>Help & FAQs</li>
            <li>Contact us</li>
            <li>Refunds</li>
            <li>Platform Status</li>
          </ul>
        </div>

        <div className={styles.footersection}>
          <h4>Company</h4>
          <ul>
            <li>Blog</li>
            <li>Affiliate Program</li>
            <li>Create automatic designs</li>
            <li>Video Background Removal</li>
            <li>Careers</li>
            <li>About us</li>
            <li>Press & Partnerships</li>
          </ul>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
