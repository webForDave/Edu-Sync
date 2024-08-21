const FeaturesCard = ({cards}) => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                cards.map(card => (
                    <div key={card.id}>
                        <span className="flex justify-center items-center">{<card.icon size={30} color='#1D3446'/>}</span>
                        <h3 className="fraunces-heading my-[15px] text-[25px]">{card.title}</h3>
                        <p className="lato-regular-italic">{card.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturesCard;