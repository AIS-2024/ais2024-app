/** @format */

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const handlepress1 = (): void => {
  router.push("home/question8/goji");
};

const handlepress2 = (): void => {
  router.push("home/question5/quiz2");
};

const handlepress3 = (): void => {
  router.push("home/question/call");
};

const handlepress4 = (): void => {
  router.push("home/collection");
};

const handlepress5 = (): void => {
  router.push("home/question/rightspot");
};

const Home = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://www.letemsvetemapplem.eu/wp-content/uploads/2023/06/iOS-17-tapety-2.png",
      }} // 背景画像のURLを指定
      style={styles.background}
    >
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handlepress1}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/95/24/d0952470-b2fe-f628-1e30-0c4a444aadb3/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.mailIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress5}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/95/24/d0952470-b2fe-f628-1e30-0c4a444aadb3/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.mailIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress2}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9d/84/0b/9d840b19-1f87-4e2a-c2ce-ab56d31839d7/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress3}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/09/09/6409090d-8811-e92f-2ebf-37f842b72e98/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress4}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7d/d1/9e/7dd19ecc-fef9-bc7e-0a1d-10796501161e/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/434x0w.webp",
            }}
            style={styles.Icon}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.iconBottomContainer}>
        <Image
          source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/63/08/f1/6308f11b-2ab3-94c5-6640-d0f578365e52/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
          style={styles.safariIcon}
        />
        <Image
          source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d3/04/9c/d3049c85-1b6b-df5c-ed76-73e8d2fd098e/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp'}}
          style={styles.musicIcon}
        />
      </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    top: 50,
    flexDirection: "row",
    flexWrap: "wrap", // 折り返しを有効化
    justifyContent: "space-between",// 各行で均等に配置
    alignItems: "flex-start",
    width: "80%",
  },
  mailIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginBottom: 15, // 下に余白を追加
  },
  Icon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginBottom: 15, // 下に余白を追加
  },
});

export default Home;