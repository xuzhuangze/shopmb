import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.js'


export default (props) => {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    props.bannerArr.map((item, index) => {
                        return (<div className="swiper-slide" key={index}><img src={item.img} alt=""/></div>)
                    })
                }

            </div>
        </div>
    )
}


