import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'

//无状态函数组件
let router = (props) => {
    return (

        <Switch>
            {
                props.rules.map((item, index) => {
                    if (item.path != '*') {
                        return (<Route key={index} path={item.path} component={item.component}></Route>)
                    } else {
                        return (<Redirect key={index} path="*" to={item.redirect}></Redirect>)
                    }
                })
            }
        </Switch>
    )
}
export default router;