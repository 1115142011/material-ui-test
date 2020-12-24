import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
import styles from './setting.module.scss'
import TopBar from 'src/components/topBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconColor: {
    color: '#C7C7CC',
  },
})

const SettingPage = (props) => {
  const classes = useStyles()
  const { history } = props
  const toSettingUserInformation = () => {
    history.push('/setting-userinfo')
  }
  const toSettingPassword = () => {
    history.push('/setting-password')
  }
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <TopBar title='设置' {...props} />
      <Box flex={1} bgcolor='background.primary'>
        <Box className={styles.linkBox} marginTop={4} onClick={toSettingUserInformation}>
          <Typography variant='h5'>个人信息</Typography>
          <ChevronRight className={classes.iconColor} fontSize='large' />
        </Box>
        <Box className={styles.linkBox} marginTop='5px' onClick={toSettingPassword}>
          <Typography variant='h5'>修改密码</Typography>
          <ChevronRight className={classes.iconColor} fontSize='large' />
        </Box>
        <Box className={styles.exitButtonWrap}>
          <Button color='primary' size='large' variant='contained' fullWidth>
            退出登录
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingPage
