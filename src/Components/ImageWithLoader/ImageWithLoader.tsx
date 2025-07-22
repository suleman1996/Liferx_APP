import React, { useState } from 'react';
import {
  Image,
  View,
  ActivityIndicator,
  ImageStyle,
  StyleProp,
} from 'react-native';
import Colors from '../../utils/Colors/Colors';

interface Props {
  imageSource: any;
  style?: StyleProp<ImageStyle>;
  loaderSize?: number | 'small' | 'large';
  loaderColor?: string;
}

const ImageWithLoader: React.FC<Props> = ({
  imageSource,
  style,
  loaderSize = 'small',
  loaderColor = Colors.APP_COLOR,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {loading && (
        <ActivityIndicator
          size={loaderSize}
          color={loaderColor}
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
        />
      )}
      <Image
        source={imageSource}
        style={[style, loading && { opacity: 0 }]}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default ImageWithLoader;
