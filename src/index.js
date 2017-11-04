import React from 'react';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';

const App = () => (
    <Artboard 
        name="App" 
        style={{ top: 0, left: 0, height: 142, width: 583 }}>
        <View name="App-View" style={{ backgroundColor: '#f1f1f1', width: '100%', height: '100%', borderColor: '#333', borderWidth: 5 }}>
            <Image name="App-Image"
                source="https://raw.githubusercontent.com/kristinbaumann/react-sketchapp-starter-kit/master/src/img/logo.png"
                style={{ width: '100%', height: 132 }}
            ></Image>
        </View>
    </Artboard>
)

export default (context) => render(<App /> , context.document.currentPage())
