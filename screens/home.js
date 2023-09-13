import { ScrollView, View, Text, Image, SafeAreaView } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import styles from './homeStyles';

// import data to display
import { restaurantData } from '../data/data';

// custom cell to display each restaurant
const HomeScreenCell = (props) => (
  <Cell
    {...props}
    hideSeparator={true}
    separatorTintColor="#ccc"
    contentContainerStyle={styles.contentContainer}
    backgroundColor={'transparent'}
    highlightUnderlayColor="#ccc"
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
      <ScrollView style={styles.container}>
        <TableView>
          <Section
            header=""
            hideSeparator="true"
            separatorTintColor="#ccc"
            backgroundColor={'transparent'}>
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
    </SafeAreaView>
  );
}
