import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const PrivacyScreen = (props) => {
  const { goBack } = props.navigation;
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.tcContainer}
        scrollEventThrottle={10}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setAccepted(true);
          }
        }}>
        <Text style={styles.title}>PRIVACY POLICY</Text>
        <Text style={styles.tcP}>
          Welcome to Naka’s Privacy Policy ("Policy"). We suggest you read this
          in conjunction with our Terms and Conditions of Use. Thank you for
          taking the time to read it. Whilst you're enjoying the Naka mobile
          application ("App"), we collect some information about you. In
          addition, you may choose to use the App to share information with
          other users, including your friends and contacts ("Users"). We may
          also need to share your information sometimes.
        </Text>
        <Text style={styles.tcP}>
          We appreciate that you trust us with your information and we intend to
          always keep that trust. This starts with making sure you understand
          the information we collect, why we collect it, how it is used and your
          choices regarding your information. This Policy describes our privacy
          practices in plain language, keeping legal and technical jargon to a
          minimum.
        </Text>
        <Text style={styles.tcP}>
          Naka is a global app, and your information will be sent to and used in
          the Canada regardless of the country you reside in. This Policy
          explains how we protect your personal data when we transfer it
          overseas, so please read very carefully! If you have any questions or
          comments about this Policy, please feel free to contact us at
          nakaconnect@gmail.com.{' '}
        </Text>
        <Text style={styles.tcP}>EFFECTIVE DATE: DECEMBER 31st, 2021</Text>
        <Text style={styles.heading1}>1. INFORMATION WE COLLECT</Text>
        <Text style={styles.tcP}>
          We collect information generated as you use our services, for example
          access logs, as well as information from third parties, like when you
          access our services through a social media account. If you want
          additional info, we go into more detail below.
        </Text>
        <Text style={styles.heading4}>User information</Text>
        <Text style={styles.tcP}>
          You choose to give us certain information when using our services.
          When you create an account, you provide us with at least your login
          credentials, as well as some basic details necessary for the service
          to work, such as your gender and date of birth. When you complete your
          profile, you can share with us additional information, such as details
          on your personality, lifestyle, interests and other details about you,
          as well as content such as photos and videos. To add certain content,
          like pictures or videos, you may allow us to access your camera or
          photo album. Some of the information you choose to provide us may be
          considered “special” or “sensitive” in certain jurisdictions, for
          example your racial or ethnic origins, sexual orientation and
          religious beliefs. By choosing to provide this information, you
          consent to our processing of that information.
        </Text>
        <Text style={styles.tcP}>
          When you participate in surveys, focus groups or market studies, you
          give us your insights into products and services, responses to our
          questions and testimonials. When you choose to participate in our
          promotions, events or contests, we collect the information that you
          use to register or enter. If you contact our customer care team, we
          collect the information you give us during the interaction. Sometimes,
          we monitor or record these interactions for training purposes and to
          ensure a high quality of service. If you ask us to communicate with or
          otherwise process information of other people (for example, if you ask
          us to send an email on your behalf to one of your friends), we collect
          the information about others that you give us in order to complete
          your request. Of course, we also process your chats with other users
          as well as the content you publish, as part of the operation of the
          services.
        </Text>
        <Text style={styles.heading4}>Additional information</Text>
        <Text style={styles.tcP}>
          In addition to the information you provide us directly, we receive
          information about you from others. Other users may provide information
          about you as they use our services. For instance, we may collect
          information about you from other users if they contact us about you..
          We may receive info about you from our partners, for instance where
          Naka ads are published on a partner’s websites and platforms (in which
          case they may pass along details on a campaign’s success).
        </Text>
        <Text style={styles.tcP}>
          When you use our services, we collect information about which features
          you’ve used, how you’ve used them and the devices you use to access
          our services. We collect information about your activity on our
          services, for instance how you use them (e.g., date and time you
          logged in, features you’ve been using, searches or search parameters,
          clicks and pages which have been shown to you, referring webpage
          address, advertising that you click on) and how you interact with
          other users (e.g., users you connect and interact with, time and date
          of your exchanges, number of messages you send and receive).
        </Text>
        <Text style={styles.tcP}>
          We collect information from and about the device(s) you use to access
          our services, including: hardware and software information such as IP
          address, device ID and type, device ccspecific and apps settings and
          characteristics, app crashes, advertising IDs (such as Google’s AAID
          and Apple's IDFA, both of which are randomly generated numbers that
          you can reset by going into your device’ settings), browser type,
          version and language, operating system, time zones, identifiers
          associated with cookies or other technologies that may uniquely
          identify your device or browser (e.g., IMEI/UDID and MAC address); and
          information on your wireless and mobile network connection, like your
          service provider and signal strength.{' '}
        </Text>
        <Text style={styles.tcP}>
          If you give us permission, we will be able to collect your precise
          geolocation (latitude and longitude) in order to offer you features
          that make use of it. Such geolocation is collected through various
          means, depending on the service and device you’re using, including
          GPS, Bluetooth or Wi-Fi connections. If you decline permission for us
          to collect your geolocation, we will not collect it. Similarly, if you
          consent, we may collect your photos and videos (for instance, if you
          want to publish a photo, video or streaming on the services).{' '}
        </Text>
        <Text style={styles.tcP}>
          Please be careful about posting sensitive details about yourself on
          your profile. While you may voluntarily provide this information to us
          when you create your profile, there is no requirement to do so. Please
          remember that photographs that you post on Naka may reveal information
          about yourself as well. Where you do upload and choose to tell us
          sensitive information about yourself, including through adding certain
          information to your profile, you are explicitly consenting to our
          processing of your information and making this public to other users.
          When you post information about yourself or use the messaging
          function, the amount of personal information you share is at your own
          risk.
        </Text>
        <Text style={styles.heading4}>Data Storage</Text>
        <Text style={styles.tcP}>
          By using the App, you acknowledge that Naka is a global app operating
          through servers located in a number of countries around the world,
          including the Canada. If you live in a country with data protection
          laws, the storage of your personal data may not provide you with the
          same protections as you enjoy in your country of residence
        </Text>
        <Text style={styles.heading4}>Geolocation Information</Text>
        <Text style={styles.tcP}>
          If you turn these features on, when you use your mobile, we will
          collect information about WiFi access points as well as other location
          information about your longitude and latitude and may save your
          device's coordinates to offer certain features to you. This
          information helps us identify your physical location and we may use it
          to personalise the App and make it easier for you to interact with
          other Users, by enabling the information to be displayed and shared
          with other members choosing to view “nearby” posts.
        </Text>
        <Text style={styles.tcP}>
          If you have enabled location services, but wish to turn them off, you
          can do so by the following methods:
        </Text>
        <Text style={styles.tcL}>
          1. iPhone app — settings, privacy, location services, Naka
        </Text>
        <Text style={styles.tcL}>
          2. Android — settings, location, Naka, permissions, location
        </Text>
        <Text style={styles.heading4}>Log and Usage Data</Text>
        <Text style={styles.tcP}>
          We keep your personal information only as long as we need it for
          legitimate business purposes and as permitted by applicable law.
        </Text>
        <Text style={styles.tcP}>
          In practice, we delete or anonymise your information upon deletion of
          your account (following the safety retention window), unless:
        </Text>
        <Text style={styles.tcL}>
          1. we must keep it to comply with applicable law (for instance, some
          “traffic data” is kept for one year to comply with statutory data
          retention obligations);
        </Text>
        <Text style={styles.tcL}>
          2. we must keep it to evidence our compliance with applicable law (for
          instance, records of consents to our Terms, Privacy Policy and other
          similar consents are kept for five years);
        </Text>
        <Text style={styles.tcL}>
          3. there is an outstanding issue, claim or dispute requiring us to
          keep the relevant information until it is resolved; or
        </Text>
        <Text style={styles.tcL}>
          4. the information must be kept for our legitimate business interests,
          such as fraud prevention and enhancing users' safety and security. For
          example, information may need to be kept to prevent a user who was
          banned for unsafe behaviour or security incidents from opening a new
          account.
        </Text>
        <Text style={styles.heading4}>Links</Text>
        <Text style={styles.tcP}>
          Where Naka uses machine learning, for example, to help us develop a
          better matching system to provide you with the Naka social networking
          service, we may need to keep personal information for a longer period
          than the retention periods explained above, to enable the machine
          learning to work properly. Where this is the case, we always seek to
          minimise the amount of personal information that is used and we ensure
          that it is ring-fenced and kept securely from other user personal
          information. We regularly review the period for which personal
          information is required for machine learning purposes and delete any
          identifiable information when it is no longer required.
        </Text>
        <Text style={styles.heading4}>Cookies</Text>
        <Text style={styles.tcP}>
          Cookies are small files transferred to your computer's hard disk based
          on sites or apps you access. They typically contain information about
          the source of the cookie, and if or when the cookie will expire.
          Cookies may also have information about your device, user settings,
          browsing history or activity, website visits, recognises you and your
          preferences each time you visit Naka, and ensures site functionality
          and enables us to provide the services our members request.
        </Text>
        <Text style={styles.tcP}>
          We use and may allow others to use cookies and similar technologies
          (e.g., web beacons, pixels) to recognize you and/or your device(s).
          The cookies we collect enable us to learn how people interact with
          Naka, which in turn helps us make a better product for you! Cookies
          store information about your website visits and can recognise you and
          your preferences each time you visit the Naka site. They help us to
          provide a better service to you.
        </Text>
        <Text style={styles.tcP}>
          If for any reason you decide that you do not want all of your Naka
          activities to be stored you may set your browser and mobile settings
          to block cookies and local storage devices, but please remember that
          if you do so, you may not be able to access all of the features Naka
          offers.{' '}
        </Text>
        <Text style={styles.tcP}>
          These are specific for web browsers, and since Naka is a mobile-web
          app there are a few limited use-cases for cookies on Naka:
        </Text>
        <Text style={styles.tcL}>
          1. When you visit our help center, you are redirected from the app to
          our Naka Support Center
        </Text>
        <Text style={styles.tcL}>
          2. When you visit nakaconnect.com through a web browser (like Safari
          or Chrome)
        </Text>
        <Text style={styles.tcP}>
          We use Google Analytics to collect information about how visitors use
          the site. The cookies collect information in an anonymous form,
          including the number of visitors to the App, where visitors have come
          from and the pages they visited. For more information about Google's
          Privacy Policy, please visit http://www.google.com/intl/en/policies/
        </Text>
        <Text style={styles.heading1}>2. USE OF INFORMATION</Text>
        <Text style={styles.tcP}>
          The main goal we use your information is to deliver and improve our
          services to you. In order to deliver an enjoyable experience to you,
          we may use your Registration and other information to:
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Administer your account and provide our services to you
        </Text>
        <Text style={styles.tcL}> ◦ Create and manage your account</Text>
        <Text style={styles.tcL}> ◦ offer you our services and features</Text>
        <Text style={styles.tcL}>
          {'\u2022'} To help you connect with other users
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Analyze your profile and usage behavior and that of other users to
          recommend meaningful connections
        </Text>
        <Text style={styles.tcL}> ◦ Show users’ profiles to one another</Text>
        <Text style={styles.tcL}>
          {'\u2022'} To ensure a consistent experience across your devices
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Link the various devices you use so that you can enjoy a consistent
          experience of our services on all of them. We do this by linking
          devices and browser data, such as when you log into your account on
          different devices or by using partial or full IP address, browser
          version and similar data about your devices to help identify and link
          them
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} To serve you relevant offers and ads
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Administer sweepstakes, contests, discounts or other offers
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Develop, display and track content and advertising tailored to your
          interests on our services and other sites
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Communicate with you by email, phone, social media or mobile device
          about products or services that we think may interest you
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} To improve our services and develop new ones
        </Text>
        <Text style={styles.tcL}> ◦ Administer focus groups and surveys</Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Conduct research and analysis of users’ behavior to improve our
          services and content (for instance, we may decide to change the look
          and feel or even substantially modify a given feature based on users’
          behavior)
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Develop new features and services (for example, we may decide to
          build a new interests-based feature further to requests received from
          users)
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} To prevent, detect and fight fraud or other illegal or
          unauthorized activities
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Address ongoing or alleged misbehavior on and off-platform
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Retain data related to fraudulent activities to prevent against
          recurrences
        </Text>
        <Text style={styles.tcL}>{'\u2022'} To ensure legal compliance</Text>
        <Text style={styles.tcL}> ◦ Comply with legal requirement</Text>
        <Text style={styles.tcL}> ◦ Assist law enforcement</Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Enforce or exercise our rights, for example our Terms
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ This could include any information that is relevant to the issue
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} To process your information as described above, we rely on
          the following legal bases:
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Provide our service to you: Most of the time, the reason we process
          your information is to perform the contract that you have with us. For
          instance, as you go about using our service to build meaningful
          connections, we use your information to maintain your account and your
          profile, to make it viewable to other users and recommend other users
          to you.
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Legitimate interests: We may use your information where we have
          legitimate interests to do so. For instance, we analyze users’
          behavior on our services to continuously improve our offerings, we
          suggest offers we think might interest you, and we process information
          for administrative, fraud detection and other legal purposes.
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ Consent: From time to time, we may ask for your consent to use your
          information for certain specific reasons. You may withdraw your
          consent at any time by contacting us at the address provided at the
          end of this Privacy Policy.
        </Text>
        <Text style={styles.heading1}>3. HOW WE SHARE INFORMATION</Text>
        <Text style={styles.tcP}>
          Since our goal is to help you make meaningful connections, the main
          sharing of users’ information is with other people, as per your
          privacy settings in the limited circumstances:{' '}
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} With your consent or at your request: If you consent to
          share your information with third parties, such as when you use a
          third party web client or application to access your Account.{' '}
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} With other people: We share your information with other
          people as per your privacy settings (and in the case of any sharing
          features available on Naka, the individuals or apps with whom you may
          choose to share your information with) when you voluntarily disclose
          information on the service (including your public profile). Please be
          careful with your information and make sure that the content you share
          is stuff that you’re comfortable being publicly viewable since neither
          you nor we can control what others do with your information once you
          share it..
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} With our service providers and partners: We use third
          parties to help us operate and improve our services. These third
          parties assist us with various tasks, including data hosting and
          maintenance, analytics, customer care, marketing, advertising, payment
          processing and security operations. We may also share information with
          partners who distribute and assist us in advertising our services. For
          instance, we may share limited information on you after anonymizing to
          advertising partners. We follow a strict vetting process prior to
          engaging any service provider or working with any partner. All of our
          service providers and partners must agree to strict confidentiality
          obligations.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Payment Processing and Telecommunications Companies: to
          facilitate payment for our premium service.{' '}
        </Text>
        <Text style={styles.tcL}>{'\u2022'} Law and Harm: </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ We may disclose your information if reasonably necessary: (i) to
          comply with a legal process, such as a court order, subpoena or search
          warrant, government / law enforcement investigation or other legal
          requirements; (ii) to assist in the prevention or detection of crime
          (subject in each case to applicable law); or (iii) to protect the
          safety of any person.
        </Text>
        <Text style={styles.tcL}>
          {' '}
          ◦ We may also share information: (i) if disclosure would mitigate our
          liability in an actual or threatened lawsuit; (ii) as necessary to
          protect our legal rights and legal rights of our users, business
          partners or other interested parties; (iii) to enforce our agreements
          with you; and (iv) to investigate, prevent, or take other action
          regarding illegal activity, suspected fraud or other wrongdoing.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Business Transfers: In the event that Naka undergoes a
          business transition or change of ownership, such as a merger,
          acquisition by another company, re-organisation, or sale of all or a
          portion of its assets, or in the event of insolvency or
          administration, we may be required to disclose your personal data.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Aggregated Information: We may use and share non-personal
          information (meaning information that, by itself, does not identify
          who you are such as device information, general demographics, general
          behavioral data, geolocation in de-identified form), as well as
          personal information in hashed, non-human readable form, under any of
          the above circumstances. We may also share this information with other
          third parties (notably advertisers) to develop and deliver targeted
          advertising on our services and on websites or applications of third
          parties, and to analyze and report on advertising you see. We may
          combine this information with additional non-personal information or
          personal information in hashed, non-human readable form collected from
          other sources
        </Text>
        <Text style={styles.heading1}>4. YOUR RIGHTS</Text>
        <Text style={styles.tcP}>
          We want you to be in control of your information, so we have provided
          you with the following tools:
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Access / Update tools in the service. Tools and account
          settings that help you to access, rectify or delete information that
          you provided to us and that’s associated with your account directly
          within the service. If you have any question on those tools and
          settings, please contact our customer care team.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Device permissions. Mobile platforms have permission
          systems for specific types of device data and notifications, such as
          phone book and location services as well as push notifications. You
          can change your settings on your device to either consent or oppose
          the collection of the corresponding information or the display of the
          corresponding notifications. Of course, if you do that, certain
          services may lose full functionality.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Deletion. You can delete your account by using the
          corresponding functionality directly on the service.
        </Text>
        <Text style={styles.tcP}>
          We want you to be aware of your privacy rights. Here are a few key
          points to remember:
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Reviewing your information. Applicable privacy laws may
          give you the right to review the personal information we keep about
          you (depending on the jurisdiction, this may be called right of
          access, right of portability or variations of those terms). You can
          request a copy of your personal information by emailing us.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Updating your information. If you believe that the
          information we hold about you is inaccurate or that we are no longer
          entitled to use it and want to request its rectification, deletion or
          object to its processing, please contact us.
        </Text>
        <Text style={styles.tcP}>
          For your protection and the protection of all of our users, we may ask
          you to provide proof of identity before we can answer the above
          requests.
        </Text>
        <Text style={styles.tcP}>
          Keep in mind, we may reject requests for certain reasons, including if
          the request is unlawful or if it may infringe on trade secrets or
          intellectual property or the privacy of another user. If you wish to
          receive information relating to another user, such as a copy of any
          messages you received from him or her through our service, the other
          user will have to contact our Privacy Officer to provide their written
          consent before the information is released.
        </Text>
        <Text style={styles.tcP}>
          Also, we may not be able to accommodate certain requests to object to
          the processing of personal information, notably where such requests
          would not allow us to provide our service to you anymore. For
          instance, we cannot provide our service if we do not have your date of
          birth.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Uninstall. You can stop all information collection by an
          app by uninstalling it using the standard uninstall process for your
          device. If you uninstall the app from your mobile device, the unique
          identifier associated with your device will continue to be stored. If
          you re-install the application on the same mobile device, we will be
          able to re-associate this identifier to your previous transactions and
          activities.
        </Text>
        <Text style={styles.tcL}>
          {'\u2022'} Accountability. In certain countries, including in the
          European Union, you have a right to lodge a complaint with the
          appropriate data protection authority if you have concerns about how
          we process your personal information. The data protection authority
          you can lodge a complaint with notably may be that of your habitual
          residence, where you work or where we are established.
        </Text>
        <Text style={styles.heading1}>5. HOW WE PROTECT YOUR INFORMATION</Text>
        <Text style={styles.tcP}>
          We work hard to protect you from unauthorized access to or alteration,
          disclosure or destruction of your personal information. As with all
          technology companies, although we take steps to secure your
          information, we do not promise, and you should not expect, that your
          personal information will always remain secure.
        </Text>
        <Text style={styles.tcP}>
          We regularly monitor our systems for possible vulnerabilities and
          attacks and regularly review our information collection, storage and
          processing practices to update our physical, technical and
          organizational security measures.
        </Text>
        <Text style={styles.tcP}>
          We may suspend your use of all or part of the services without notice
          if we suspect or detect any breach of security. If you believe that
          your account or information is no longer secure, please notify us
          immediately.
        </Text>
        <Text style={styles.heading1}>
          6. HOW LONG WE RETAIN YOUR INFORMATION
        </Text>
        <Text style={styles.tcP}>
          We keep your personal information only as long as we need it for
          legitimate business purposes (as laid out in Section 2 and as
          permitted by applicable law.
        </Text>
        <Text style={styles.tcP}>
          In practice, we delete or anonymize your information upon deletion of
          your account, unless:
        </Text>
        <Text style={styles.tcL}>
          1. we must keep it to comply with applicable law;
        </Text>
        <Text style={styles.tcL}>
          2. we must keep it to evidence our compliance with applicable law;
        </Text>
        <Text style={styles.tcL}>
          3. there is an outstanding or potential issue, claim or dispute
          requiring us to keep the relevant information until it is resolved; or
        </Text>
        <Text style={styles.tcL}>
          4. the information is kept for our legitimate business interests, such
          as fraud prevention and enhancing users' safety and security. For
          example, information may need to be kept to prevent a user who was
          banned for unsafe behavior or security incidents from opening a new
          account.
        </Text>
        <Text style={styles.tcP}>
          Keep in mind that even though our systems are designed to carry out
          data deletion processes according to the above guidelines, we cannot
          promise that all data will be deleted within a specific timeframe due
          to technical constraints.
        </Text>
        <Text style={styles.heading1}>12. CHILDREN’S PRIVACY</Text>
        <Text style={styles.tcP}>
          Our services are restricted to users who are 17 years of age or older.
          We do not permit users under the age of 17 on our platform and we do
          not knowingly collect personal information from anyone under the age
          of 17. If you suspect that a user is under the age of 17 please use
          the reporting mechanism available through the service.
        </Text>
        <Text style={styles.heading1}>13. PRIVACY POLICY CHANGES</Text>
        <Text style={styles.tcP}>
          Because we’re always looking for new and innovative ways to help you
          build meaningful connections, this policy may change over time. We
          will notify you before any material changes take effect so that you
          have time to review the changes.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = {
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    flex: 1,
  },

  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  },
  heading1: {
    fontSize: 20,
  },
  heading4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};
export default PrivacyScreen;
