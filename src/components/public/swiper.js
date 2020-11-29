import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.js';
import index from "swiper/src/components/core/loop";


class _Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerArr: [],
        }
    }

    componentDidMount() {
        if (this.props.getBanner) {
            this.axios.get(this.props.getBanner).then(res => {
                let bannerArr = res.data.list ? res.data.list : [];
                this.setState({bannerArr});
                new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: true,
                })
            });
        }
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.state.bannerArr.map((item, index) => {
                            return (<div className="swiper-slide" key={index}><img src={item.img} alt={item.title}/>
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default _Swiper;