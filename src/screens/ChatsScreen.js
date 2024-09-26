import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, Text } from 'react-native';
import { db } from '../firebaseConfig';
import { sendMessageToAssistant } from '../../backend/openaiAPI'; // Import the API

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    const assistantResponse = await sendMessageToAssistant(message, 'threadId123'); // Example threadId
    const newMessage = { text: message, response: assistantResponse };

    // Save to Firestore
    await db.collection('threads').doc('threadId123').collection('messages').add(newMessage);
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <View>
      <ScrollView>
        {messages.map((msg, index) => (
          <View key={index}>
            <Text>User: {msg.text}</Text>
            <Text>Assistant: {msg.response}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput value={message} onChangeText={setMessage} placeholder="Message" />
      <Button title="Send" onPress={handleSendMessage} />
    </View>
  );
}
