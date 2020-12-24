import React from 'react'
import { Box, Typography, IconButton } from '@material-ui/core'
import { Star, Settings } from '@material-ui/icons'
import styles from './details.module.scss'
import TopBar from 'src/components/topBar'
import BgImage from 'src/assets/userinfo/bg.svg'
import HeaderPicture from 'src/components/headerPicture/index'
import CommentList from 'src/components/comment/index'
import textImage from 'src/assets/home/test_pic.png'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    star: {
      color: '#FDD835',
      marginRight: 6,
      verticalAlign: 'middle',
    },
    score: {
      fontWeight: 'bold',
      marginBottom: -3,
    },
    border: {
      borderBottom: 'solid 1px #e9e9e9',
    },
  })
)
const DetailsPage = (props) => {
  const classes = useStyles()
  const { history } = props
  const toSetting = () => {
    history.push('/setting')
  }
  return (
    <Box className={styles.pageWrap}>
      <TopBar title='个人信息' {...props}>
        <IconButton onClick={toSetting}>
          <Settings color='primary' />
        </IconButton>
      </TopBar>
      <Box className={styles.scrollView}>
        <Box className={styles.userInfobOX}>
          <img className={styles.backgroundImage} src={BgImage} alt='bg' />
          <Box className={styles.baseMsgBox}>
            <HeaderPicture img={textImage} />
            <Box className={styles.middleText}>
              <Typography color='primary' variant='h5'>
                易烊千玺
              </Typography>
              <Box className={styles.scoreBox}>
                <Star className={classes.star} />
                <Typography color='primary' variant='button' className={classes.score}>
                  评分：4.7
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classnames(styles.userRemark, classes.border)}>
          <Typography color='primary' variant='h5'>
            个人签名
          </Typography>
          <Typography color='primary' className={styles.remarkContent} noWrap>
            用尽全身力气，只为能帮你租到心仪的房用尽全身力气只为能帮你租到心仪的房用尽全身力气
          </Typography>
        </Box>
        <Box className={styles.userRemark}>
          <Typography color='primary' variant='h5'>
            收获评价
          </Typography>
        </Box>
        <Box className={styles.comment}>
          <CommentList />
        </Box>
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(DetailsPage)
