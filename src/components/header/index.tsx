import React, { VFC } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { getRouteData, routeJump } from '@/store/routeStore'
import { Icon } from '@/components/icon'

type HeaderProps = {
  title: string
  setTitleDispatch: (title: string) => void
}

const Header: VFC<HeaderProps> = (props) => {
  const { title, setTitleDispatch } = props
  return (
    <div className="header">
      <Icon name="icon-home" />
      <span className="header-title">{title}</span>
      <div
        className="header-button"
        onClick={() => {
          setTitleDispatch('测试')
        }}
      >
        <Icon name="icon-menu" />
      </div>
    </div>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state: any) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  title: state.route.title
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitleDispatch(title: string) {
      dispatch(getRouteData(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header))
