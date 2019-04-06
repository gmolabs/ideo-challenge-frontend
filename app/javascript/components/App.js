import React, { Component } from 'react'
import CreativeQuality from './CreativeQuality'
import styled from 'styled-components'
import { connect, PromiseState } from 'react-refetch'

export const StyledHeader = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

class App extends Component {
  render() {
    const { dataFetch } = this.props
    if (dataFetch.pending) {
      return <div>loading...</div>
    // return <LoadingAnimation/>
    } else if (dataFetch.rejected) {
      return <Error error={dataFetch.reason}/>
    } else if (dataFetch.fulfilled) {
      return (
        <div className="row">
          <div className="col-md-12">
            <StyledHeader>Creative Qualities</StyledHeader>
            <div>{JSON.stringify(dataFetch)}</div>
            <CreativeQuality></CreativeQuality>
            <CreativeQuality></CreativeQuality>
            <CreativeQuality></CreativeQuality>
          </div>
        </div>
      )
    }
  }
}

export default connect(props => ({
  dataFetch: `http://localhost:3000/creative_qualities.json`,
}))(App)
