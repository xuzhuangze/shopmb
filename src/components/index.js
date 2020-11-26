import React, {Component} from 'react';
import rules from '../router/indexRules';
import Myroute from '../router/index';
import {NavLink} from 'react-router-dom'
import '../css/index.css'

class Index extends Component {
    render() {
        return (
            <div>
                <Myroute rules={rules}></Myroute>


                <div className="bottom-nav">
                    <NavLink to="/index/home">首页</NavLink>
                    <NavLink to="/index/shopcar">购物车</NavLink>
                    <NavLink to="/index/mine">我的</NavLink>
                </div>
            </div>
        );
    }
}

export default Index;