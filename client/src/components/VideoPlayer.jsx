import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { Grid, Typography, Paper } from "@mui/material";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Grid>
      {/* our own video */}
      {stream && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "NAME1"}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </Paper>
      )}

      {/* users video */}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "NAME2"}
            </Typography>
            <video playsInline ref={userVideo} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
