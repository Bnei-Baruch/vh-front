import React from 'react'
import {Grid, Typography, Box}  from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
  },
  itemTitle: {
    fontSize: '1.8rem', 
    fontWeight: 400,
    textTransform: 'uppercase'
  },
  itemText: {
    fontSize: '1.3rem', 
    fontWeight: 300,
  }
}))

const ItemBox = styled(Box)({
  padding: '30px',
})

function Row(props) {
  const classes = useStyles()
  const {cols} = props
  return (
    <>
      <Grid container spacing={3}>
        {cols.map((c, i) => 
          <Grid item sm={6} xs={12} key={i}>
            <ItemBox >
              <Typography className={classes.itemTitle} variant="h2" gutterBottom>
                {c.title}
              </Typography>
              <Typography className={classes.itemText} variant="body1" gutterBottom>
                {c.body}
              </Typography>
            </ItemBox>
          </Grid>
        )}        
      </Grid>
    </>
  )
}

export default Row
