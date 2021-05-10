import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";

import Album from "./components/Album";
import { Album as AlbumModel } from "./components/Model";

const album: AlbumModel = {
  name: "As melhores",
  artist: "Johnnie Fujita",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("./assets/Jan-Blomqvist.jpg"),
  tracks: [
    { name: "Sereia Ariel" },
    { name: "Beco da Luz Precoce", artist: "Johnnie, Didio" },
    { name: "Xking of rock" },
    { name: "People's Love" },
    { name: "Summertimes" },
    { name: "RC", artist: "Johnnie, Didio" },
    { name: "Costume Domingo" },
    { name: "Amor não Acaba", artist: "Johnnie Feijao" },
    { name: "Mimo" },
    { name: "A velha Chama" },
    { name: "Perpetuo Socorro" },
    { name: "The End" },
  ],
};

export default () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Asset.loadAsync(album.cover);
      setReady(true);
    })();
  });
  if (!ready) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Album {...{ album }} />
    </>
  );
};
