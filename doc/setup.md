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


+ **Camera Component**

      npm install react-native-camera
      react-native link react-native-camera

    Edit AndroidManifest.xml (android/app/src/main/):

      <uses-permission android:name="android.permission.CAMERA" />
      <uses-feature android:name="android.hardware.camera" />

The following packages are optional:

+ **Install react-navigation**

      npm install react-nagivation

+ **Install react-native-mail**

      npm install react-native-mail

    Manually replace these files in modes_modules/react-native-mail

      copy RNMail.m to nodes_modules/RNMail
      copy RNMailModule.jave to android/src/main/java/com/chirag/RNMail
