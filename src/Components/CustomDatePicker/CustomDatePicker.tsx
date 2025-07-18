import React, { useState } from 'react';
import { View, Text, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import styles from './style';

interface Props {
  label?: string;
  value: string;
  onChange: (date: string) => void;
  mode?: 'date' | 'time';
  minimumDate?: Date;
  maximumDate?: Date;
  customLabelStyles?: object;
  customContainerStyle?: object;
  customDatePickerInput?:object
}

const CustomDatePicker: React.FC<Props> = ({
  label,
  value,
  customLabelStyles,
  customContainerStyle,
  customDatePickerInput,
  onChange,
  mode = 'date',
  minimumDate,
  maximumDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const handleChange = (event: any, selectedDate?: Date) => {
    const isDismissed = event?.type === 'dismissed';
    if (!isDismissed && selectedDate) {
      setTempDate(selectedDate);
      if (Platform.OS === 'android') {
        setShowPicker(false);
        onChange(moment(selectedDate).format('MM/DD/YYYY'));
      }
    } else if (Platform.OS === 'android') {
      setShowPicker(false);
    }
  };

  return (
    <View style={[styles.container,customContainerStyle]}>
      {label && <Text style={(styles.label, customLabelStyles)}>{label}</Text>}

      <Pressable style={[styles.input,customDatePickerInput]} onPress={() => setShowPicker(true)}>
        <Text style={styles.inputText}>{value || 'Select date'}</Text>
      </Pressable>

      {showPicker && (
        <View style={styles.wrapper}>
          <View style={styles.iosPickerWrapper}>
            <DateTimePicker
              value={tempDate}
              mode={mode}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleChange}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              style={styles.iosPicker}
            />
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={() => setShowPicker(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setShowPicker(false);
                if (tempDate) {
                  const formatted = moment(tempDate).format('MM/DD/YYYY');
                  onChange(formatted);
                }
              }}
              style={styles.okButton}
            >
              <Text style={styles.okText}>OK</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};
export default CustomDatePicker;
