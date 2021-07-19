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
        <div className = {styles.container}>
            <Grid container spacing={3} justify='center'>
                 <Grid item component={Card} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>infected</Typography>
                        <Typography varaint='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of active case of covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify='center'>
                 <Grid item component={Card}  className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography varaint='h5'>
                            <CountUp start={0} end={recovered.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of recover case from covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify='center'>
                 <Grid item component={Card} xs={12} className={cx(styles.card,styles.death)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography varaint='h5'>
                            <CountUp start={0} end={deaths.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of deaths of covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}



