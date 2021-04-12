import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  // Image,
  // ScrollView,
} from 'react-native';

import config from '../constants/config';
import styles from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';

import ShoppingCart from '../../assets/img/shopping-cart.svg';
import Heart from '../../assets/img/heart.svg';
import Search from '../../assets/img/search.svg';
import SpecialCard from '../components/cards/event-card';

import events from '../constants/events';

const Header = props => {
  const randomize_color = () => {
    let i = Math.random();
    let index = Math.round(i * 4);
    return config.card_colors[index];
  };
  return (
    <View style={styles.header_section}>
      <LinearGradient
        colors={[config.color.gradient.start, config.color.gradient.end]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.sub_header}>
            <Text style={styles.screen_title}>Home</Text>
            <View style={styles.button_group}>
              <TouchableOpacity style={styles.rounded_button}>
                <Heart
                  width={28}
                  height={28}
                  fill="none"
                  color={config.color.white}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.rounded_button}>
                <ShoppingCart
                  width={28}
                  height={28}
                  fill="none"
                  color={config.color.white}
                />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            style={styles.special_card_section}
            showsHorizontalScrollIndicator={false}
            keyExtractor={function (item) {
              return item.id;
            }}
            horizontal={true}
            data={events}
            renderItem={({item}) => (
              <SpecialCard gradientColor={randomize_color()} eventInfo={item} />
            )}
          />
          <View style={styles.search_section}>
            <Search width={20} color={config.color.dark} />
            <TextInput
              style={styles.search_bar}
              placeholder="Search for groceries"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;
