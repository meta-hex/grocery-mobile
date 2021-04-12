import React, {useEffect} from 'react';
import styles from '../../constants/styles';
import config from '../../constants/config';
import {Tabs, Tab, ScrollableTab} from 'native-base';
import {SafeAreaView, View, Dimensions} from 'react-native';
import Header from '../../layouts/header';
import Panel from '../../layouts/panel';
import categories from '../../constants/categories';
import groceries from '../../constants/groceries';
const {width, height} = Dimensions.get('window');

const renderTabBar = props => {
  props.tabStyle = Object.create(props.tabStyle);
  return <ScrollableTab {...props} />;
};
const Home = props => {
  useEffect(() => {
    console.log('[HOME]:[USE_EFFECT]');
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <View style={styles.man_plate}>
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
                <Panel groceries={groceries} category={item} />
              </Tab>
            );
          })}
        </Tabs>
      </View>
    </SafeAreaView>
  );
};

export default Home;
