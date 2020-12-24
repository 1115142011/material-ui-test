import React, { useState } from 'react'
import { Box, TextareaAutosize, Button, Typography } from '@material-ui/core'
import styles from './setting.module.scss'
import TopBar from 'src/components/topBar'
import { makeStyles } from '@material-ui/core/styles'
import fleck_bg from 'src/assets/userinfo/bg.svg'
import HeaderPicture from 'src/components/headerPicture'
import testImage from 'src/assets/home/test_pic.png'
const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    fontSize: '14px',
    lineHeight: '16px',
    width: '100%',
    border: 0,
    outline: 'none',
    resize: 'none',
  },
  label: {
    paddingTop: '3px',
  },
})

const SettingUserInfo = (props) => {
  const classes = useStyles()
  const [inputKey, setInputKey] = useState<string>()
  const handleChange = (e) => {
    setInputKey(e.target.value)
  }
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <TopBar title='个人信息修改' {...props} />
      <Box flex={1} bgcolor='background.primary'>
        <Box className={styles.topBackgroundBox}>
          <img src={fleck_bg} className={styles.fleckImage} alt='backgroundImage' />
          <HeaderPicture img={testImage}></HeaderPicture>
        </Box>
        <Box className={styles.remarkInputWrap}>
          <Typography className={classes.label} variant='h5'>
            个性签名：
          </Typography>
          <Box flex={1}>
            <TextareaAutosize rowsMin={4} value={inputKey} onChange={handleChange} placeholder='请输入文本' className={classes.root} />
          </Box>
        </Box>
        <Box className={styles.submitRemarkWrap}>
          <Button color='primary' size='large' variant='contained' fullWidth>
            提交修改
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingUserInfo
