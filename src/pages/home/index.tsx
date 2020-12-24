import React from 'react'
import { Box, Paper, Typography, Avatar, Badge } from '@material-ui/core'
import styles from './home.module.scss'
import fleck_bg from 'src/assets/home/fleck_bg.svg'
import testHeader from 'src/assets/home/test_pic.png'
import logoPic from 'src/assets/login/top_logo.svg'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import HeaderPic from 'src/components/headerPicture/index'
import Workbench from './children/workbench'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circle: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      width: 60,
      height: 60,
      marginBottom: 8,
    },
    badge: {
      color: '#F4A318',
      top: 10,
      right: -20,
      '& .MuiBadge-badge': {
        fontSize: 17,
        fontWeight: 'boold',
      },
    },
  })
)

const Home = (props) => {
  const { history } = props
  const classes = useStyles()
  const toUserInfo = () => {
    history.push('/userinfo')
  }
  return (
    <Box className={styles.pageWrap}>
      <Box className={styles.topBgBox}>
        <img src={fleck_bg} className={styles.fleckImage} alt='backgroundImage' />
        <Box className={styles.boxWrap} onClick={toUserInfo}>
          <Paper elevation={4} className={styles.headerBox}>
            <HeaderPic img={testHeader}></HeaderPic>
            <Box className={styles.middleText}>
              <Typography color='primary' variant='h5'>
                桃谷绘里香
              </Typography>
              <Typography variant='caption' color='secondary' className={styles.smallFont}>
                这是你来到像素星球的第
                <Typography variant='caption' display='inline' color='primary'>
                  476
                </Typography>
                天
              </Typography>
            </Box>
            <img className={styles.logoImage} src={logoPic} alt='logo' />
          </Paper>
        </Box>
        <Box bgcolor='background.primary' className={styles.middleBoxWrap}>
          <Box className={styles.middleFloatCardBox}>
            <Paper elevation={4} className={styles.CardItem}>
              <Avatar color='red' className={classes.circle}>
                10
              </Avatar>
              <Typography variant='caption' color='primary'>
                总居民数
              </Typography>
            </Paper>
            <Paper elevation={10} className={classnames(styles.CardItem, styles.largeCard)}>
              <Badge badgeContent='+12' className={classes.badge}></Badge>
              <Avatar className={classes.circle}>20</Avatar>

              <Typography variant='caption' color='primary'>
                本月新增居民
              </Typography>
            </Paper>
            <Paper elevation={4} className={styles.CardItem}>
              <Avatar className={classes.circle}>30</Avatar>
              <Typography variant='caption' color='primary'>
                租约到期
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box className={styles.bottomBox}>
        <Workbench />
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(Home)
