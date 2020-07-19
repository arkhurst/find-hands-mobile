import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ExploreCard as ProfileCard,
  ServicesCard as CredentialCard,
} from '../../../components/Elements/Card';
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';
import Layout from '../../../constants/Layout';
import FontSizes from '../../../constants/FontSizes';
import Colors from '../../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const AboutPro = [
  {
    title: 'About this pro',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet bibendum odio, quis condimentum nisi sodales a. ' +
      ' Maecenas vehicula sed elit sit amet consequat. Aliquam quis libero et elit semper mattis vehicula sed urna.' +
      ' Mauris est urna, iaculis dictum nibh eu, lacinia sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes,' +
      ' nascetur ridiculus mus. Vestibulum ornare risus at nulla tincidunt malesuada. Proin vulputate, est et placerat semper, ante lacus dignissim mi,' +
      'vitae dignissim tellus neque ac neque. Nam metus nulla, viverra in mi laoreet, cursus dictum neque. Mauris malesuada, dui in porttitor semper, sem lorem ' +
      'dapibus ante, non eleifend dolor diam sit amet ligula. In convallis neque quis urna fermentum, ut semper libero porta. Fusce ex urna, sodales sit amet mollis sed, mattis sit amet nibh. Vivamus ac sodales mauris.',
  },
];

