Bu proje [react-native-web](https://github.com/necolas/react-native-web) ve [Typescript](https://www.typescriptlang.org/) kullanılarak geliştirilmiştir.

[react-native-web](https://github.com/necolas/react-native-web); React-native’in sunduğu olanaklara ek olarak web platformuna da çıktı sağlar.

Hızlı bir başlangıç için [react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo) reposu klonlanarak geliştirme yapılmıştır.

Web Demo: https://h4run.github.io/sikayetvar-app-demo/

### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

- `$ git clone git@github.com:h4run/sikayetvar-app-demo.git`
- `$ cd sikayetvar-app-demo`
- `$ yarn`
- `$ cd packages/mobile/ios`
- `$ pod install`
- `$ cd -`
- `$ yarn workspace web start`
- `$ yarn workspace mobile start`
- Run the project
  - [iOS] Via Xcode
    - `yarn xcode` (open the project on Xcode)
    - Press the Run button
  - [Android] Via Android Studio
    - `yarn studio` (open the project on Android Studio)
    - Press the Run button
  - Via CLI
    - _You may need to launch your device emulator before the next command_
    - `$ yarn android` or `$ yarn ios`
