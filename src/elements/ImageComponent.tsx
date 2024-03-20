import coderimage from "../images/coderimage.jpg";

export function ImageComponent() {
  return (
    <figure className="max-w-lg margintop2x">
      <img
        className="h-auto max-w-full rounded-lg m-auto "
        src={coderimage}
        alt="image description"
      />
    </figure>
  );
}
