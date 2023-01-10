import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Post = props => {
  // const {post} = props; // to take post out of props
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false); // to make 1 like at a time

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  // the below method explains about 1 like at a time.
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked); // true to false and false to true
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: post.videoUri,
          }}
          style={styles.video}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post.user.imageUri,
              }}
            />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onLikePress}>
              <AntDesign
                name={'heart'}
                size={35}
                color={isLiked ? 'red' : 'white'}
              />
              <Text style={styles.statsLabel}>{post.likes}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome name={'commenting'} size={35} color="white" />
              <Text style={styles.statsLabel}>{post.comments}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome name={'share-alt'} size={35} color="white" />
              <Text style={styles.statsLabel}>{post.share}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.root}>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={25} color="white" />
              <Text style={styles.songName}> {post.song}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image style={styles.songImage} source={{uri: post.songImage}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
