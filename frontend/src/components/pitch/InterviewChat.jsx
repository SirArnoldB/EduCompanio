import React, { useContext } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageSeparator,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
import { MicOff as MicOffIcon } from "lucide-react";
import { Avatar, Box } from "@mui/material";
import { BoardContext } from "../../contexts/BoardContext";

// eslint-disable-next-line no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const InterviewChat = () => {
  const [state] = useContext(BoardContext);
  const [messages, setMessages] = React.useState([]);
  const [messageInput, setMessageInput] = React.useState("");
  const [isRecording, setIsRecording] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);

  let typingTimer;

  const handleInputChange = (val) => {
    setMessageInput(val);
    setIsTyping(true);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 5000);
  };

  const sendMessage = () => {
    if (messageInput.trim() === "") return;
    const newMessage = {
      message: messageInput,
      sentTime: "just now",
      sender: "User",
      direction: "outgoing",
      position: "single",
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Box
      sx={{
        height: "80vh",
      }}
    >
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Content
              userName={state.user.displayName}
              info="Interviewee"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            typingIndicator={
              (isRecording && <TypingIndicator content="Recording..." />) ||
              (isTyping && (
                <TypingIndicator
                  content={`
                ${state.user.displayName} is typing...
              `}
                />
              ))
            }
          >
            <MessageSeparator content="Interview In Progress" />
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.message,
                  sentTime: msg.sentTime,
                  sender: msg.sender,
                  direction: msg.direction,
                  position: msg.position,
                }}
              >
                {msg.direction === "incoming" && (
                  <Avatar src={""} name={msg.sender} />
                )}
              </Message>
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type a message..."
            value={messageInput}
            onChange={(val) => handleInputChange(val)}
            onSend={sendMessage}
            attachButton={false}
            onAttachClick={toggleRecording}
            fancyScroll={false}
            sendButton={true}
            micButton={true}
            onMicClick={toggleRecording}
            micIcon={<MicOffIcon />}
          />
        </ChatContainer>
      </MainContainer>
    </Box>
  );
};

export default InterviewChat;
