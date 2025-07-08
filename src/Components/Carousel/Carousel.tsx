import React, { useState } from 'react';
import { View, Dimensions, ImageBackground, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { h } from '../../utils/Helper/Helper';
import styles from './style';

const { width } = Dimensions.get('window');

interface CarouselItem {
  id: string;
  image: string;
}

interface Props {
  data: CarouselItem[];
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  gap?: number;
}

const CustomCarousel: React.FC<Props> = ({
  data,
  height = h(220),
  autoPlay = false,
  loop = false,
  gap = 10,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Carousel
        width={width}
        height={height}
        data={data}
        autoPlay={autoPlay}
        loop={loop}
        style={{ flexGrow: 0 }}
        scrollAnimationDuration={2000}
        onSnapToItem={index => setActiveIndex(index)}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: gap,
          parallaxScrollingScale: 0.9,
          
        }}
        
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground
              source={
                typeof item?.image === 'string'
                  ? { uri: item?.image }
                  : item?.image
              }
              style={styles.image}
              resizeMode="cover"
            >
              {/* Move dot container here */}
              <View style={styles.dotOverlay}>
                {data?.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      i === activeIndex ? styles.activeDot : styles.inactiveDot,
                    ]}
                  />
                ))}
              </View>

              <Text style={styles.text}>Join the LifeRx.md{`\n`}family!</Text>
              <Text style={styles.text2}>
                Elevate your healthcare experience with LifeRx.md We’re here to
                make your healthcare simple, affordable, and effortless.
              </Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

export default CustomCarousel;
