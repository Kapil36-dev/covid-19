import React from 'react'
import { Card,CardContent,Typography,Grid} from '@material-ui/core'
import  styles  from './card.module.css';
import cx from 'classnames'
import CountUp from 'react-countup';

export default function Cards({data :{confirmed,recovered,deaths,lastUpdate}}) {
    if(!confirmed){
        return 'loadging....';
    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Total number of people infected from COVID-19
              </Typography>
            </CardContent>
          </Grid>
  
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Total number of people recovered from COVID-19
              </Typography>
            </CardContent>
          </Grid>
  
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography varient="body2">
                Total number of people Deceased from COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
};



