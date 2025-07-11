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
}

const CustomDatePicker: React.FC<Props> = ({
  label,
  value,
  customLabelStyles,
  onChange,
  mode = 'date',
  minimumDate,
  maximumDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const handleChange = (event: any, selectedDate?: any) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
      if (selectedDate) {
        const formatted = moment(selectedDate).format('MM/DD/YYYY');
        onChange(formatted);
      }
    } else {
      if (selectedDate) {
        setTempDate(selectedDate);
      }
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={(styles.label, customLabelStyles)}>{label}</Text>}

      <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
        <Text style={styles.inputText}>{value || 'Select date'}</Text>
      </Pressable>

      {showPicker && (
        <View style={styles.wrapper}>
        <View style={styles.iosPickerWrapper}>
          <DateTimePicker
            value={tempDate}
            mode={mode}
            display={Platform.OS === 'ios' ? 'spinner':'default'}
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
