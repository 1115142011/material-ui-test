import React, { lazy } from 'react'

export interface RouteItem {
  path: string
  component: React.LazyExoticComponent<React.FC>
  title: string
  isLogin?: boolean
}

/*
 * isLogin default true
 */
const ROUTES: RouteItem[] = [
  {
    path: '/login',
    title: '登录',
    isLogin: false,
    component: lazy(() => import('../pages/login/index')),
  },
  {
    path: '/home',
    title: '首页',
    isLogin: false,
    component: lazy(() => import('../pages/home/index')),
  },
  {
    path: '/userinfo',
    title: '个人信息',
    isLogin: false,
    component: lazy(() => import('src/pages/userInfo/userDetails/details')),
  },
  {
    path: '/setting',
    title: '设置',
    isLogin: false,
    component: lazy(() => import('src/pages/userInfo/setting/settingEntry')),
  },
  {
    path: '/setting-userinfo',
    title: '个人信息修改',
    isLogin: false,
    component: lazy(() => import('src/pages/userInfo/setting/settingUserInfo')),
  },
  {
    path: '/setting-password',
    title: '修改密码',
    isLogin: false,
    component: lazy(() => import('src/pages/userInfo/setting/settingPassword')),
  },
]
export default ROUTES
