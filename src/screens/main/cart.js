import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import config from '../../constants/config';
import styles from '../../constants/styles';
import {Tabs, Tab, ScrollableTab} from 'native-base';
const TabPage = props => {
  return (
    <View>
      <Text>Tab {props.page_name}</Text>
    </View>
  );
};

const renderTabBar = props => {
  props.tabStyle = Object.create(props.tabStyle);
  return <ScrollableTab {...props} />;
};
const categories = [
  {
    id: 'cat1',
    name: 'cake',
  },
  {
    id: 'cat2',
    name: 'bread',
  },
];
const Deals = props => {
  return (
    <SafeAreaView style={styles.main}>
      <Tabs
        renderTabBar={renderTabBar}
        locked={true}
        tabBarUnderlineStyle={{
          backgroundColor: config.color.gradient.start,
        }}
        tabBarBackgroundColor={config.color.white}
        style={styles.category_bar}>
        {categories.map((item, index) => {
          return (
            <Tab
              tabStyle={styles.set_white}
              activeTabStyle={styles.set_white}
              activeTextStyle={styles.set_active}
              textStyle={styles.set_inactive}
              heading={item.name}
              key={index}
              style={styles.category_item}>
              <TabPage />
            </Tab>
          );
        })}
      </Tabs>
    </SafeAreaView>
  );
};

export default Deals;
