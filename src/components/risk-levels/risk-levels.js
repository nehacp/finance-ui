import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateRiskLevel } from '../../actions/update-risk-level';
import Header from '../headers';

import './risk-levels.css';

class RiskLevels extends Component {

  updateSelectedLevel(e) {
    this.props.updateLevel(e.target.value);
  }

  componentDidMount() {
    this.props.updateLevel('1');
  }

  render() {
    return (
      <div className="risk-levels-main">
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-8 medium-offset-2 large-8 large-offset-2 cell">
            <div className="grid-x">
              <span className="small-1 medium-1 medium-offset-1 large-1 large-offset-1 cell center risk-type low">1<div>Low</div></span>
              <div className="slide-container small-10 medium-8 large-8 cell">    
                <input 
                  name="risk-range"
                  type="range" 
                  min="1" 
                  max="10"
                  value={this.props.selectedLevel || 0}
                  className="slider" 
                  id="risk-levels"
                  onChange={this.updateSelectedLevel.bind(this)}
                />
              </div>
              <span className="small-1 medium-1 large-1 cell center risk-type high">10<div>High</div></span>
            </div> 
          </div>
        </div>
        <div className="risk-level-header">
          <Header 
            type="risk-level" 
            header={`Risk Level: ${this.props.selectedLevel || 0}`}
            class="risk-level-header"
          />
        </div>
      </div>
    )
  }

 }


const mapStateToProps = (state) => ({ selectedLevel: state.selectedLevel });
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateLevel: updateRiskLevel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RiskLevels);
      