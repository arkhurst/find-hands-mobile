import React, { Fragment, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
import Slide, { SLIDE_HEIGHT } from '../../components/Explore/SlideComponent';
import Subslide from '../../components/SubSlide';
import Layout from '../../constants/Layout';
import Animated, { multiply } from 'react-native-reanimated';

const slides = [
  {
    label: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here.",
  },
  {
    label: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardobe? Explore hundreds of outfit here',
  },
  {
    label: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
  },
  {
    label: 'Funky',
    color: 'cyan',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion & explore your personality',
  },
];
const BORDER_RADIUS = 75;
const Onboarding = () => {
  const x = useValue(0);
  const scroll = useRef(null);

  const onScroll = onScrollEvent({ x });
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
            {...{ onScroll }}>
            {slides.map((slide, index) => (
              <Fragment key={index}>
                <Slide label={slide.label} right={!!(index % 2)} />
              </Fragment>
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
          />
          <Animated.View
            style={[
              styles.footerContent,
              {
                width: Layout.window.width * slides.length,
                flex: 1,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}>
            {slides.map(({ subtitle, description }, index) => (
              <Fragment key={index}>
                <Subslide
                  onPress={() => {
                    if (scroll.current) {
                      scroll.current
                        .getNode()
                        .scrollTo({
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
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export default Onboarding;