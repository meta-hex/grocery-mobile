import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from '../constants/styles';
import GroceryCard from '../components/cards/grocery-card';
const getFormattedData = arr => {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += 2)));
  }
  return chunks;
};

const Panel = props => {
  const [groceries, setGroceries] = useState([]);
  const setCategoryFormat = (array, cat) => {
    let arr = [];
    if (cat.name === 'All') {
      setGroceries(array);
      return;
    }
    for (let value of array) {
      if (value.category === cat.name) {
        arr.push(value);
      }
    }
    setGroceries(arr);
    arr = [];
    return;
  };
  useEffect(() => {
    setCategoryFormat(props.groceries, props.category);
  }, [props]);
  return (
    <ScrollView style={styles.panel} showsVerticalScrollIndicator={false}>
      {getFormattedData(groceries).map((item, index, key) => {
        return (
          <View style={styles.row} key={item[0].id}>
            <GroceryCard info={item[0]} />
            {item[1] && <GroceryCard info={item[1]} />}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Panel;
