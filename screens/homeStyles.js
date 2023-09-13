import { StyleSheet, Dimensions } from 'react-native';

const mywidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad9d9',
    height: '100%',
  },
  contentContainer: {
    height: 290,
    backgroundColor: 'transparent',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: (mywidth * 0.05) / 6,
  },
  cellBox: {
    width: mywidth * 0.95,
    borderWidth: 1.5,
    borderRadius: 15,
    backgroundColor: '#bdc5e0',
    borderColor: '#1a2561',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  imgStyle: {
    width: '98%',
    height: 200,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 2,
  },
  etaBox: {
    width: (mywidth * 0.95) / 4,
    borderRadius: 50,
    backgroundColor: '#1a2561',
    borderWidth: 2,
    borderColor: '#d9dae3',
    padding: 10,
    marginLeft: mywidth * 0.65,
    marginTop: 170,
    justifyContent: 'center',
    position: 'absolute',
  },
  etaText: {
    fontSize: 16,
    color: '#d9dae3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  restaurantName: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagline: {
    marginTop: 5,
    marginLeft: 11,
    marginBottom: 5,
    fontSize: 16,
    color: '#494949',
  },
  ratings: {
    position: 'absolute',
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#d4c3b8',
    color: '#b62b16',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
