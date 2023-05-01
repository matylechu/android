import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal:20,
    },
  
    inputContainer: {
      flexDirection: 'row',
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    input:{
      width:'80%',
      borderBottomColor:'#e63946',
      borderBottomWidth: 1,
      marginRight: 10,
      
    },
    containerlist:{
        flex:1,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    itemContainer:{ 
     height: 80,
     justifyContent: 'center',
     backgroundColor: '#e63946',
     borderRadius: 5,
     marginVertical: 5,
    },
    item: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },

    modalContainer: {
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 60,
      paddingVertical:30,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDetailContainer: {
      paddingVertical:10,
    },
    modalDetailMessage: {
      fontSize: 14,
      color: '#212121',
      textAlign: 'center'
    },
    selectedEvent: {
      fontSize:14,
      color: '#212121',
      fontWeight:'bold',
      paddingVertical: 10,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
})