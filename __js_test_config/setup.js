import Enzyme, { shallow, render, mount } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

// provide React globally in tests without having to "import"
global.React = React
// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

Enzyme.configure({ adapter: new Adapter() })
