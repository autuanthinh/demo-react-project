import React, { FC } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ReactHook from './ReactHook';
import ReactCustomHook from './ReactCustomHook';
import ReactContext from './ReactContext';
import ReactRef from './ReactRef';
import ReactConditionRender from './ReactConditionRender';
import ReactListAndKeys from './ReactListAndKeys';
import ReactChildrenAsFunction from './ReactChildrenAsFunction';

export interface IPageAProps {}

const PageReact: FC<IPageAProps> = ({}) => {
  return (
    <>
      <Switch>
        <Route exact={true} path={'/react'} component={Home} />
        <Route path={'/react/react-hook'} component={ReactHook} />
        <Route path={'/react/react-custom-hook'} component={ReactCustomHook} />
        <Route path={'/react/react-context'} component={ReactContext} />
        <Route path={'/react/react-ref'} component={ReactRef} />
        <Route path={'/react/react-condition-render'} component={ReactConditionRender} />
        <Route path={'/react/react-list-keys'} component={ReactListAndKeys} />
        <Route path={'/react/react-children-as-function'} component={ReactChildrenAsFunction} />
        <Redirect to={'/react'} push={false} />
      </Switch>
      {/* <div>
        <Link to="react">{'<'} Back React</Link>
      </div> */}
    </>
  );
};

export default PageReact;
