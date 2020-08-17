import React from 'react';
import GoogleLocationImport from './google-import';
import ApiKeysPage from './apiKeys';
import DetectionServiceList from './detectionServiceList';
import { connect } from 'react-redux';
import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';
import emptyPageIll from '../images/clip/clip.png';
import '../style/settings.less';
import { Header } from 'semantic-ui-react';
import ExportPage from './export-page';
import ImportPage from './import-page';

const NoPage = () => {
    return(
        <div style={({
            display: "flex",
            flexDirection:"column",
            width: "100%",
            height: "100%",
            alignItems:"center",
            justifyContent:"center"
        })}
        >
          <img
            style={({
                maxWidth:"960px",
                width:"100%"
            })}
            alt=""
            src={ emptyPageIll }/>
        </div>
    );
};

const classObj = (style) => Object.entries(style)
    .filter(([k,v]) => v)
    .map(([k, v]) => k)
    .join(' ');

export const FakeButton = props => {
    const styleFn = currentStyles => ({
        ...currentStyles,
        '&: hover': {
            'backgroundColor': 'transparent'
        }
    });
    return <ButtonItem elemBefore={props.elemBefore} cssFn={styleFn}>{props.children}</ButtonItem>;
};

//TODO: use react routing for sub-routes.
const Settings = (params) => {
    const [page, showPage] = React.useState(<NoPage/>);
    const [subtitle, setSubTitle] = React.useState(null);

    const hidePage = () => {
        setSubTitle(null);
    };

    const selectPage = (title, component) => {
        showPage(component);
        setSubTitle(title);
    };

    const BackButton = () => {
        return (
            <a id="back-button" href="#settings" onClick={hidePage}
               className={classObj({
                   "back-link": true,
                   "hidden": subtitle === null
               })}>
              
              <i className="m-i">navigate_before</i>
              Back
              
            </a>
        );
    };

    return (
        <div className="page settings">
          <div className="header">
            <BackButton/>
            <Header as="h1">Settings</Header>
          </div>
          <div className={classObj({
              "settings-container": true, 
              "expanded": subtitle !== null
		  })}>
            <MenuGroup className="menu">
			  <Section title="Detection Services">
				<DetectionServiceList/>
			  </Section>
              <Section title="API Keys">
                <ButtonItem elemBefore={<i className="m-i">cloud</i>} onClick={() => selectPage("API Keys", <ApiKeysPage/>)} >API Keys</ButtonItem>
               
              </Section>
              <Section title="Import">
                <ButtonItem elemBefore={<i className="m-i">history</i>} onClick={() => selectPage("Google Import", <GoogleLocationImport/>)}>
                  Import Google Location history
                </ButtonItem>
                <ButtonItem elemBefore={<i className="m-i">publish</i>} onClick={()=> selectPage("Import DPP file", <ImportPage/>)}>Import DPP</ButtonItem>
              </Section>
              <Section title="Export">
                <ButtonItem elemBefore={<i className="m-i">get_app</i>} onClick={() => selectPage("Export DPP", <ExportPage/>)}>Export</ButtonItem>
              </Section>
              <Section title="">
                <p>A short description of the DPP project.<a href="#">More details</a></p>
                <a href="#">Privacy Policy</a>
                <p>Illustrations by <a href="https://icons8.com">icons8</a></p>
              </Section>
            </MenuGroup>
            <div id="settings-page-root">
              {page}
            </div>
          </div>
        </div>
    );
};

const connectState = (state) => ({

});

const connectDispatch = (dispatch) => ({

});

export default connect(connectState, connectDispatch)(Settings);
