import React, { Fragment, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';
import Slide, { SLIDE_HEIGHT } from '../../components/Explore/SlideComponent';
import Subslide from '../../components/SubSlide';
import Layout from '../../constants/Layout';
import Animated, { multiply, divide } from 'react-native-reanimated';
import Pagination from '../../components/Pagination';

const slides = [
  {
    label: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Home Improvement',
    description:
      "Need a hand at home? Don't worry! Find the best services here.",
    image: require('../../assets/home_improvement.jpg'),
  },
  {
    label: 'Well-Being',
    color: '#BEECC4',
    subtitle: 'Your health is important!',
    description:
      'Need to get rid of the backpaind? Get a relaxing massage from professionals',
    image: require('../../assets/wellness.jpg'),
  },
  {
    label: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'We round up a selection of quick and easy budget upgrades to inspire your home',
    image: require('../../assets/repairs.jpg'),
  },
  {
    label: 'Funky',
    color: 'cyan',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion & explore your personality',
    image: require('../../assets/feels.jpg'),
  },
];
const BORDER_RADIUS = 75;
const Onboarding = () => {
  const scroll = useRef(null);

  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * Layout.window.width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <Fragment>
      <View style={styles.container}>
        <Animated.View style={[styles.slider, { backgroundColor }]}>
          <Animated.ScrollView
            ref={scroll}
            horizontal
            snapToInterval={Layout.window.width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
            bounces={false}
            {...scrollHandler}>
            {slides.map((slide, index) => (
              <Fragment key={index}>
                <Slide
                  label={slide.label}
                  image={slide.image}
                  right={!!(index % 2)}
                />
              </Fragment>
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
          />
          <View
            style={[
              styles.footerContent,
              {
                // width:Layout.window.width * slides.length ,
              },
            ]}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Fragment key={index}>
                  <Pagination
                    currentIndex={divide(x, Layout.window.width)}
                    {...{ index }}
                  />
                </Fragment>
              ))}
            </View>
            <Animated.View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: Layout.window.width * slides.length,
                transform: [{ translateX: multiply(x, -1) }],
              }}>
              {slides.map(({ subtitle, description }, index) => (
                <Fragment key={index}>
                  <Subslide
                    onPress={() => {
                      if (scroll.current) {
                        scroll.current.getNode().scrollTo({
                          x: Layout.window.width * (index + 1),
                          animated: true,
                        });
                      }
                    }}
                    last={index === slides.length - 1}
                    {...{ subtitle, description, x }}
                  />
                </Fragment>
              ))}
            </Animated.View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Onboarding;