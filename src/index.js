import React from 'react'
import { render } from 'react-dom'

import { SiteWrap } from './luna-react'

import './css/styles.css'

import Example from './components/Example'

const App = () => (
  <SiteWrap padded className="ln-u-soft-top">
    <Example />
  </SiteWrap>
)

render(<App />, document.getElementById('root'))
