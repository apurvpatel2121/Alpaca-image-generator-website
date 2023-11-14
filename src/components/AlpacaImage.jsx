const AlpacaImage = ({item,getImageUrl}) => (
    <img
        key={item.label}
        src={getImageUrl(item)}
        className={`${item.label}`}
    />
)
export default AlpacaImage;