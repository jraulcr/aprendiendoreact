/*const element = document.createElement('h1')
elemento.innerText = 'Hola mundo React'
const container = document.getElementById('root')
container.appendChild(element)*/

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'

const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)

ReactDOM.render(<Card
                    title="Techniques Guides"
                    description="Learn amazing street workout and calisthenics"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                    />, container)