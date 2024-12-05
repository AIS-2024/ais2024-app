// /** @format */

// import { Link } from "expo-router";
// import React from "react";
// import { Text } from "react-native";

// const Home = () => {
//   return (
//     <>
//       <Text>Homeページ</Text>
//       <Link href="home/question1/nottori">問題ページ1</Link>
//       <Link href="home/question2/question2">問題ページ2</Link>
//       <Link href="home/question3/quiz1">問題ページ3</Link>
//       <Link href="home/question4/">問題ページ4</Link>
//       <Link href="home/question5/quiz2">問題ページ5</Link>
//       <Link href="home/question6/question1">問題ページ6</Link>
//       <Link href="home/question7/">問題ページ7</Link>
//       <Link href="home/question8/goji">問題ページ8</Link>
//       <Link href="home/collection/">コレクション</Link>
//     </>
//   );
// };

// export default Home;

import { ImageBackground, View,  Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const handlepress = () : void => {
  router.push("home/question8/goji")
}
const handlePressOfMessageIcon=():void=>{
  router.push("home/question2/question2")
}
const handlePressOfCollection=():void=>{
  router.push("home/collection/")
}

const Home = () => {
  return (

    <ImageBackground
      source={{ uri: 'https://www.letemsvetemapplem.eu/wp-content/uploads/2023/06/iOS-17-tapety-2.png' }} // 背景画像のURLを指定
      style={styles.background}

    >
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlepress}>
          <Image
              source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/95/24/d0952470-b2fe-f628-1e30-0c4a444aadb3/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
              style={styles.mailIcon}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressOfMessageIcon}>
          <Image
              source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9d/84/0b/9d840b19-1f87-4e2a-c2ce-ab56d31839d7/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
              style={styles.messageIcon}
            />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/09/09/6409090d-8811-e92f-2ebf-37f842b72e98/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
            style={styles.callIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconBottomContainer}>
        <TouchableOpacity onPress={handlePressOfCollection}>
        <Image
          source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/63/08/f1/6308f11b-2ab3-94c5-6640-d0f578365e52/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
          style={styles.safariIcon}
        />
        </TouchableOpacity>
        <Image
          source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d3/04/9c/d3049c85-1b6b-df5c-ed76-73e8d2fd098e/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
          style={styles.musicIcon}
        />
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    top: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
  },
  mailIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
  },
  messageIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginLeft: 20,
  },
  callIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginLeft: 20,
  },
  iconBottomContainer:{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    bottom: 15,
    backgroundColor: 'rgba(64, 64, 64, 0.6)',
    borderRadius: 30,
    paddingVertical: 10
  },
  safariIcon:{
    width: 65,
    height: 65,
    borderRadius: 15,
    marginLeft: 20,
  },
  musicIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginLeft: 20,
  }
});

export default Home;
