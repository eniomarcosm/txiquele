import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectTimeInformation,
  setTravelTimeInformation,
} from "../../slices/navSlice";
import Screen from "./Screen";

const data = [
  {
    id: "1",
    title: "Taxi Platina",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "2",
    title: "Taxi Ouro",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "3",
    title: "Taxi Diamante",
    multiplier: 2,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOprionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTimeInformation);

  return (
    <Screen style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate("NavegateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Distancia - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Duração: {travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
      <View>
        <TouchableOpacity
          disable={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Selecionar {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default RideOprionsCard;

const styles = StyleSheet.create({});
