import React from 'react';
import { Message, Transition } from 'semantic-ui-react';

const style= {
    position:"absolute",
    bottom: "5em",
    left: "2em",
    right: "2em",
    "zIndex": 99999
};

const ErrorMessage = ({ error }) => {
    return (
        <Transition visible={ error.visible }>
          <Message style={style} error floating>
            { error && error.message }
          </Message>
        </Transition>
    );
};

export default ErrorMessage;
