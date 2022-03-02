import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from "native-base";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title, 
    });
  }, [navigation]);

  const [detail, setDetail] = useState([]);
  const [loading, setloading] = useState(false);

  const getData = async (id) => {
    setloading(true);
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    setDetail(res.data.data);
    setloading(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const _onRefresh = () => {
    getData(id);
  };

  return (
    <View>
      <FlatList
        data={detail}
        // Extract the key from the data with keyExtractor คีย์หลัก
        keyExtractor={(item, index) => item.ch_id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading} 
        renderItem={({ item, index }) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index + 1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.ch_detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
              {/* <Button transparent>
                <Text>View</Text>
              </Button> */}
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});