import React from "react";

export default function ImageGallery() {
    // const [image, setImage] = React.useState("/images/img1.jpeg")

    // function handleMouseOver(newImageSource) {
    //     setImage(() => newImageSource);
    // }

    const [image, setImage] = React.useState("/images/img1.jpeg");
    const [nextImage, setNextImage] = React.useState("");
    const [opacity, setOpacity] = React.useState("opacity-100");

    
    function handleMouseOver(newImageSource) {
        if (newImageSource === image) return; // No transition if the image is the same

        setNextImage(newImageSource); // Set the next image
        setOpacity("opacity-0"); // Start fading out the current image

        setTimeout(() => {
            // After fading out, switch images and fade in the new one
            setImage(newImageSource);
            setOpacity("opacity-100"); // Reset opacity for next transition
            setNextImage(""); // Clear next image to remove it from DOM
        }, 300); // Adjust the timeout to match your transition duration
    }

    return (
        <div className="flex flex-row">
            {/* Left Div: Image Gallery */}
            <div
                id="imageGalleryContainer"
                className="w-[50%] h-[550px] m-[30px] flex-row rounded-xl font-jose z-0 relative"
            >
                <img className={`w-full h-full rounded-xl object-cover transition-opacity duration-500 ${opacity}`} src={image} alt="idk" />

                <div class="flex absolute bottom-[5%] left-0 right-0 text-center">
                    <div className="inline-block h-[7px] w-[18%] mx-[1%] bg-[#999999] z-50 hover:bg-white duration-150" onMouseOver={() => handleMouseOver("/images/img1.jpeg")}>
                    </div>
                    <div className="inline-block h-[7px] w-[18%] mx-[1%] bg-[#999999] z-50 hover:bg-white duration-150" onMouseOver={() => handleMouseOver("/images/img2.jpeg")}>
                    </div>
                    <div className="inline-block h-[7px] w-[18%] mx-[1%] bg-[#999999] z-50 hover:bg-white duration-150" onMouseOver={() => handleMouseOver("/images/img3.jpg")}>
                    </div>
                    <div className="inline-block h-[7px] w-[18%] mx-[1%] bg-[#999999] z-50 hover:bg-white duration-150" onMouseOver={() => handleMouseOver("/images/img4.jpg")}>
                    </div>
                    <div className="inline-block h-[7px] w-[18%] mx-[1%] bg-[#999999] z-50 hover:bg-white duration-150" onMouseOver={() => handleMouseOver("/images/img5.jpg")}>
                    </div>
                </div>
            </div>

            {/* Right Div: Slogan */}
            <div class="h-[550px] w-[50%] flex flex-col font-jose">

                <div class="">
                    <p class="text-5xl font-semibold pt-[17%]">Your local</p>
                </div>
                <div class="">
                    <p class="text-8xl font-bold text-[#1A68FF] pt-5">City of Kingston</p>
                </div>
                <div class="">
                    <p class="text-5xl font-bold my-3">Marketplace</p>
                </div>
                <div class="">
                    <p class="text-3xl pt-9 text-[#00B2FF]">10,000+ Listings</p>
                </div>
                <div class="">
                    <p class="text-3xl py-2 text-[#00B2FF]">2,935 Active Users</p>
                </div>
            </div>
        </div> 
        

    )
}