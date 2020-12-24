import React from 'react'
import { Box, Typography, Paper } from '@material-ui/core'
import { Home, Person, Add } from '@material-ui/icons'
import styles from './workbench.module.scss'
import { connect } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  })
)
const IconList = [
  {
    name: '房源查询',
    icon: Home,
  },
  {
    name: '居民管理',
    icon: Person,
  },
  {
    name: '添加房源',
    icon: Add,
  },
]
const Workbench = (props) => {
  const classes = useStyles()
  return (
    <Box className={styles.boxWrap}>
      <Box className={styles.titleBox} bgcolor='background.primary'>
        <Box className={styles.title}>
          <Typography color='primary' variant='h5'>
            工作台
          </Typography>
        </Box>
      </Box>

      <Box className={styles.content}>
        {IconList.map((item, index) => {
          return (
            <React.Fragment key={index + 'icon'}>
              <Box className={styles.flexItem}>
                <Paper elevation={1} className={styles.iconBox} classes={{ root: classes.root }}>
                  <item.icon />
                </Paper>
                <Typography color='primary' variant='button' style={{ marginTop: '8px' }}>
                  {item.name}
                </Typography>
              </Box>
            </React.Fragment>
          )
        })}
      </Box>
    </Box>
  )
}

export default connect((GlobalModel) => GlobalModel)(Workbench)
