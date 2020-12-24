import React, { useState } from 'react'
import { Box, InputBase, Button, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
import styles from './setting.module.scss'
import TopBar from 'src/components/topBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconColor: {
    color: '#C7C7CC',
  },
})

const SettingPassword = (props, context) => {
  console.log('xxxxxxxxxxxxxxxxxxxxxxx context', context)
  const [oldPassword, setOldPassword] = useState<string>()
  const [newPassword, setNewPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const change = (key, e) => {
    const value = e.target.value
    if (key === 'oldPassword') {
      setOldPassword(value)
    } else if (newPassword) {
      setNewPassword(value)
    } else if (confirmPassword) {
      setConfirmPassword(value)
    }
  }
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <TopBar title='修改密码' {...props} />
      <Box flex={1} bgcolor='background.primary' position='relative'>
        <Box paddingTop={4} className={styles.passwordInputBox}>
          <InputBase
            required
            type='password'
            value={oldPassword}
            onChange={(e) => change('oldPassword', e)}
            fullWidth
            placeholder='请输原密码'
          />
        </Box>
        <Box className={styles.passwordInputBox}>
          <InputBase
            value={newPassword}
            type='password'
            onChange={(e) => change('newPassword', e)}
            fullWidth
            placeholder='请输入新密码'
          />
        </Box>
        <Box className={styles.passwordInputBox}>
          <InputBase
            value={newPassword}
            type='password'
            onChange={(e) => change('confirmPassword', e)}
            fullWidth
            placeholder='请再次确认新密码'
          />
        </Box>

        <Box className={styles.submitPasschange}>
          <Button color='primary' size='large' variant='contained' fullWidth>
            提交修改
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingPassword
