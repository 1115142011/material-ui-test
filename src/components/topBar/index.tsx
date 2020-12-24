import React from 'react'
import { Box, Typography, IconButton, Paper } from '@material-ui/core'
import { NavigateBefore } from '@material-ui/icons'
import styles from './top_bar.module.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { RouteComponentProps } from 'react-router-dom'
/*
 * ps:
 * --子组件获取 props 中的history 对象需要 手动从父组件透传
 *     否者无法使用history功能, 暂未想到更好的做法
 * --右侧的内容可以通过 children 传递 也可以通过 rightElement 传递
 */

interface IProps {
  title: string
  rightElement?: React.ReactNode
}

type TopBarProps = IProps & RouteComponentProps
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backButton: {
      marginRight: theme.spacing(1),
      padding: 6,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
  })
)
const TopBar: React.FC<TopBarProps> = (props) => {
  const classes = useStyles()
  const { history, title, rightElement, children } = props
  const navigatorBack = () => {
    history.goBack()
  }
  return (
    <Paper elevation={0} className={styles.boxWrap} square>
      <IconButton className={classes.backButton} onClick={navigatorBack}>
        <NavigateBefore fontSize='large' />
      </IconButton>
      <Box className={styles.textBox}>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      {rightElement && <Box className={styles.rightBox}>{rightElement}</Box>}
      {children && <Box className={styles.rightBox}>{children}</Box>}
    </Paper>
  )
}

export default TopBar
