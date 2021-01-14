import Image from "next/image";

class FoldableImageProps {
  image1: string = "";
  image2: string = "";
  alt: string = "";
  imageHeight: number = 0;
  imageWidth: number = 0;
}

export default function FoldableImage(props: FoldableImageProps) {
  return (
    <div className="flex flex-col md:flex-row mx-16">
      <div className="md:w-1/2">
        <Image
          src={props.image1}
          alt={props.alt}
          height={props.imageHeight}
          width={props.imageWidth}
          priority={true}
          layout="responsive"
        ></Image>
      </div>
      <div className="md:w-1/2">
        <Image
          src={props.image2}
          alt={props.alt}
          height={props.imageHeight}
          width={props.imageWidth}
          priority={true}
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
}
