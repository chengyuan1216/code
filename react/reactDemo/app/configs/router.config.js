import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import { isLogin } from '@configs/common'
import { set } from '@config'

import * as base from '@pages/base' // 基础
import * as sysSet from '@pages/set' // 设置中心-系统设置
import * as menu from '@pages/menu' // 菜单
import * as demo from '@pages/demo' // demo
// console.log(demo.test1.toString())

// 默认行为
function createElement(Component, props) {
  // 确保传入了所有的 props！
  console.log('createElement route', props)
  return (
    <React.Fragment>
      <h1>hhh</h1>
      <Component {...props}/>
    </React.Fragment>
  )
}

function handleUpdate(a, b,c) {
  console.log('handleUpdate', this, a, b, c)
}
export default () => (
  <Router 
    history={hashHistory} 
    createElement={createElement}
    onUpdate={handleUpdate}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={base.example} />
      <Route path="/desk$/index" component={base.example} />
      <Route path="/socketReceive" component={base.socketReceive} />
      {/** *菜单 开始 */}
      <Route path="/echarts" component={menu.echarts} />
      <Route path="/editor" component={menu.editor} />
      {/** *菜单 结束 */}
      {/** *系统设置 开始 */}
      <Route path={`/${set}/userManage`} component={sysSet.userManage} />
      <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
      <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
      {/** *系统设置 结束 */}
      <Route path={`/demo/test1`} component={demo.test1} />
      <Route path={`/demo/test2`} component={demo.test2} />
      <Route path={`/demo/context`} component={demo.context} />
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
