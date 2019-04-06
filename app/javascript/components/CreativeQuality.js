import React, { Component } from 'react'
import styled from 'styled-components'
import { connect, PromiseState } from 'react-refetch'

// export const StyledHeader = styled.h1`
//   font-size: 32px;
//   text-transform: uppercase;
//   font-weight: bold;
//   text-align: center;
// `

class CreativeQuality extends Component {
  render() {
    return (
          <div className="col-md-4">
          <div className="panel">
            <div className="panel-heading">
              Creative Quality Name
            </div>

            <div className="panel-body">
              <div className="quality"></div>

              <div className="score">
                <small>your score:</small>
                &mdash;
              </div>

              <p>
                Creative Quality Description
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default CreativeQuality