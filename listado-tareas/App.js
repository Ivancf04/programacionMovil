import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './Components/AddTask';
import Checkbox from './Components/Checkbox';

export default function App() {
  const defaultTasks = [
    'Comprar leche',
    'Estudiar React Native',
    'Hacer ejercicio'
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tittle}>Listado de tareas</Text>
      </View>
      <AddTask></AddTask>
      <View style={styles.tasksContainer}>
        {defaultTasks.map((task, idx) => (
          <View key={idx} style={styles.taskItem}>
            <Text style={styles.task}>{task}</Text>
            <Checkbox style={styles.checkbox} label="Estado" onValueChange={(value) => console.log(value)} />
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  tasksContainer: {
    marginTop: 24,
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 20,
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  task: {
    width: '70%',
    fontSize: 18,
  },
  checkbox: {
    width: '30%',
    position: 'absolute',
    right: 30,
  },
});