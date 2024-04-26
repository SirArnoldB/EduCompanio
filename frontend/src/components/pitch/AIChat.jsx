import * as React from "react";
import { Box, Grid, TextField, IconButton, Typography } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";
import { MicOff as MicOffIcon } from "lucide-react";

const ChatBox = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "auto",
  width: "100%",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
}));

const MessageArea = styled("div")({
  flexGrow: 1,
  overflow: "auto",
  marginBottom: "16px",
});

const InputArea = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AIChat = () => {
  const [messages, setMessages] = React.useState([]);
  const [messageInput, setMessageInput] = React.useState("");
  const [isRecording, setIsRecording] = React.useState(false);

  // Dummy function for sending text input
  const sendMessage = () => {
    if (messageInput.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: messageInput,
      type: "user",
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  // Dummy function for audio recording toggle
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ChatBox>
            <Typography variant="h5" component="h3" sx={{ marginBottom: 2 }}>
              Interview with EduChamp
            </Typography>
            <MessageArea>
              {messages.map((msg) => (
                <Typography
                  key={msg.id}
                  variant="body1"
                  component="p"
                  sx={{ marginBottom: 1 }}
                >
                  {msg.text}
                </Typography>
              ))}
              {isRecording && (
                <Typography
                  variant="body1"
                  component="p"
                  color="secondary"
                  sx={{ marginBottom: 1 }}
                >
                  Recording...
                </Typography>
              )}
            </MessageArea>
            <InputArea>
              <TextField
                fullWidth
                label="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                variant="outlined"
                size="small"
                sx={{ marginRight: 1 }}
              />
              <IconButton color="primary" onClick={sendMessage}>
                <SendIcon />
              </IconButton>
              <IconButton
                color={isRecording ? "secondary" : "default"}
                onClick={toggleRecording}
              >
                {isRecording ? <MicOffIcon size={24} /> : <MicIcon />}
              </IconButton>
            </InputArea>
          </ChatBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIChat;
