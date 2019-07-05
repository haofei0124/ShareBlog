import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button,
  SearchWrapper
} from './style'



class Header extends Component {

   getListArea = () => {
     const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
     const newList = list.toJS()
     const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++ ) {
        pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        >
          <SearchInfoTitle>
          popular search
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
          <i className="iconfont spin">&#xe851;</i>
            change
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
            
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    const { focused,list, login, logout, handleInputFocus, handleInputBlur} = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
        <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">
            Download App
          </NavItem>
          {
            login?<NavItem className="right" onClick={logout}>Logout</NavItem>:
            <Link to="/login">
            <NavItem className="right">Login</NavItem>
            </Link>
          }
          
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            New article
          </Button>
          </Link>
          <Button className="reg">Sign up</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

}

const mapState = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login:state.getIn(['login', 'login'])
  }
}

const disptchState = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapState, disptchState)(Header);