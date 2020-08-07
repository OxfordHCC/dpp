import React from 'react';
import credentials from '../lib/credentials';
import { Header, Input, Form, Icon } from 'semantic-ui-react';

export const ApiKeysPage = () => {
    const [openRouteKey, setOpenRouteKey] = React.useState("");
    const [timeout, setInputTimeout] = React.useState();
    const [orInputIcon, setOrInputIcon] = React.useState();

    //let timeout;
    const onOpenRouteChange = (evt, { name, value }) => {
        //const val = openrouteInput.current.value.trim();
        setOpenRouteKey(value);
        if(timeout){
            clearTimeout(timeout);
        }
 
        setInputTimeout(setTimeout(async () => {
            await credentials.setKey('openroute', value);
            setOrInputIcon(<Icon name="checkmark" color="green"/>);
        }, 500));
    };

    React.useEffect(() => {
        const getAPIKey = async () => {
            setOpenRouteKey(await credentials.getKey('openroute'));
        };
        getAPIKey();
    },[]);
    
    return (
        <div className="settings-api-keys">
          <Header as="h3" color="blue">API keys</Header>
          <div className="content">
            <Header as='h4'>
              <Icon name='car'/>
              <Header.Content>Openroute service</Header.Content> 
            </Header>
            <Form>
              <Form.Field>
                <Input
                  value={openRouteKey}
                  onChange={onOpenRouteChange}
                  icon={orInputIcon}
                />
                
              </Form.Field>
            </Form>
          </div>
        </div>
    );
};

export default ApiKeysPage;
