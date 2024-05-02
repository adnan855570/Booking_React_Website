import './Feature.css'

const Feature = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="./public/hotel1.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Zakra</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="./public/hotel2.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>545 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="./public/hotel3.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>746 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Feature