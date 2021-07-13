/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fafafa;
`;

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StyledView>
        <View>Hello world!</View>
      </StyledView>
    </SafeAreaView>
  );
};

export default App;
