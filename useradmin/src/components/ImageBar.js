import { useState } from "react"

const ImageBar = (props) => {
    const [imageUrl, setImageUrl] = useState(props.imageUrl);

    return (
        <div className="container-flex col-12 bg-light position-relative h-100 " style={{ backgroundImage: `url(${imageUrl})`,backgroundPosition:'center', backgroundSize:'cover' }}>
            <button className="btn me-5 mb-5 btn-outline-secondary text-secodary position-absolute bottom-0 end-0 bi bi-camera"></button>
        </div>
    );
}

export default ImageBar;
