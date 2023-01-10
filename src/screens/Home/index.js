import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'daviddobrik',
    imageUri:
      'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg',
  },
  description: 'hahahah oh boy @borat',
  song: 'NF-The search',
  songImage:
    'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg',
  likes: 123,
  comments: 12,
  share: 44,
  videoUri:
    'https://player.vimeo.com/external/406097963.sd.mp4?s=ce054bb0bbaa513438edcbd291c1d57e4898ef71&profile_id=165&oauth2_token_id=57447761',
};

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
