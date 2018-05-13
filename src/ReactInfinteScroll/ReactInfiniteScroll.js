import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ReactInfiniteScroll extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }

}

ReactInfiniteScroll.propTypes = {
  children: PropTypes.elem
};

export default ReactInfiniteScroll;