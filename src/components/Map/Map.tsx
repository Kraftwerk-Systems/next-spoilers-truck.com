export default function Map() {
  return (
    <div className="Map">
      <iframe
        className="Map"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}
          &q=place_id:ChIJsW-7BOH3aUcRLeI0RlUsX58&zoom=10`}
      ></iframe>
    </div>
  );
}
