import React from 'react'
import { Box, Typography } from '@material-ui/core'
import testImage from 'src/assets/home/test_pic.png'
import { Star } from '@material-ui/icons'
import styles from './comment.module.scss'
import classnames from 'classnames'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    star: {
      color: '#FDD835',
      width: 18,
      height: 18,
      verticalAlign: 'middle',
    },
    unStar: {
      width: 18,
      height: 18,
      color: '#e1e1eF',
      verticalAlign: 'middle',
    },
    border: {
      borderColor: theme.palette.primary.main,
    },
    smallFont: {
      fontSize: 12,
    },
  })
)

const CommentList = () => {
  const classes = useStyles()
  const myCcore = 3
  return (
    <Box className={styles.listBox}>
      {Array(10)
        .fill(1)
        .map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Box className={styles.listItem}>
                <Box className={styles.leftBox}>
                  <Box className={styles.picBox} borderColor='primary.main'>
                    <img className={styles.image} src={testImage} alt='头像' />
                  </Box>
                </Box>
                <Box className={styles.rightBox}>
                  <Box className={styles.userMsgBox}>
                    <Typography variant='h6' color='primary'>
                      易烊千玺
                    </Typography>
                    <Typography variant='body1' color='primary' className={styles.timeText}>
                      2020年09月14日
                    </Typography>
                    <Box className={styles.scoreBox}>
                      <Typography variant='caption' color='primary'>
                        评分：
                      </Typography>
                      {Array(5)
                        .fill(1)
                        .map((item, index) => {
                          return (
                            <React.Fragment key={index + 'star'}>
                              <Star className={classnames({ [classes.star]: index < myCcore, [classes.unStar]: index >= myCcore })} />
                            </React.Fragment>
                          )
                        })}
                    </Box>
                  </Box>
                  <Box className={styles.commentText}>
                    <Typography variant='body1' color='primary' className={classes.smallFont}>
                      认真，周到，热情XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    </Typography>
                  </Box>
                  <Box className={styles.imageBox}>
                    {Array(3)
                      .fill(1)
                      .map((item, index) => {
                        return (
                          <Box className={styles.imageItem} key={index}>
                            <img className={styles.image} src={testImage} alt='图片' />
                          </Box>
                        )
                      })}
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

export default CommentList
