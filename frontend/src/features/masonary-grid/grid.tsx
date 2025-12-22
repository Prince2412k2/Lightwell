"use client";

import { EllipsisIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { ImageMenu } from "./components/image-popover";
import { useState } from "react";

// TODO: Implement Banner Image

export function MasonryGrid() {
  const [images, setImages] = useState([
    { id: 1, src: "https://picsum.photos/400/600?1", liked: true },
    { id: 2, src: "https://picsum.photos/400/300?2", liked: false },
    { id: 3, src: "https://picsum.photos/400/500?3", liked: true },
    { id: 4, src: "https://picsum.photos/400/700?4", liked: true },
    { id: 5, src: "https://picsum.photos/400/350?5", liked: false },
    { id: 6, src: "https://picsum.photos/400/450?6", liked: true },
    { id: 7, src: "https://picsum.photos/400/550?7", liked: false },
    { id: 8, src: "https://picsum.photos/400/320?8", liked: true },
    { id: 9, src: "https://picsum.photos/400/350?5", liked: false },
    { id: 10, src: "https://picsum.photos/400/450?6", liked: true },
    { id: 11, src: "https://picsum.photos/400/550?7", liked: false },
    { id: 12, src: "https://picsum.photos/400/320?8", liked: true },
  ]);

  const toggleLike = (id: number) => {
    setImages((prevImages) =>
      prevImages.map((img) =>
        img.id === id ? { ...img, liked: !img.liked } : img,
      ),
    );
  };

  return (
    <div className="w-full px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative mb-4 break-inside-avoid overflow-hidden"
          >
            <ImageMenu className="absolute top-2 right-2 " />

            <div
              className="flex justify-center items-center absolute size-5 bg-foreground/50 rounded-md cursor-pointer bottom-1 right-1"
              onClick={() => toggleLike(img.id)}
            >
              {img.liked ? (
                <HeartIcon className="size-4  rounded-full text-white hover:bg-white/10 " />
              ) : (
                <HeartIcon className="size-4 rounded-full text-red-500 fill-red-500 " />
              )}
            </div>
            <Image
              src={img.src}
              alt="gallery"
              width={400}
              height={600}
              className="w-full h-auto object-cover "
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
