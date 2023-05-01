
import {Text, View, Button, TextInput, FlatList , TouchableOpacity, Modal} from 'react-native';
import {styles} from './style'
import { useState } from 'react';

export default function App() {
const [text, setText] = useState('');
const [events,setEvents] = useState([]);
const [modalVisible, setModalVisible] = useState(false)
const [selectedEvent, setSelectedEvent] = useState(null)

const onAddEvent = () =>{
  if (text.length === 0) return
  setEvents([
    ...events,
    {
      id: Math.random().toString(),
      value: text
    }
  ])
  setText('')
};

const onHandlerEvent = (id) => {
  setModalVisible(true)
  const selectedEvent = events.find(event => event.id === id)
  setSelectedEvent(selectedEvent)
}
const onHandlerCancelModal = () => {
  setModalVisible(!modalVisible)
  setSelectedEvent(null)
}

const onHandlerDeleted = (id) => {
  setEvents(events.filter(event => event.id !== id))
  setModalVisible(!modalVisible)
}


const renderItem = ({item}) => (
  <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
    <Text style={styles.item}> {item.value} </Text>
  </TouchableOpacity>
)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter......' style={styles.input} value={text} onChangeText={(text) => setText(text)}/>

        <Button title='Add' onPress={onAddEvent} />
      </View>

     <View style={styles.containerlist}>
      <FlatList
      renderItem={renderItem}
      data={events}
      keyExtractor={(item) => item.id}
      />
     </View>
     <Modal visible={modalVisible} animationType='fade'>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>MICHONETA</Text>
      </View>
      <View style={styles.modalDetailContainer}>
        <Text style={styles.modalDetailMessage}>Estas Subido a la michoneta nene</Text>
        <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
        title='Me quedo'
        color='#e63946'
        onPress={() => onHandlerCancelModal ()}
        />
        <Button 
        title='Bajarse'
        color='#e63946'
        onPress={() => onHandlerDeleted(selectedEvent.id)}
        
        />
      </View>
     </Modal>
    </View>
  );
}

