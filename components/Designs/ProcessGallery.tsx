import Image from "../Image";

interface IProcessGalleryProps {
  images: string[];
  captions: string[];
  imageHeight: number;
  imageWidth: number;
}

export default function ProcessGallery(props: IProcessGalleryProps) {
  return (
    <div
      className={`justify-between mx-10 xl:mx-16 grid grid-cols-4 grid-flow-row gap-8 mt-8`}
    >
      {props.images.map((image, index) => (
        <div key={index} className="flex flex-col s_font">
          <Image
            src={image}
            alt={`Process ${index}`}
            layout="responsive"
            height={props.imageHeight}
            width={props.imageWidth}
          ></Image>
          <div>{props.captions[index]}</div>
        </div>
      ))}
    </div>
  );
}
