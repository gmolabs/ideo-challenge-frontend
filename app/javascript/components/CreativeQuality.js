import React, { Component } from 'react'
import styled from 'styled-components'
import { connect, PromiseState } from 'react-refetch'
import collaborationImage from '../../assets/images/qualityIcons/collaboration.png'
import empowermentImage from '../../assets/images/qualityIcons/empowerment.png'
import purposeImage from '../../assets/images/qualityIcons/purpose.png'
import ReadMoreLess from './ReadMoreLess'



export const StyledPanel = styled.div`
  text-align: center;
  border-width: 5px;
  border-radius: 5px;
  box-shadow: 0px 1px 24px 0px rgba(0,0,0,0.33);
  padding-bottom: 1px;
  margin-bottom: 21px;
  ${({ qualityName }) => qualityName=="Collaboration" && `
    background: #e6c937;
    border-color: #e6c937;
  `}
  ${({ qualityName }) => qualityName=="Empowerment" && `
    background: #5bc9b0;
    border-color: #5bc9b0;
  `}
  ${({ qualityName }) => qualityName=="Purpose" && `
    background: #9e5fa0;
    border-color: #9e5fa0;
  `}
`
//^^^not very DRY...TODO: store qualityName and hex as object and map

export const StyledBarContainer = styled.div`
`

export const StyledBarDiv = styled.div`
  background: ${({qualityColor}) => qualityColor}; 
  width: ${({qualityScore}) => qualityScore / 2}%; 
  height: 10px;
  margin-left: ${({qualityScoreIsPositive}) => qualityScoreIsPositive ? "50%" : "0%" }
  float: ${({qualityScoreIsPositive}) => qualityScoreIsPositive ? "left" : "right" }
  clear: both;
  margin-right: ${({qualityScoreIsPositive}) => qualityScoreIsPositive ? "0%" : "50%" }
`

export const StyledPanelHeading = styled.div`
  color: white;
  border-radius: 0;
  font-size: 24px;
  padding: 10px 15px;
`

export const StyledPanelBody = styled.div`
  border-radius: 0px;
  background: white;
  margin: 5px;
  padding: 10px;
`

export const StyledQuality = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  text-align: center;
  background-size: 100%;
  ${({ qualityName }) => qualityName=="Collaboration" && `
    background-image: url(${collaborationImage});
  `}
  ${({ qualityName }) => qualityName=="Empowerment" && `
    background-image: url(${empowermentImage});
  `}
  ${({ qualityName }) => qualityName=="Purpose" && `
    background-image: url(${purposeImage});
  `}
`

export const StyledP = styled.div`
  text-align: left;
  margin-bottom: 3px;
  clear: both;
`

export const StyledScore = styled.div`
  small {
    display: block;
    font-size: 12px;
  }
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 48px;
`


class CreativeQuality extends Component {
  render() {
    return (
        <div className="col-md-4">
          <StyledPanel qualityName={this.props.qualityName}>
            <StyledPanelHeading>
              {this.props.qualityName}
            </StyledPanelHeading>

            <StyledPanelBody>
              <StyledQuality qualityName={this.props.qualityName}></StyledQuality>

              <StyledScore>
                <small>your score:</small>
                {this.props.qualityScore}
              </StyledScore>
              <StyledBarContainer>
                <StyledBarDiv qualityScoreIsPositive={this.props.qualityScore >= 0 ? true : false} qualityScore={Math.abs(this.props.qualityScore)} qualityColor={this.props.qualityColor}></StyledBarDiv>
              </StyledBarContainer>
              <StyledP>
                <ReadMoreLess nChars={120} text={this.props.qualityDescription} />
              </StyledP>
            </StyledPanelBody>
          </StyledPanel>
        </div>
    )
  }
}

export default CreativeQuality