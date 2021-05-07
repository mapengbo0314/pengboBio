import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Iconing = (props) => {
  const Icon = props.icon;
  const lable = props.lable;
  const link = props.link;

  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <IconButton aria-label={lable}>
        <Icon style={{ fontSize: 50, color: "#fff" }} />
      </IconButton>
    </a>
  );
};

const Home = () => {
  return (
    <div className="App-header">
      <div>
        <h1>Welcome to Pengbo website!</h1>
        <div style={{ textAlign: "center" }}>
          <Iconing
            icon={LinkedInIcon}
            lable="linkedin.com"
            link="https://www.linkedin.com/in/pengbo-ma-b16884127/"
          />
          <Iconing
            icon={GitHubIcon}
            lable="github.com"
            link="https://github.com/mapengbo0314"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
