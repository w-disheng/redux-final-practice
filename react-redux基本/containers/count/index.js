import CountUI from "../../components/count";
import { increment, decrement, incrementAsync } from "../../redux/countActions";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => {
      dispatch(increment(value));
    },
    decrement: (value) => {
      dispatch(decrement(value));
    },
    incrementAsync: (value) => {
      dispatch(incrementAsync(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
