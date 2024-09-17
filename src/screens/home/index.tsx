import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import { Search } from "../../components/search";
import React from "react";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>
        <Search/>
      </View>
    </ScrollView>
  );
}