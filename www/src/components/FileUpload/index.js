import { useState } from "react";
import { FileUpload } from "clk-bs/FileUpload";
import { Form } from "@govtechsg/sgds-govtech-react/Form";

                                                                                                                                                                                            
export const FileUploadCom = () => {
    const [selectedFile, setSelectedFile] = useState({});
    const onChangeFile = (data) => {
      setSelectedFile(data);
    };
    return (
      <Form>
        <FileUpload                  
          controlId="fileupload1"
          onChangeFile={onChangeFile}
          selectedFile={selectedFile}
        >
          <i className="bi bi-upload me-2"></i>Choose a file
        </FileUpload>
      </Form>
    );
  };