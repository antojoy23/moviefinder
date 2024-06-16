import { useEffect, useState } from "react"

const useLazyLoadImage = (src) => {
    const [isSourceLoaded, setIsSourceLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsSourceLoaded(true);
    }, [src]);

    return isSourceLoaded;
}

export default useLazyLoadImage;