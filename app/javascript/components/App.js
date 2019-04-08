import React, { Component } from 'react'
import CreativeQuality from './CreativeQuality'
import styled from 'styled-components'
import { connect, PromiseState } from 'react-refetch'

export const StyledHeader = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
`

class App extends Component {

  constructor(props){
      super(props);
      this.state = {sortBy : this.nullSort, lastSort : "nullSort", scoreSortIsASC : true, nameSortIsASC : true};
  }

  sortByScoreASC(a, b) {
    return  a.score - b.score;
  }

  sortByScoreDSC(a, b) {
    return b.score - a.score
  }

  sortByNameASC(a, b) {
    return ('' + a.name).localeCompare(b.name);
  }

  sortByNameDSC(a, b) {
    return ('' + b.name).localeCompare(a.name);
  }

  nullSort(a, b) {
    return -1
  }

  setSort(sortType) {
    console.log("sort type: "+sortType);
    if (sortType == "score") {
      if(this.state.lastSort == "score") {
        this.setState({scoreSortIsASC : !this.state.scoreSortIsASC});
      }
      if(this.state.scoreSortIsASC) {
        this.setState({sortBy : this.sortByScoreASC});
      } else {
        this.setState({sortBy : this.sortByScoreDSC});
      }
      this.setState({lastSort : "score"});
    } else if (sortType == "name") {
      if (this.state.lastSort == "name") {
        this.setState({nameSortIsASC : !this.state.nameSortIsASC});
      }
      if(this.state.nameSortIsASC) {
        this.setState({sortBy : this.sortByNameASC});
      } else {
        this.setState({sortBy : this.sortByNameDSC});
      }
      this.setState({lastSort : "name"});
    }
    console.log("now sorting by: "+this.state.sortBy);
    console.log("last sort was: "+this.state.lastSort);
  }

  render() {
    const { dataFetch } = this.props
    if (dataFetch.pending) {
      return <div>loading...</div>
    // return <LoadingAnimation/>
    } else if (dataFetch.rejected) {
      return <Error error={dataFetch.reason}/>
    } else if (dataFetch.fulfilled) {
      // console.log(dataFetch.value)
      return (
        <div className="row">
          <div className="col-md-12">

            <div>
              <button onClick={() => this.setSort("score")}>Sort by score</button>
              <button onClick={() => this.setSort("name")}>Sort by name</button>
            </div>
            <StyledHeader>Creative Qualities</StyledHeader>
              {dataFetch.value.sort(this.state.sortBy).map(obj => 
                <CreativeQuality key={obj.id} 
                                 qualityName={obj.name} 
                                 qualityColor={obj.color} 
                                 qualityDescription={obj.description} 
                                 qualityScore={obj.score}>
                </CreativeQuality>)}
          </div>
        </div>
      )
    }
  }
}

export default connect(props => ({
  dataFetch: `http://localhost:3000/creative_qualities.json`,
}))(App)
