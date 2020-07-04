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

const CenterBox = styled(Box)({
  padding: '30px',
  textAlign: 'center'
})

function Row(props) {
  const classes = useStyles()
  const {cols, notitle} = props
  if (notitle === true){
    return (
      <>
       <Grid container spacing={3}   
          justify="center"
          alignItems="center">
          <Grid item sm={8} xs={12}>
            <CenterBox>
              <Typography className={classes.itemText} variant="body1" gutterBottom>
                {cols[0].body}
              </Typography>
            </CenterBox>
          </Grid>
       </Grid> 
      </>
    )
  } 
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
