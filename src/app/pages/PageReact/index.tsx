import React, { FC } from 'react';

import { REACT_LINK } from 'app/containers/Header/enums';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import ReactHook from './ReactHook';
import ReactCustomHook from './ReactCustomHook';
import ReactContext from './ReactContext';
import ReactLegacyContext from './ReactLegacyContext';
import ReactRef from './ReactRef';
import ReactConditionRender from './ReactConditionRender';
import ReactListAndKeys from './ReactListAndKeys';
import ReactChildrenAsFunction from './ReactChildrenAsFunction';
import ReactHOC from './ReactHOC';
import ReactLiftingStateUp from './ReactLiftingStateUp';
import ReactRouterBlockNavigation from './ReactRouterBlockNavigation';
import ReactReconstructChildComponent from './ReactReconstructChildComponent';
import ReactPortal from './ReactPortal';

export interface IPageAProps {}

const PageReact: FC<IPageAProps> = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path={REACT_LINK.PAGE_REACT} component={Home} />
        <Route path={REACT_LINK.PAGE_REACT_HOOK} component={ReactHook} />
        <Route path={REACT_LINK.PAGE_REACT_CUSTOM_HOOK} component={ReactCustomHook} />
        <Route path={REACT_LINK.PAGE_REACT_CONTEXT} component={ReactContext} />
        <Route path={REACT_LINK.PAGE_REACT_LEGACY_CONTEXT} component={ReactLegacyContext} />
        <Route path={REACT_LINK.PAGE_REACT_REF} component={ReactRef} />
        <Route path={REACT_LINK.PAGE_REACT_CONDITION_RENDER} component={ReactConditionRender} />
        <Route path={REACT_LINK.PAGE_REACT_LIST_KEYS} component={ReactListAndKeys} />
        <Route path={REACT_LINK.PAGE_REACT_CHILDREN_AS_FUNCTION} component={ReactChildrenAsFunction} />
        <Route path={REACT_LINK.PAGE_REACT_HOC} component={ReactHOC} />
        <Route path={REACT_LINK.PAGE_REACT_LIFTING_STATE_UP} component={ReactLiftingStateUp} />
        <Route path={REACT_LINK.PAGE_REACT_ROUTER_BLOCK_NAVIGATION} component={ReactRouterBlockNavigation} />
        <Route path={REACT_LINK.PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT} component={ReactReconstructChildComponent} />
        <Route path={REACT_LINK.PAGE_REACT_PORTAL} component={ReactPortal} />
        <Redirect to={REACT_LINK.PAGE_REACT} push={false} />
      </Switch>
      {/* <div>
        <Link to="react">{'<'} Back React</Link>
      </div> */}
    </>
  );
};

export default PageReact;
