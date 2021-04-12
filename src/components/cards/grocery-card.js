import React, {useState, useEffect} from 'react';
import config from '../../constants/config';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import Star from '../../../assets/img/star.svg';
// import Favorite from '../../../assets/img/heart.svg';
import styles from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const checkStar = (num, rank) => {
  if (num > rank) {
    return {border: config.color.primary, fill: 'none'};
  }
  return {border: config.color.primary, fill: config.color.primary};
};
const stars = [1, 2, 3, 4, 5];
const GroceryCard = props => {
  const [info] = useState(props.info);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    if (quantity < 0) {
      setQuantity(0);
    }
  }, [props, quantity]);
  return (
    <View style={styles.grocery_card}>
      <Image source={info.imgUri} style={styles.card_img} />
      <View style={styles.price_sub_section}>
        <Icon name="cart" color={config.color.primary} size={20} />
        <Text style={styles.name}>{info.name}</Text>
      </View>
      <View style={styles.price_section}>
        <View style={styles.price_sub_section}>
          <Icon name="bookmark" color={config.color.primary} size={20} />
          {/* <Text style={styles.green}>Rank - </Text> */}
          {stars.map((item, index) => (
            <Star
              color={checkStar(item, info.star).border}
              width={10}
              height={10}
              fill={checkStar(item, info.star).fill}
              key={item}
            />
          ))}
        </View>
        <View style={styles.price_sub_section}>
          <Icon name="currency-usd" color={config.color.primary} size={20} />
          <Text>{info.price}</Text>
        </View>
      </View>

      <View style={styles.price_section}>
        <View style={styles.action_section}>
          <TouchableOpacity
            onPress={() => {
              setQuantity(prevQuantity => prevQuantity + 1);
            }}>
            <Icon name="plus" color={config.color.dark} size={20} />
          </TouchableOpacity>
          <View style={styles.quantity}>
            <Text style={styles.white}>{quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setQuantity(prevQuantity => prevQuantity - 1);
            }}>
            <Icon name="minus" color={config.color.dark} size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.add_button}
          onPress={() => {
            console.log('add cart');
          }}>
          <Icon name="shopping" color={config.color.white} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroceryCard;
