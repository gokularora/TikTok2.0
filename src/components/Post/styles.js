import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height + 20,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  rightContainer: {
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  handle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  // Right Container

  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {alignItems: 'center'},

  statsLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
