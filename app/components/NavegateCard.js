import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavegateCard = () => {
  const dispatch = useDispatch();

  // dispatch(
  //   setDestination({
  //     location: { lat: -25.96222, lng: 32.45889 },
  //     descripton: {},
  //   })
  // );
  const navegation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello Enio Marcos</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          styles={toInputBoxStyles}
          fetchDetails={false}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          placeholder="Destino?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt",
          }}
          onPress={(data, details = null) => {
            dispach(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navegation.navigate("RideOptionsCard");
          }}
        />
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly mt-10  border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navegation.navigate("RideOptionsCard")}
          style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="black" size={16} />
          <Text style={tw`text-black text-center`}>Foods</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavegateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
