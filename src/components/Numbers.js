import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getNumbers } from "../actions";

const Numbers = props => {
  return (
    <div>
      <h1>Random facts based on numbers!</h1>
      {!props.numbers && !props.isFetching && (
        <p>Go ahead! Get the facts about a random number!</p>
      )}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.joke && <p>{props.joke.joke}</p>}
      <button onClick={props.getJoke}>Get Chucked!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numbers: state.text,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getNumbers })(Numbers);
