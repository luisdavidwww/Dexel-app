import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    container: {
      width: "100%",
      marginTop:5,
      justifyContent: "flex-start"
    },
    containerOp: {
      flexDirection:'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginHorizontal: 20,
      marginVertical:10
    },
    fontOp: {
        fontSize: 17,
        marginBottom: 10,
    },
    fontOp2: {
      fontSize: 15,
      marginBottom: 10,
      color: 'gray'
  },
  fontLogout: {
    fontSize: 15,
    marginBottom: 10,
    color: '#4b58a6',
    fontWeight: 'bold',
},
  icon: {
    marginLeft:5, 
    marginRight:-15,
    marginBottom:7
  },
  icon2: {
    marginLeft:-20, 
    marginRight:10,
    marginBottom:7
  },
  icon3: {
    marginLeft:-20, 
    marginRight:7,
    marginBottom:7
  },
  containerPicture: {
    marginTop: 10,
  },
  userPicture: {
    width: 77,
    height: 77,
    borderRadius: 100,
    marginRight: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: 5,
  },
  });