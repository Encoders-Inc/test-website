import React, { Component } from "react";

import Header from "parts/Header";
import HeroCareer from "parts/HeroCareer";
import Careercard from "../parts/Careercard";
import Data from "../json/landingPage.json";
import Footer from "parts/Footer";
import ApplyForm from "../parts/ApplyForm";

export default class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        company: "",
        email: "",
        phone: "",
        projectIdea: "",
        cv: "",
      },
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onChange = (event) => {
    this.setState({
      data: {
        // eslint-disable-next-line react/no-access-state-in-setstate
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  resetForm = () => {
    this.setState({
      data: {
        name: "",
        company: "",
        email: "",
        phone: "",
        projectIdea: "",
        cv: "",
      },
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Header {...this.props} />
        <HeroCareer />
        <Careercard data={Data.positions} />
        <ApplyForm
          data={data}
          onChange={this.onChange}
          resetForm={this.resetForm}
        />
        <Footer />
      </>
    );
  }
}
