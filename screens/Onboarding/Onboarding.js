import React, { Fragment, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Pagination from '../../components/Pagination';

const slides = [
  {
    label: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Home Improvement',
    description:
      "Need a hand at home? Don't worry! Find the best services here.",
    image: {
      src: require('../../assets/home_improvement.jpg'),
      width: 2513,
      height: 3583,
    },
  },
  {
    label: 'Well-Being',
    color: '#BEECC4',
    subtitle: 'Your health is important!',
    description:
      'Need to get rid of the backpaind? Get a relaxing massage from professionals',
    image: {
      src: require('../../assets/wellness.jpg'),
      width: 2791,
      height: 3744,
    },
  },
  {
    label: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'We round up a selection of quick and easy budget upgrades to inspire your home',
    image: {
      src: require('../../assets/repairs.jpg'),
      width: 2738,
      height: 3244,
    },
  },
  {
    label: 'Funky',
    color: 'cyan',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion & explore your personality',
    image: {
      src: require('../../assets/feels.jpg'),
      width: 1757,
      height: 2551,
    },
  },
];
const BORDER_RADIUS = 75;
const Onboarding = ({ navigation: { navigate } }) => {
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
          {slides.map((slide, index) => {
            const opacity = interpolate(x, {
              inputRange: [
                (index - 0.5) * Layout.window.width,
                index * Layout.window.width,
                (index + 0.5) * Layout.window.width,
              ],
              outputRange: [0, 1, 0],
              extrapolate: Extrapolate.CLAMP,
            });
            return (
              <Fragment key={index}>
                <Animated.View style={[styles.underlay, { opacity }]}>
                  <Image source={slide.image.src} style={styles.image} />
                </Animated.View>
              </Fragment>
            );
          })}

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
              {slides.map(({ subtitle, description }, index) => {
                const last = index === slides.length - 1;
                return (
                  <Fragment key={index}>
                    <Subslide
                      onPress={() => {
                        if (last) {
                          navigate('Welcome');
                        } else {
                          scroll.current?.getNode().scrollTo({
                            x: Layout.window.width * (index + 1),
                            animated: true,
                          });
                        }
                      }}
                      {...{ subtitle, description, x, last }}
                    />
                  </Fragment>
                );
              })}
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
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 75,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    // top:75,
    height: undefined,
    width: undefined,
    borderBottomRightRadius: 75,
  },
});

export default Onboarding;