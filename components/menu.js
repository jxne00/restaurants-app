import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// displays menu of the selected restaurant
export function Menu({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.toptext}>{route.params.restaurantName}</Text>
      <ScrollView>
        <Image source={route.params.image} style={styles.imgStyle} />
        <TableView>
          {route.params.items.map((item, i) => (
            <Section
              key={i}
              header={item.title}
              headerTextStyle={styles.headerText}
              hideSeparator={false}
              sectionPaddingBottom={5}
              sectionPaddingTop={5}>
              {item.contents.map((cell, j) => (
                <Cell
                  key={j}
                  title={
                    cell.instock ? cell.name : '(Out of stock) ' + cell.name
                  }
                  titleTextStyle={styles.titleTextStyle}
                  image={<Image source={cell.imgUrl} />}
                  cellStyle={cell.instock ? 'RightDetail' : 'subtitle'}
                  detail={cell.price}
                  detailTextStyle={{ color: '#4e4e4e' }}
                  accessory={
                    cell.instock ? 'DisclosureIndicator' : 'DetailDisclosure'
                  }
                  backgroundColor={cell.instock ? '#fff' : '#c19e9e'}
                  onPress={() =>
                    navigation.navigate('MenuItem', {
                      restaurant: route.params.restaurantName,
                      itemName: cell.name,
                      itemPrice: cell.price,
                      itemDesc: cell.description,
                      itemImg: cell.imgUrl,
                      isinstock: cell.instock,
                    })
                  }
                />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95b2c8',
  },
  toptext: {
    margin: 10,
    padding: 10,
    color: '#e6cab3',
    backgroundColor: '#82401d',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgStyle: {
    borderRadius: 6,
    height: 150,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  headerText: {
    marginBottom: 5,
    padding: 6,
    backgroundColor: '#dcc3ae',
    textAlign: 'center',
    color: '#733838',
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#733838',
  },
  titleTextStyle: {
    color: '#000',
    fontSize: 18,
    padding: 6,
  },
});
