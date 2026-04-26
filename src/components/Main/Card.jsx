

const Card = (props) => {
    // console.log('card props:', props);
    const {title, image, desc} = props;
    return (
        <div className="cards">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <img src={image} alt="resim" />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
    )
};

export default Card;