import React from 'react';
import {
    useRouteMatch,
    HashRouter,
    Route,
    Link,
    Redirect,
    useHistory,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import Current from "./current";
import Settings from "./settings";
import History from "./history";
import { Menu, Icon } from 'semantic-ui-react';
import ErrorMessage from '../component/errorMessage';

const CustomMenuItem = ({ to, children }) => {
    const match = useRouteMatch({
        exact: false,
        path: to
    });
    const history = useHistory();

    const goToRoute = () => {
        history.push(to);
    };
    
    return (
        <Menu.Item active= { match !== null } onClick={ goToRoute }>
          { children }
        </Menu.Item>
    );
}

const Main = ({error}) => {
    const defaultDate = new Date().toISOString().split('T')[0];
    
	return (
        <HashRouter>
          <Switch>
            <Redirect exact from="/history" to={`/history/${defaultDate}`}/>
            <Route path="/history/:date">
              <History/>
            </Route>
            <Route path="/settings/manifest/:controller">
              <Settings/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
            <Route path="/">
              <Current/>
            </Route>
          </Switch>
          <ErrorMessage error={error}/>
          <div className="menu" style={({
              borderTop: "1px solid #f2f2f2"
          })}>
            <Menu widths={3} fluid icon='labeled' secondary>
              <CustomMenuItem to="/current">
                <Icon name="chevron circle down"/>
                Current
              </CustomMenuItem>        
              <CustomMenuItem to="/history">
                <Icon name="calendar"/>
                History
              </CustomMenuItem>        
              <CustomMenuItem to="/settings">
                <Icon name="cogs"/>
                Settings
              </CustomMenuItem>        
           </Menu>
          </div>
        </HashRouter>
    );
};

const connectState = (state) =>({
    error: state.error
});

export default connect(connectState)(Main);
