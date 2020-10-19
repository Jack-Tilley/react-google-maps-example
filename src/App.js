import React from 'react';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Grid from '@material-ui/core/Grid';
import CBTree from './components/CBTree'
import './index.css';

function App() {
  return (
    <>
       <Grid container style={{height: '500px'}} direction="row">
        <Grid item xs={12} style={{border: 'solid 1px'}}>
          <Map/>
        </Grid>
        {/* <Grid item xs={6}>
          <Sidebar/>
        </Grid> */}
      </Grid>

    </>
  )
}

export default App;
