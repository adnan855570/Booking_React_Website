import './PropertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="./public/hotel.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>123 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="./public/villa.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>4578 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="./public/cabin.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>789 cabins</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="./public/apartment.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>467 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="./public/resort.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>378 resorts</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList