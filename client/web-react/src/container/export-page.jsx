import React from 'react';
import { fetchExportUrl, resetExportUrl } from '../actions/settings/exportUrl.js';
import { Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

export const ExportPage = ({ url, fetchUrl, resetUrl }) => {
    useEffect(()=>{
        return () => {
           resetUrl();
        };
    }, []);

    const Actions = () => {
        if(url){
            return (
                <div>
                  <a href={ url } download> Download </a>
                </div>
            );
        }
        return (
            <div>
              <Button content="Fetch" onClick={() => fetchUrl()}/>
            </div>
        );
    };

    return (
        <div>
          <Header as="h3" color="blue">Export DPP</Header>
          {Actions()}
        </div>
    );
};

const connectState = state => ({
    url: state.settings.exportUrl.url
});

const connectDispatch = dispatch => ({
    fetchUrl: () => dispatch(fetchExportUrl()),
    resetUrl: () => dispatch(resetExportUrl())
});

export default connect(connectState, connectDispatch)(ExportPage);
