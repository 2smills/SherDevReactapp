import "./Card.css";
const CardService = ({ image, text, subText }) => {
  return (
    <>
      <div className="my-3 py-3 col-md-4 card-service">
        <div className="text-center">
          <img src={image} alt="" style={{ width: "64px", height: "56px" }} />
          </div>
        <h5 className="py-2 text-center">{text}</h5>
        <p>{subText}</p>
      </div>
    </>
  );
};

export default CardService;
