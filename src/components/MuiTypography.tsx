import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>sub title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et voluptas optio dolorum velit saepe minus sint earum, itaque aut deserunt, laborum error fuga ab nostrum incidunt recusandae sit tenetur?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sunt molestiae tempore minima. Eum enim minus natus non dolorem dicta molestiae quos necessitatibus cum voluptatem facilis, tempora architecto eligendi velit?</Typography>
    </div>
  )
}
