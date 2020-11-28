import React, {Component} from 'react';

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seckill: {},
            activeTip: '',
        }
    }

    componentDidMount() {
        //获取限时秒杀
        this.axios.get('/api/getseckill').then(res => {
            let seckill = res.data.list ? res.data.list[0] : this.state.seckill;
            this.setState({seckill});
            this.countDown()
        });
    }

    //活动倒计时
    countDown() {
        if (!this.state.seckill.begintime) {
            return
        }
        setInterval(() => {
            let targetTime = '', tip = '';
            if ((parseInt(this.state.seckill.begintime) - new Date().getTime()) > 0) {
                targetTime = this.state.seckill.begintime;
                tip = '开始'
            } else {
                targetTime = this.state.seckill.endtime;
                tip = '结束';
            }
            let restS = Math.ceil((parseInt(targetTime) - new Date().getTime()) / 1000)
            let h = parseInt(restS / 3600) > 9 ? parseInt(restS / 3600) : '0' + parseInt(restS / 3600);
            let min = parseInt((restS % 3600) / 60) > 9 ? parseInt((restS % 3600) / 60) : '0' + parseInt((restS % 3600) / 60);
            let s = restS % 60 > 9 ? restS % 60 : '0' + restS % 60;
            let activeTip = `距离活动${tip}还剩${h}小时${min}分${s}秒`;
            this.setState({activeTip});
        })
    }

    render() {
        if (!this.state.seckill.begintime) {
            return (<p>暂无活动</p>)
        } else {
            return (
                <div>
                    <p>{this.state.seckill.title}</p>
                    <p>{this.state.activeTip}</p>
                    <img src={this.state.seckill.img} alt=""/>
                </div>
            )
        }
    }
}

export default Activity;