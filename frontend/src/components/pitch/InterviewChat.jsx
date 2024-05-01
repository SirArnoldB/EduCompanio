import { useContext, useEffect, useState } from "react";
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
import { Avatar, Box, CircularProgress } from "@mui/material";
import { BoardContext } from "../../contexts/BoardContext";
import InterviewsAPI from "../../services/interviews";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const InterviewChat = ({ editorValue }) => {
  const [state] = useContext(BoardContext);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAssistantTyping, setIsAssistantTyping] = useState(false);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        setIsLoading(true);
        const chatHistory = state.interviewQuestion.chatHistory;
        if (chatHistory && chatHistory.conversation) {
          const formattedMessages = chatHistory.conversation.map((message) => ({
            role: message.role,
            content: message.parts[0].text,
          }));
          setMessages(formattedMessages);
        } else {
          setMessages([]);
        }
      } catch (error) {
        console.error("Error loading chat history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChatHistory();
  }, [state.interviewQuestion]);

  let typingTimer;

  const handleInputChange = (val) => {
    setMessageInput(val);
    setIsTyping(true);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 5000);
  };

  const sendMessage = async () => {
    if (messageInput.trim() === "") return;

    setIsAssistantTyping(true);

    const userMessage = {
      role: "user",
      content: messageInput,
    };

    setMessages([...messages, userMessage]);
    setMessageInput("");

    try {
      const accessToken = state.user.stsTokenManager.accessToken;
      const assistantMessage = await InterviewsAPI.conductInterview(
        {
          interviewId: state.interviewQuestion.id,
          msg: userMessage.content,
          progress: editorValue,
        },
        accessToken
      );

      setMessages([
        ...messages,
        userMessage,
        { role: "model", content: assistantMessage.responseText },
      ]);

      setIsAssistantTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsAssistantTyping(false);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Box sx={{ height: "80vh" }}>
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
                  content={`${state.user.displayName} is typing...`}
                />
              )) ||
              (isAssistantTyping && (
                <TypingIndicator content="Assistant is typing..." />
              ))
            }
          >
            <MessageSeparator content="Interview In Progress" />
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              messages.map((msg, index) => (
                <Message
                  key={index}
                  model={{
                    message: msg.content,
                    sentTime: "just now",
                    sender: msg.role,
                    direction: msg.role === "user" ? "outgoing" : "incoming",
                    position: "single",
                  }}
                >
                  {msg.role === "assistant" && (
                    <Avatar src={""} name="Assistant" />
                  )}
                </Message>
              ))
            )}
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

InterviewChat.propTypes = {
  editorValue: PropTypes.string,
};

export default InterviewChat;
