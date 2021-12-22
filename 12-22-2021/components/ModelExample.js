import React,{useState} from 'react';
import {StyleSheet, Text, View, Modal, SafeAreaView,Button} from 'react-native';

const ModelExample = () => {
  const [showModal, setShowModel] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
          <Modal
          animationType='slide'
          transparent = {false}
          visible = {showModal}
          >
              <View style={styles.modal}>
                  <Text>Modal is open</Text>
                  <Button
                    title="Click to Close Modal"
                    onPress={() => setShowModel(!showModal)}
                  />
              </View>
              </Modal>
              {}
                  <Button
                  title="Click to Open Modal"
                  onPress={() => setShowModel(!showModal)}
                  />
      </View>
    </SafeAreaView>
  );
};

export default ModelExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0fff0',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
