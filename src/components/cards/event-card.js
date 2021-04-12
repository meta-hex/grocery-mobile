import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../constants/styles';
import LinearGradient from 'react-native-linear-gradient';

const EventCard = props => {
  const [eventInfo] = useState(props.eventInfo);
  return (
    <LinearGradient
      colors={[props.gradientColor[0], props.gradientColor[1]]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.special_card}>
      <Image source={eventInfo.imgUri} style={styles.special_card_image} />
      <View style={styles.event_info}>
        <Text style={styles.event_title}>{eventInfo.title}</Text>
        <TouchableOpacity style={styles.action_btn}>
          <Text style={styles.event_action}>{eventInfo.action}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default EventCard;
