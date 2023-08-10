import 'boxicons';

export const CryptoCard = props => {
    return (
        <>
            <div className="cryptoWrapper">
                <div className="description">
                    <span className='description_name'>{props.name}</span>
                    <span className='description_value'>{props.value}</span>
                </div>
                <div className={`logo crypto-${props.color}`}> <box-icon type='solid' name='bar-chart-square' border='square' size="md"></box-icon></div>
            </div>
        </>
    )
}