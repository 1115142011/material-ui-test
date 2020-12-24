import React from 'react'
import { Box, Button } from '@material-ui/core'
import styles from './login.module.scss'
import middleImage from 'src/assets/login/bglogo.png'
import top_logo from 'src/assets/login/top_logo.svg'
import wellcomeText from 'src/assets/login/wellcome_text.svg'
import LoginForm from './LoginFrom'
import { connect } from 'react-redux'

const Home = (props) => {
  const { history, GlobalModel } = props
  const { isLogin = false } = GlobalModel
  const toHome = () => {
    // history.push('/home')
    console.log(props)
  }
  return (
    <Box className={styles.pageWrap}>
      <Box className={styles.topBox} paddingTop={3}>
        <img src={top_logo} className={styles.logo} alt='logo' />
        <img src={middleImage} className={styles.middleImage} alt='图片' />
      </Box>
      <Box className={styles.bottomBox}>
        {isLogin ? (
          <>
            <Box className={styles.wellcomeBox}>
              <img className={styles.wellcomeText} src={wellcomeText} alt='图片' />
            </Box>
            <Box paddingX={3} paddingY={2} width='100%' position='absolute' bottom='10px'>
              <Button variant='contained' color='primary' size='large' fullWidth onClick={toHome}>
                进入工作台
              </Button>
            </Box>
          </>
        ) : (
          <LoginForm />
        )}
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(Home)