const QuestionsAnswers = [
  {
    title: 'How does your business stand out?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet bibendum odio, quis condimentum nisi sodales a. ' +
      ' Maecenas vehicula sed elit sit amet consequat. Aliquam quis libero et elit semper mattis vehicula sed urna.' +
      ' Mauris est urna, iaculis dictum nibh eu, lacinia sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes,' +
      ' nascetur ridiculus mus. Vestibulum ornare risus at nulla tincidunt malesuada. Proin vulputate, est et placerat semper, ante lacus dignissim mi,',
  },
  {
    title: 'What are the types of customers you have worked with?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet bibendum odio, quis condimentum nisi sodales a. ' +
      ' Maecenas vehicula sed elit sit amet consequat. Aliquam quis libero et elit semper mattis vehicula sed urna.' +
      ' Mauris est urna, iaculis dictum nibh eu, lacinia sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes,' +
      ' nascetur ridiculus mus. Vestibulum ornare risus at nulla tincidunt malesuada. Proin vulputate, est et placerat semper, ante lacus dignissim mi,',
  },
  {
    title: 'Can you I trust you with my house alone?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet bibendum odio, quis condimentum nisi sodales a. ' +
      ' Maecenas vehicula sed elit sit amet consequat. Aliquam quis libero et elit semper mattis vehicula sed urna.' +
      ' Mauris est urna, iaculis dictum nibh eu, lacinia sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes,' +
      ' nascetur ridiculus mus. Vestibulum ornare risus at nulla tincidunt malesuada. Proin vulputate, est et placerat semper, ante lacus dignissim mi,',
  },
];
const Credentials = [
  {
    id: 1,
    name: 'user-check',
    credential: 'Background check completed',
  },
  {
    id: 2,
    name: 'certificate',
    credential: 'Certificate of commerce verified',
  },
  {
    id: 3,
    name: 'business-time',
    credential: 'Business Verified',
  },
  {
    id: 4,
    name: 'credit-card',
    credential: 'Payments Verified',
  },
];
export default function ServiceProviderProfile({navigation}) {
  const [activeSections, setActiveSections] = useState([]);
  const [activeFAQs, setActiveFAQs] = useState([]);

  const _renderHeader = (section) => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{section.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'bold',
                color: Colors.mainColor,
                fontSize: FontSizes.t3,
                paddingLeft: 10,
              }}>
              Read more
            </Text>
            <Ionicons
              name="ios-arrow-down"
              style={{ paddingLeft: 10 }}
              size={24}
              color={Colors.mainColor}
            />
          </View>
        </View>
      </>
    );
  };

  const _renderFAQHeader = (section) => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerText, { color: Colors.grey, fontSize:FontSizes.t3 }]}>
            {section.title}
          </Text>
        </View>
      </>
    );
  };
  const _renderContent = (section) => {
    return (
      <>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{section.content}</Text>
        </View>
      </>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };
  const _updateFAQSections = (activeSections) => {
    setActiveFAQs(activeSections);
  };
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <ProfileCard
          style={{
            height: Layout.window.height * 0.25,
            backgroundColor: Colors.white,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            elevation: 4,
          }}>
          <ImageBackground
            source={require('../../../assets/home_improvement.jpg')}
            imageStyle={{
              opacity: 0.6,
              height: '100%',
              flex: 1,
            }}
            style={styles.image}>
            <View style={{ marginTop: 155 }}>
              <Image
                source={require('../../../assets/male.jpeg')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.speciality}>Maximus Installation Co</Text>
            <Text style={styles.ratings}>4.9</Text>
          </ImageBackground>
        </ProfileCard>
        <View style={styles.aboutContainer}>
          <Accordion
            sections={AboutPro}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            underlayColor="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 13,
            paddingVertical: 20,
            backgroundColor: Colors.white,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            elevation: 4,
            marginTop: 10,
          }}>
          <View style={styles.dataCard}>
            <FontAwesome5 name="trophy" size={24} color={Colors.mainColor} />
            <Text style={styles.dataCardText}>135 Hires on Surta</Text>
          </View>
          <View style={[styles.dataCard, { marginLeft: 10 }]}>
            <Ionicons name="ios-time" size={26} color={Colors.mainColor} />
            <Text style={styles.dataCardText}>5 Years in Business</Text>
          </View>
          <View style={[styles.dataCard, { marginTop: 10 }]}>
            <Ionicons name="md-people" size={30} color={Colors.mainColor} />
            <Text style={styles.dataCardText}>9 Employees</Text>
          </View>
          <View style={[styles.dataCard, { marginTop: 10, marginLeft: 10 }]}>
            <AntDesign name="checkcircle" size={24} color={Colors.mainColor} />
            <Text style={styles.dataCardText}>Background Check</Text>
          </View>
        </View>
        {/* Contact your Pro */}
        <View style={styles.contactProContainer}>
          {/* Message Button */}
          <TouchableOpacity>
            <View style={styles.contactItem}>
              <MaterialIcons
                name="message"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.itemText}>Message</Text>
            </View>
          </TouchableOpacity>
          {/* Call button */}
          <TouchableOpacity>
            <View
              style={[
                styles.contactItem,
                { backgroundColor: Colors.mainColor, marginLeft: 10 },
              ]}>
              <MaterialIcons name="call" size={24} color={Colors.white} />
              <Text style={[styles.itemText, { color: Colors.white }]}>
                Call
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.credentialsCard}>
          <Text style={[styles.headerText, { paddingHorizontal: 15 }]}>
            Credentials
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {Credentials.map((item, i) => (
              <View style={styles.credentialItems} key={i}>
                <FontAwesome5
                  name={item.name}
                  size={30}
                  color={Colors.mainColor}
                />
                <Text style={styles.credentialText}>{item.credential}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.credentialsCard, { paddingHorizontal: 15 }]}>
          <Text style={styles.headerText}>Questions & answers with Pro</Text>
          <View>
            <Accordion
              sections={QuestionsAnswers}
              activeSections={activeFAQs}
              renderHeader={_renderFAQHeader}
              renderContent={_renderContent}
              onChange={_updateFAQSections}
              underlayColor="transparent"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.confirmPro}>
        <Text style={{ fontFamily: 'bold', fontSize: FontSizes.h1 }}>
          GHS 206
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Confirm Request')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Engage Pro</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  image: {
    backgroundColor: '#000',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  speciality: {
    fontFamily: 'bold',
    fontSize: FontSizes.t2,
    paddingTop: 15,
  },
  ratings: {
    fontFamily: 'bold',
    fontSize: FontSizes.t2,
    color: 'gold',
  },
  aboutContainer: {
    paddingHorizontal: 5,
    marginTop: 15,
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: FontSizes.t2,
    fontFamily: 'bold',
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  contentText: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'regular',
    lineHeight: 20,
  },
  dataCard: {
    height: Layout.window.height * 0.15,
    width: Layout.window.width * 0.45,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataCardText: {
    paddingTop: 15,
    fontSize: FontSizes.t3,
    fontFamily: 'regular',
    color: Colors.grey,
  },
  contactProContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Layout.window.width / 2.5,
    height: 50,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.tintColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: 5,
  },
  itemText: {
    fontSize: FontSizes.t2,
    fontFamily: 'bold',
    paddingLeft: 5,
  },
  credentialsCard: {
    paddingVertical: 20,
    backgroundColor: Colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginVertical: 10,
  },
  credentialItems: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    width: Layout.window.width / 3,
    padding: 20,
    marginTop: 10,
  },
  credentialText: {
    fontFamily: 'regular',
    fontSize: FontSizes.t4,
    textAlign: 'center',
    paddingTop: 15,
    color: Colors.grey,
  },
  confirmPro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: Colors.white,
  },

  button: {
    width: Layout.window.width / 3.2,
    height: 45,
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'bold',
    fontSize: FontSizes.t3,
    color: Colors.white,
  },
});