import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import setu from "../../image/setu3.png";
import who from "../../image/who7.png";
import fund from "../../image/newcrop.png";
import styles from "./OutsideLinks.module.css";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const post = {
  title: "Aarogya Setu",
  giver: "NIC e-Gov Apps",
  description:
    "Aarogya Setu is a mobile application developed by the Government of India to connect essential health services with the people of India in our combined fight against COVID-19.",
  image: setu,
  imageTitle: "imageTitle",
};

const post1 = {
  title: "WHO on Coronavirus",
  giver: "World Health Organization",
  description:
    "WHO is working 24/7 to analyse data, provide advice, coordinate with partners, help countries prepare, increase supplies and manage expert networks.",
  image: who,
  imageTitle: "imageTitle",
};

export default function OutsideLinks() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h1 className={styles.h}>Other Useful Resources:</h1>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={5} className={styles.box}>
          <CardActionArea
            component="a"
            href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN"
          >
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.giver}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Click to Download the App
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <div className={classes.cardMedia} title={post.imageTitle}>
                  <img src={post.image} className={styles.banner} alt="img" />
                </div>
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={5}>
          <CardActionArea
            component="a"
            href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
          >
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post1.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post1.giver}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post1.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Visit WHO website
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <div className={classes.cardMedia} title={post.imageTitle}>
                  <img src={post1.image} className={styles.banner} alt="img" />
                </div>
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={11} md={11}>
          <CardActionArea component="a" href="https://www.pmcares.gov.in/en/">
            <Card>
              <img src={fund} className={styles.banner} alt="logo" />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </div>
  );
}