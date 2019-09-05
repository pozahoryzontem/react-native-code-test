import { StyleSheet } from 'react-native';

export const userListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export const userRowStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'white',
    marginRight: 20,
  },
  text: {
    fontFamily: 'Cochin',
    fontSize: 20,
  },
});

export const separatorStyles = StyleSheet.create({
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#ced0ce',
    marginLeft: '5%',
    marginRight: '5%',
  },
});
