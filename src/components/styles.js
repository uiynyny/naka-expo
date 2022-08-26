import { Dimensions, Platform, StyleSheet } from 'react-native';

export const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    margin: 5,
    paddingHorizontal: 5,
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  underline: {
    borderTopWidth: 0,
    backgroundColor: 'red',
  },
});
export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  progressBarRow: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 10,
  },
  progressBar: {
    flex: 0.8,
    margin: 15,
  },
  iconBack: {
    flex: 0.1,
    fontSize: 30,
    marginTop: 5,
    color: 'rgba(74,144,226,1)',
  },
  title: {
    color: '#000',
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
    paddingVertical: 35 - (35 * 0.75),
  },
  InputRow: {
    flexDirection: 'row',
    marginTop: 50,
  },
  Input: {
    flex: 0.8,
    marginHorizontal: 50,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    width: 230,
    height: 40,
    color: '#000',
  },
  buttonGroups:{
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection:'row'
  },
  checkButton: {
    position: 'absolute',
    right: '5%',
    top: Dimensions.get('window').height * 0.35,
  },
  skipThisStep: {
    margin: 20,
    color:'#555',
    textDecorationLine: 'underline',
  },
  logo: {
    position: 'absolute',
    marginBottom: 50,
    bottom: 0,
    right: 50,
    zIndex: -1,
  },
});
export const bottomSheetStyles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOffset: { width: -1, height: -2 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#5c8edc',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#5C8EDC';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';
export const VerificationStyles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE-5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#5C8EDC',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export const textAreaStyles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "#656565",
    backgroundColor: "#fff",
    borderWidth: 0.1,
    padding: 5,
    margin: 15,
  },
  textArea: {
    height:200,
    borderRadius:10,
    padding:10,
    backgroundColor:"#efefef",
    justifyContent: "flex-start"
  }
})
