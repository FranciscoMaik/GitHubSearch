import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 10 + StatusBar.currentHeight,
  },

  searchUser: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  inputText: {
    width: 319,
    height: 40,
    borderColor: '#777777',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
  },
  listView: {
    marginTop: 5,
    height: '54%',
  },

  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#01B09Dee',
  },

  quadradoImage: {
    backgroundColor: '#01B09Dee',
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  imageUser: {
    backgroundColor: '#ffffff',
    width: 140,
    height: 140,
    borderRadius: 100,
  },

  textRepo: {
    textAlign: 'center',
    marginTop: 9,
    fontSize: 22,
    fontWeight: 'bold',
  },

  backInformation: {
    backgroundColor: '#6013B099',
    padding: 20,
    marginBottom: 9,
  },

  titleRepo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  textInformation: {
    color: '#ffffff',
    fontSize: 18,
  },
  divForkStar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  itens: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputRep: {
    color: '#ffffff',
    marginLeft: 12,
    fontSize: 18,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});
