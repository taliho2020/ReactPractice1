import * as React from 'react';

export const InputStyles = {
    style1: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },
    style2: {
        background: "red",
        boxShadow: "none"
    },
    style3: {
        marginTop: "30px",
        textAlign: "center"
    },
    style4: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px"
        }
    }
};

export default InputStyles;
