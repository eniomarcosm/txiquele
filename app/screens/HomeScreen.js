import React from "react";
import { Image, StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../slices/navSlice";

import Screen from "../components/Screen";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  dispatch(
    setOrigin({
      location: { lat: -25.96553, lng: 32.58322 },
      descripton: {},
    })
  );

  return (
    <Screen style={[tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt",
            // components: "country:mz",
          }}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                descripton: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavourites></NavFavourites>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
