import React, { useState } from 'react'
import { InputBase, Button, Box } from '@material-ui/core'
// import { baseInputStyle } from 'src/utils/customizeStyles'
import { connect } from 'react-redux'
const LoginFrom = (props) => {
  const { dispatch } = props
  const [account, setAccount] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const change = (key, e) => {
    const value = e.target.value
    if (key === 'account') {
      setAccount(value)
    } else {
      setPassword(value)
    }
  }
  const changeLoginStatus = () => {
    dispatch({
      type: 'changeIsLogin',
      payload: true,
    })
  }
  // const toHome = () => {
  //   Router.push('/home')
  // }
  return (
    <Box bgcolor='background.primary' style={{ height: '100%' }}>
      <form noValidate>
        <Box paddingTop={2}>
          <InputBase required id='account' value={account} onChange={(e) => change('account', e)} fullWidth placeholder='请输入账号' />
        </Box>

        <Box paddingY={1}>
          <InputBase value={password} type='password' onChange={(e) => change('password', e)} fullWidth placeholder='请输入密码' />
        </Box>

        <Box paddingX={3} paddingY={1}>
          <Button color='primary' size='large' variant='contained' fullWidth onClick={changeLoginStatus}>
            登录
          </Button>
        </Box>
      </form>
    </Box>
  )
}
export default connect((GlobalModel) => GlobalModel)(LoginFrom)
