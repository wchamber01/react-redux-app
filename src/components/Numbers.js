import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getNumbers } from "../actions";

const Numbers = props => {
  console.log(props, "props");
  return (
    <div className="factsHolder">
      <h1>Get facts based on random numbers!</h1>
      {!props.numbers && !props.isFetching && (
        <h3>Go ahead! Get the facts about a random number!</h3>
      )}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.numbers && <h3>{props.numbers}</h3>}
      <button onClick={props.getNumbers}>Get Facts!</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    numbers: state.numbers,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getNumbers })(Numbers);
