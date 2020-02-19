import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image } from 'react-native';

const Message = ({ image, lastMessage, name }) => {
  return (
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};

export default Message;
