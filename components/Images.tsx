"use client";

import Image from "next/image";
import useSWR from "swr";
import fetchImages from "../lib/fetchImages";

type ImageType = {
  name: string;
  url: string;
};

function Images() {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR("/api/getImages", fetchImages, {
    revalidateOnFocus: false,
  });

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    // add a success alert or any indication that download is successful
  };

  return (
    <div>
      {isLoading && (
        <p className="animate-pulse text-center pb-7 font-extralight">
          Loading AI generated images...
        </p>
      )}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
        {images?.imageUrls?.map((image: ImageType, i: number) => (
          <div
            key={image.name}
            className={`relative cursor-arrow 
            ${
              i === 0 && "md:col-span-1 md:row-span-1"
            } hover:scale-[103%] transition-transform duration-200 ease-in-out`}
          >
            <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
              <p className="text-center font-light text-lg p-5">
                {image.name.split("_").shift()?.toString().split(".").shift()}
              </p>
              <div>
                <button
                  className="text-sm py-2 px-5 bg-purple-300 hover:bg-green-300"
                  onClick={() => downloadImage(image.url, image.name)}
                >
                  Download
                </button>
              </div>
            </div>
            <Image
              src={image.url}
              width={800}
              height={800}
              className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
