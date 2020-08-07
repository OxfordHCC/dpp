import React from 'react';
import { importFile } from '../lib/importExport';
import { Button, Header } from 'semantic-ui-react';
import { useState } from 'react';

export const ImportPage = () => {
    const [progress, setProgress] = useState(null);
    const fileInputRef = React.createRef();
    const fileChange = () => {
        const file = fileInputRef.current.files[0];
        importFile(file, progress => {
            setProgress(progress);
        });
    };

    const Progress = (progress) => {
        if(!progress){
            return "";
        }
        return <div>Progress {progress}</div>;
    };
        
    return (
        <div>
          <Header as="h3" color="blue">Import page</Header>
          {Progress(progress)}
          <Button
            content="Choose File"
            labelPosition="left"
            icon="file"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={fileChange}
          />
        </div>
    );
};

export default ImportPage;
