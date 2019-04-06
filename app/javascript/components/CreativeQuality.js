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
              {this.props.qualityName}
            </div>

            <div className="panel-body">
              <div className="quality"></div>

              <div className="score">
                <small>your score:</small>
                &mdash;
              </div>

              <p>
                {this.props.qualityDescription}
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default CreativeQuality