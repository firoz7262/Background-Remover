import { useState } from "react";
import styles from "./Bgremove.module.css";

function Bgremove() {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);

  const handleChangebg = () => {
    const apikey = "8ceEYcJDzt143nXHh15JkTUr";
    // "oRNsn21P1E9jVjGaEaRVFCrm"
    const url = "https://api.remove.bg/v1.0/removebg";

    const formdata = new FormData();
    formdata.append("image_file", image, image.name);
    formdata.append("size", "auto");

    fetch(url, {
      method: "POST",
      headers: {
        "X-Api-key": apikey,
      },
      body: formdata,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setBgremove(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>
            Upload an Image To Remove The Background{" "}
          </h2>
          <div>
            <div>
              <div className={styles.upper}>
                <input
                  type="file"
                  id="upload"
                  onChange={(e) => setImage(e.target.files[0])}
                />

                <label htmlFor="upload">Upload Image</label>
                <h3>or drop a file,</h3>
                <p>paste image or URL</p>
              </div>
            </div>
            <button className={styles.btn} onClick={handleChangebg}>
              Remove Background
            </button>
          </div>
          <div>
            {/* {bgremove && <img src={bgremove} alt="Remove Background" />} */}
            {bgremove && (
              <div className={styles.result}>
                <img
                  src={bgremove}
                  alt="Removed Background"
                  style={{ width: "300px" }}
                />

                <a
                  href={bgremove}
                  download="no-background.png"
                  className={styles.downloadBtn}
                >
                  Download Image
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bgremove;
