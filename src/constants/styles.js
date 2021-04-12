import {StyleSheet, Dimensions} from 'react-native';
import config from './config';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  // font color formatting
  green: {
    color: config.color.gradient.start,
  },
  white: {
    color: config.color.white,
  },
  black: {
    color: config.color.dark,
  },
  // layout formatting
  main: {
    flex: 1,
    backgroundColor: config.color.panel,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
  },
  bottom_tab: {
    height: height * 0.1,
    backgroundColor: '#fff',
  },
  svg_area: {
    width: width,
    height: height * 0.2,
  },
  header_section: {
    width: width,
    height: height * 0.35,
    backgroundColor: config.color.primary,
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  sub_header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  screen_title: {
    fontSize: 32,
    fontFamily: config.font.primary,
    color: 'white',
  },
  button_group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rounded_button: {
    marginLeft: 10,
    borderRadius: 100,
  },

  /* for special card */
  special_card_section: {
    width: width,
    height: height * 0.1,
  },
  special_card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.07,
    marginTop: height * 0.04,
    width: width * 0.5,
    borderRadius: 10,
    padding: 10,
    shadowColor: config.color.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  special_card_image: {
    width: 100,
    resizeMode: 'contain',
    // backgroundColor: 'red',
    flex: 1,
    aspectRatio: 1,
  },

  event_info: {
    width: '60%',
    paddingLeft: 5,
  },
  event_title: {
    color: config.color.white,
  },
  event_action: {
    color: config.color.white,
  },
  action_btn: {
    padding: 3,
    marginTop: 3,
    backgroundColor: config.color.secondary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* end */
  search_section: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: config.color.white,
    bottom: -height * 0.03,
    position: 'absolute',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: config.color.dark,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  search_bar: {
    backgroundColor: 'transparent',
    margin: 0,
    color: config.color.dark,
    fontSize: 16,
    height: '100%',
  },
  man_plate: {
    // backgroundColor: 'red',
    width: '100%',
    flex: 1,
    zIndex: -1,
    // height: height * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category_bar: {
    backgroundColor: config.color.white,
    paddingTop: height * 0.03,
    paddingBottom: 10,
    shadowColor: config.color.dark,
    zIndex: -1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 10,
  },
  set_white: {
    backgroundColor: config.color.white,
  },
  set_active: {
    color: config.color.gradient.start,
  },
  set_inactive: {
    // marginTop: 40,
    color: config.color.dark,
  },
  category_item: {
    marginHorizontal: 5,
    alignSelf: 'center',
    width: width * 0.9,
    // backgroundColor: 'red',
    height: 300,
    // height: '98%',
  },
  panel: {
    // backgroundColor: 'yellow',
    // backgroundColor: 'yellow',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingVertical: 10,
    // backgroundColor: 'tomato',
    width: '100%',
  },
  grocery_card: {
    width: width * 0.9 * 0.45,
    height: height * 0.3,
    backgroundColor: config.color.panel,
    borderRadius: 10,
    paddingHorizontal: '3%',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowColor: config.color.dark,
    elevation: 10,
    paddingBottom: 10,
  },
  card_img: {
    resizeMode: 'contain',
    aspectRatio: 1.5,
    flex: 1,
    width: '100%',
    // backgroundColor: config.color.gradient.end,
  },
  star_view: {
    flexDirection: 'row',
  },
  price_section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 2,
    justifyContent: 'space-between',
    width: '100%',
  },
  price_sub_section: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // marginVertical: 2,
    // width: '50%',
  },
  action_section: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    color: config.color.dark,
    fontSize: 16,
  },
  quantity: {
    paddingHorizontal: 10,
    // width: '20%',
    alignItems: 'center',
    backgroundColor: config.color.dark,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  add_button: {
    borderRadius: 100,
    padding: 5,
    backgroundColor: config.color.primary,
  },
});

export default styles;
