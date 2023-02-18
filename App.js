import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Edu Aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    fontWeight: "bold"
  }
});
