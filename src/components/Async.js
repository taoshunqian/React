import React, { Component } from 'react';
//按需加载路由模块
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }
        async componentDidMount() {  //生命周期函数，组件挂载完成
            const { default: component } = await importComponent();  //importComponent 是react中默认的导入组件的方法
            this.setState({
                component: component
            })
        }
        render() {
            const C = this.state.component
            return C ? <C{...this.props} /> : null
        }
    }
    return AsyncComponent
}