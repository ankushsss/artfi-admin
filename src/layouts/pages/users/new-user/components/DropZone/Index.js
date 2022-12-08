import React, { useCallback } from "react";
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import { useDropzone } from "react-dropzone";
import { ReactComponent as Close } from "examples/Icons/close.svg";
import Dropzone from "react-dropzone";

const DropZone = ({ highlightsImage, setHighlightsImage }) => {
  const onChangeDropZone = (files) => {
    // console.log("files", files);
    // files?.map((file, index) => {
    //   highlightsImage?.map((item, index) => {
    //     if (item.name !== file.name) {
    setHighlightsImage([...highlightsImage, ...files]);
    // }
    //   });
    // });
  };
  const removeImageFromZone = (id) => {
    setHighlightsImage(highlightsImage.filter((file) => file !== id));
  };

  //   console.log("highlightsImage", highlightsImage);
  return (
    <Dropzone onDrop={(acceptedFiles) => onChangeDropZone(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <Grid item sm={12} {...getRootProps()}>
          <input
            style={{ position: "relative", zIndex: "1000", width: "100%", height: "100%" }}
            accept=".jpg,.png,.jpeg"
            {...getInputProps()}
          />
          <Grid
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              border: "1px solid #d2d6da",
              overflowX: "auto",
            }}
            p={3}
            display="flex"
            alignItems="center"
            item
            xs={12}
            minHeight={150}
            sm={12}
          >
            {highlightsImage?.map((file, index) => (
              <div
                onClick={() => removeImageFromZone(file)}
                style={{
                  position: "relative",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  height: "100%",
                }}
                key={index}
              >
                <Close
                  style={{
                    opacity: 0.4,
                    fill: "white",
                    position: "absolute",
                    width: "80%",
                    margin: "auto",
                    height: "80%",
                    top: "0",
                    bottom: "0",
                    zIndex: "10000000",
                    //   display: onmousedown ? "block" : "none",
                  }}
                />
                <img
                  width="150px"
                  style={{ borderRadius: "10px", margin: "2px" }}
                  height="150px"
                  src={file && URL.createObjectURL(file)}
                  alt=""
                />
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Dropzone>
  );
};

export default DropZone;
