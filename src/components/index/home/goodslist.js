import React, {Component} from 'react';
import querystring from 'querystring'

class Goodslist extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.goodsArr.map((item, index) => {
                        return (<li key={index}>
                            {item.goodsname}
                        </li>)
                    })
                }

            </ul>
        );
    }
}

export default Goodslist;