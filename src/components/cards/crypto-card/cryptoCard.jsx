export const CryptoCard = props => {
    return (
        <>
            <div className="cryptoWrapper">
                <div className="description">
                    <span>{props.name}</span>
                    <span>{props.value}</span>
                </div>
                <div className={`logo crypto-${props.color}`}></div>
            </div>
        </>
    )
}