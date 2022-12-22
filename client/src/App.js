import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "../src/Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";
// import { useEffect } from "react";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacings={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
