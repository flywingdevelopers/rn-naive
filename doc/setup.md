Install Related packages for naive library
------------------------------------------

Complete the installation of below packages.

+ **react-native-vector-icons**

      npm install react-native-vector-icons --save

    Edit android/app/build.gradle:

      ...
      project.ext.vectoricons = [
          iconFontNames: [ 'MaterialIcons.ttf', 'Ionicons.ttf' ]
      ]
      apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
      ...

+ **International Setting**

      npm install intl


+ **DatePicker Component**

      npm install react-native-datepicker


+ **SideMenu Component**

      npm install react-native-side-menu


The following packages are optional:

+ **Camera Component**

      npm install react-native-camera
      react-native link react-native-camera

    Edit AndroidManifest.xml (android/app/src/main/):

      <uses-permission android:name="android.permission.CAMERA" />
      <uses-feature android:name="android.hardware.camera" />

+ **Install react-navigation**

      npm install react-navigation

+ **Install react-native-mail**

      npm install https://github.com/flywingdevelopers/react-native-mail.git

    Or, if you install from standard package,

      npm install react-native-mail

    then manually replace these files in node_modules/react-native-mail

      copy asset/RNMail.m to node_modules/react-native-mail/RNMail
      copy asset/RNMailModule.jave to node_modules/react-native-mail/android/src/main/java/com/chirag/RNMail
