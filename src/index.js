import './main.css'
import { createStore } from 'redux'
import reducers from 'reducers'

const store = createStore(reducers)

document.write('Hello React/Redux!')