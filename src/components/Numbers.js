import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getNumbers } from "../actions";

const Numbers = props => {
  console.log(props, "props");
  return (
    <div>
      <h1>Get random facts based on numbers!</h1>
      {!props.numbers && !props.isFetching && (
        <p>Go ahead! Get the facts about a random number!</p>
      )}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.numbers && <p>{props.numbers}</p>}
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
