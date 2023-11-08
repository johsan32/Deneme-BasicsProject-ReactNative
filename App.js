// @format
import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  Button,
  TextInput,
  ToastAndroid
} from 'react-native';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textData, setTextData] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleSend = () => {
    const formData = {
      name: name,
      education: education,
      phoneNumber: phoneNumber,
      email: email,
    };
    if (name !== null && education !== null && phoneNumber !== null && email !== null) {
      setTextData([...textData, formData]);
      setShowModal(false);
      ToastAndroid.showWithGravityAndOffset(
        'E-postanıza indirme linki iletildi!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Tüm alanları doldurunuz!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
    }


    setName("");
    setEducation("")
    setPhoneNumber("")
    setEmail("")
  }
  const handleClick = () => {

    setShowModal(false);
    ToastAndroid.showWithGravityAndOffset(
      'Bilgileri girilmeden çıkış yapıldı',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header} >
        <ImageBackground source={require("./src/assets/logo.webp")} style={styles.image} resizeMode='cover'>
        </ImageBackground>
      </View>
      <ScrollView style={styles.scrollHorizontal}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollToEnd={true}
        scrollTo={true}
      >
        <View style={styles.categoryView}>
          <Text style={styles.categoryText} > React-Native</Text>
          <Text style={styles.categoryText} > Learn once</Text>
          <Text style={styles.categoryText} > Write anywhere</Text>
          <Text style={styles.categoryText} > Get started</Text>
          <Text style={styles.categoryText} > Learn the basics</Text>
          <Text style={styles.categoryText} > macOs</Text>
          <Text style={styles.categoryText} > Windows</Text>
          <Text style={styles.categoryText} > Linux</Text>
          <Text style={styles.categoryText} > iOS</Text>
          <Text style={styles.categoryText} > Android</Text>
        </View>
      </ScrollView>
      <ScrollView style={styles.scrolView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScrollAnimationEnd={true}
      >
        <View style={styles.container}>

          <View style={styles.box}>
            <ImageBackground resizeMode='contain' source={{ uri: "https://railsware.com/blog/wp-content/uploads/2018/08/React-Native-vs-Native-Development_Icon-1.png" }} style={[styles.image]} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native1.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native2.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native3.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native4.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native5.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native6.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native7.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native8.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native9.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native10.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode='contain' source={require("./src/assets/native11.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native12.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native13.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native14.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native15.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image style={styles.image} resizeMode="contain" source={require("./src/assets/native16.png")} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native17.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native18.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native19.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native20.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native21.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native22.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native23.png")} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Image resizeMode="contain" source={require("./src/assets/native24.png")} style={styles.image} />
          </View>
          <View style={styles.box2}>
            <Text style={{ textAlign: "center", fontSize: 24, padding: 4 }}> Eğitim Notu İletilecekler</Text>
            {textData.map((item, i) => (
              <View key={i} style={styles.listBox}>
                <Text style={styles.listText}>Adı:
                  <Text style={{ color: "tomato", fontWeight: "bold" }} >{" "}{item.name}</Text>
                </Text>
                <Text style={styles.listText}>Eğitim:
                  <Text style={{ color: "tomato", fontWeight: "bold" }} >{" "}{item.education}</Text>
                </Text>
                <Text style={styles.listText}>Tel:
                  <Text style={{ color: "tomato", fontWeight: "bold" }} >{" "}{item.phoneNumber}</Text>
                </Text>
                <Text style={styles.listText}>E-mail:
                  <Text style={{ color: "tomato", fontWeight: "bold" }} >{" "}{item.email}</Text>
                </Text>
              </View>
            ))}</View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}
          onPress={() => setShowModal(true)}
          activeOpacity={0.5}
        >
          <Text style={styles.btnText}>Dokümanı İndir</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType='fade' visible={showModal} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Eğitim dokümanına ulaşmak için formu doldurunuz...</Text>
            <TextInput value={name}
              onChangeText={(text) => setName(text)} cursorColor={"orange"} style={styles.input} placeholder='İsminizi giriniz...' placeholderTextColor={"gray"} />
            <TextInput value={education}
              onChangeText={(text) => setEducation(text)}
              inputMode='text' cursorColor={"orange"} style={styles.input} placeholder='Eğitim durumunuz...' placeholderTextColor={"gray"} />
            <TextInput value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              inputMode='tel' cursorColor={"orange"} style={styles.input} placeholder='Telefon numaranız' placeholderTextColor={"gray"} />
            <TextInput inputMode='email' value={email}
              onChangeText={(text) => setEmail(text)} cursorColor={"orange"} style={styles.input} placeholder='Mail adresiniz...' placeholderTextColor={"gray"} />
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.btn}
                onPress={handleSend}
                activeOpacity={0.5}
              >
                <Text style={{ color: "white" }}>Gönder</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]}
                onPress={handleClick}
                activeOpacity={0.5}
              >
                <Text style={{ color: "white" }}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingVertical: 30
  },
  bottom: {
    flex: 1
  },
  footer: {
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "90%",
    height: 300,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 10,
    shadowColor: "red"
  },
  scrolView: {
    flexGrow: 1
  },
  scrollHorizontal: {
    height: 150
  },
  categoryView: {
    height: 100,
    gap: 10,
    flexWrap: "wrap",
    marginHorizontal: 30
  },
  categoryText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 22,
    flexDirection: "row",
    borderWidth: 1,
    borderColor:"red",
    borderRadius: 8,
    backgroundColor: "red",
    color: "white"
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 4,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "wheat"
  },
  btnText: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  image: {
    width: "100%",
    height: "100%",

  },
  imgText: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    flex: 1,
    backgroundColor: "#00000066",
    justifyContent: "center",

  },
  modalText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
    marginBottom: 10
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    height: 40,
    padding: 5,
    marginVertical: 5,
    borderRadius: 10,
    paddingStart: 10
  },
  btnView: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "green",
    marginVertical: 5,
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 20
  },
  box2: {
    width: "90%",
    minHeight: 100,
  },
  listBox: {
    height: 150,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center"
  },
  listText: {
    padding: 4,
    fontSize: 16,
    fontWeight: "800"
  }
})

export default App;
