import React from 'react'
import { RouteItem } from './index'
import { Redirect } from 'react-router-dom'

const Auth = (Route: RouteItem, props: any) => {
  const token = ''
  document.title = '像素星球-' + Route.title

  if (Route.hasOwnProperty('isLogin') && !Route.isLogin) {
    return <Route.component {...props} />
  } else {
    if (token) {
      return <Route.component {...props} />
    } else {
      return <Redirect from='/' to='/login' />
    }
  }
}

export default Auth
