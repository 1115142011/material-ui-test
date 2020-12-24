import React from 'react'
import { Box } from '@material-ui/core'
import picBorder from 'src/assets/home/header_border.svg'

import styles from './header_pic.module.scss'

interface PicProps {
  img: string
}
const HeaderPicture: React.FC<PicProps> = (props) => {
  const { img } = props
  return (
    <Box className={styles.imageBorder}>
      <img src={picBorder} className={styles.headerBorder} alt='头像' />
      <Box className={styles.headerImage}>
        <img src={img} alt='头像' />
      </Box>
    </Box>
  )
}

export default HeaderPicture
