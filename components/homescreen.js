import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// import data to display
import { restaurantData } from './data';

// custom cell to display each restaurant
const HomeScreenCell = (props) => (
  <Cell
    {...props}
    hideSeparator={true}
    separatorTintColor='#ccc'
    contentContainerStyle={styles.contentContainer}
    backgroundColor={'transparent'}
    onPress={() => {
      props.action();
    }}
    cellContentView={
      <View style={styles.cellBox}>
        <Image style={styles.imgStyle} source={props.imageSrc} />
        <View style={styles.etaBox}>
          <Text style={styles.etaText}>
            {props.etaLabel}
            {'\n'}mins
          </Text>
        </View>
        <Text style={styles.restaurantName}>{props.customTitle}</Text>
        <Text style={styles.tagline}>{props.customTagline}</Text>
        <Text style={styles.ratings}>★ {props.customRating}</Text>
      </View>
    }
  />
);

// displays all restaurants
export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <ScrollView style={styles.container}>
        <TableView>
          <Section header='' hideSeparator='true' separatorTintColor='#ccc'>
            {restaurantData.map((item, index) => (
              <HomeScreenCell
                key={index}
                imageSrc={item.imgUrl}
                etaLabel={item.eta}
                customTitle={item.title}
                customTagline={item.tagline}
                customRating={item.rating}
                action={() =>
                  navigation.navigate('Menu', {
                    restaurantName: item.title,
                    image: item.imgUrl,
                    items: item.menuitems,
                  })
                }
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const mywidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
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
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#dcc3ae',
    borderColor: '#82401d',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  imgStyle: {
    width: '99%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 2,
  },
  etaBox: {
    width: (mywidth * 0.95) / 4,
    borderRadius: 50,
    backgroundColor: '#82401d',
    borderWidth: 4,
    borderColor: '#b99e88',
    padding: 10,
    marginLeft: mywidth * 0.65,
    marginTop: 170,
    justifyContent: 'center',
    position: 'absolute',
  },
  etaText: {
    fontSize: 16,
    color: '#e6cab3',
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
    color: '#82401d',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
