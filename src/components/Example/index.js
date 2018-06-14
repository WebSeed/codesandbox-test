import React from 'react'

import { Card } from '../../luna-react'
import { Like } from '../../luna-react/icons'

export default () => (
  <Card padded className="c-example-component">
    <h1 className="ln-u-flush-bottom">
      <Like /> Hello World
    </h1>
  </Card>
)
