import { connect } from 'react-redux';
import { Push, Replace } from 'connected-react-router';
import { Object } from 'app/types';
import { push, replace } from '../actions';

import { routerLocationSelector, queryObjectSelector } from '../selectors';
import { RouterState } from '../types';

export type { Location, History } from 'history';

export interface IWithRouter {
  location: Location;
  queryObject: Object<any>;
  push: Push;
  replace: Replace;
}

const mapStateToProps = (state: RouterState) => {
  return {
    location: routerLocationSelector(state),
    queryObject: queryObjectSelector(state),
  };
};

const mapDispatchToProps = {
  push,
  replace,
};

export default connect(mapStateToProps, mapDispatchToProps);
