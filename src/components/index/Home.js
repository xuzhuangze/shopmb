import React, {Component} from 'react';
import '../../css/home.css'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.js';
// import index from "swiper/src/components/core/loop";
// import Myroute from "../../router";
// import rules from '../../router/homeRules'
// import qs from 'querystring'

import Goodslist from "./home/goodslist";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstcate: [],
            bannerArr: [],
            seckill: {},
            tabletit: ['热门推荐', '最新上架', '所有商品'],
            tablelist: [],
            goodsArr: [],
        }
    }

    componentDidMount() {
        var start = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
        // 当天23:59
        var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1000).getTime();
        console.log(new Date(1606406620000), 'b', new Date(start))
        console.log(new Date(1606492700000), 'e', new Date(end))
        this.axios.get('/api/getcate').then(res => {
            this.setState({firstcate: res.data.list})
        });
        //获取一级分类
        this.axios.get('/api/getbanner').then(res => {
            let bannerArr = res.data.list ? res.data.list : [];
            this.setState({bannerArr});
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
            })
        });

        //获取限时秒杀
        this.axios.get('/api/getseckill').then(res => {
            console.log(res,'t')
            let seckill = res.data.list ? res.data.list[0] : [];
            this.setState({seckill})
            console.log(seckill)
        });

        // 获取选项卡商品
        this.axios.get('/api/getindexgoods').then(res => {
            console.log(res, 'goods')
            let tablelist = res.data.list;
            this.setState({tablelist})
            this.changeTable(0)
        })

    }

    changeTable(n) {
        let goodsArr = this.state.tablelist[n].content;
        this.setState({goodsArr})
    }

    render() {
        return (
            <div>

                {/*头部*/}
                <header>
                    <img src={require('../../img/logo.jpg').default} alt=""/>
                    <input type="text" placeholder="搜索商品"/>
                </header>

                {/*顶部导航*/}
                <ul className="top-nav">
                    {
                        this.state.firstcate.map((item, index) => {
                            return (
                                <li key={item.id}>{item.catename}</li>
                            )
                        })
                    }
                </ul>

                {/*轮播图*/}

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

                {/*活动*/}
                <div className="activity">
                    <div className="kill">
                        <p className="tit">限时秒杀</p>
                        <p className="stit">每天零点场，好货秒不停</p>
                        <div className="kill-goods">
                            <p>{this.state.seckill.title}</p>
                            <img src={this.state.seckill.img} alt=""/>
                        </div>
                    </div>
                    <div className="everyday">
                        <div className="new-goods">
                            <div>
                                <p className="tit">品牌上新</p>
                                <p className="stit">每日九点，抢大牌</p>
                            </div>
                            <img src={require('../../img/goods1.7cf4aab.jpg').default} alt=""/>
                        </div>
                        <div className="dayevent">
                            <div>
                                <p className="tit">每日事件</p>
                                <p className="stit">只为你选好货 </p>
                            </div>
                            <div>
                                <p className="tit">拼啊</p>
                                <p className="stit">超级好价拼团</p>
                            </div>
                        </div>

                    </div>
                </div>


                {/*    选项卡*/}
                <ul className="table">
                    {
                        this.state.tabletit.map((item, index) => {
                            return (
                                <li key={index} onClick={() => this.changeTable(index)}>{item}</li>
                            )
                        })
                    }
                </ul>
                <Goodslist goodsArr={this.state.goodsArr}></Goodslist>
                {/*<Myroute rules={rules}></Myroute>*/}
            </div>
        );
    }
}

export default Home;