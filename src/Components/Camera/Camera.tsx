import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import CamIcon from 'react-native-vector-icons/Entypo';
import styles from './style';
import Colors from '../../utils/Colors/Colors';
import Button from '../Button/Button';
import { h } from '../../utils/Helper/Helper';

interface Props {
  onPressCamera?: () => void;
  onPressGallery?: () => void;
  imageSource?: ImageSourcePropType | any;
  onRemoveImage?: () => void;
}

const Camera: React.FC<Props> = ({
  onPressCamera,
  onPressGallery,
  imageSource,
  onRemoveImage,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraView}>
        {imageSource ? (
          <View style={{ position: 'relative' }}>
            <Image
              source={imageSource}
              style={styles.cameraView}
              resizeMode="cover"
            />
            <Pressable onPress={onRemoveImage} style={styles.crossIcon}>
              <CamIcon name="cross" size={25} color={Colors.WHITE} />
            </Pressable>
          </View>
        ) : (
          <>
            <CamIcon name="camera" size={40} color={Colors.APP_COLOR} />
            <Text style={styles.text}>Ready to take your photo</Text>
          </>
        )}
      </View>

      <View style={styles.buttonView}>
        <Button
          text="Upload from camera"
          customButtonStyles={[
            styles.customButtonStyles,
            {
              backgroundColor: imageSource
                ? Colors.BORDER_COLOR
                : Colors.APP_COLOR,
              borderWidth: imageSource ? 0 : 1,
              borderColor: Colors.APP_COLOR,
            },
          ]}
          customTextStyles={[
            styles.customTextStyles,
            { color: imageSource ? Colors.DARK_GREY : Colors.WHITE },
          ]}
          noShadow
          onPressHandler={onPressCamera}
          disabled={!!imageSource}
        />
        <Button
          text="Upload from gallery"
          customButtonStyles={[
            styles.customButtonStyles,
            {
              marginTop: h(10),
              backgroundColor: imageSource ? Colors.BORDER_COLOR : Colors.WHITE,
              borderWidth: imageSource ? 0 : 1,
              borderColor: Colors.APP_COLOR,
            },
          ]}
          customTextStyles={[
            styles.customTextStyles,
            { color: imageSource ? Colors.DARK_GREY : Colors.APP_COLOR },
          ]}
          noShadow
          onPressHandler={onPressGallery}
          disabled={!!imageSource}
        />
      </View>
    </View>
  );
};

export default Camera;
