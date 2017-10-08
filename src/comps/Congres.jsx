import React from 'react';
import mrpic from './img/rubio.jpg';
import ameri from './img/pol.jpg'



class Congress extends React.Component {

  constructor(props){
    super(props);
    this.state = { name: "??? ???", party: "???", birthday: "??-??-??", pic: ameri };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    let data = require('./db/sen.json');

    const marco = data
      .filter((senator) => { return ( senator.senator_rank === "junior" && senator.state === "FL" ) })
      .map((senator) => { return {
        name: `${senator.person.firstname} ${senator.person.lastname}`,
        party: senator.party,
        birthday: senator.person.birthday
      } })
      .reduce((acc, cv) => { return cv })

    this.setState({ name: marco.name, party: marco.party, birthday: marco.birthday, pic: mrpic });
    setTimeout(() => { this.setState({ name: "??? ???", party: "???", birthday: "??-??-??", pic: ameri});}, 2000);

  }


  render() {
    const senContainer = { backgroundColor: "gray", color: "black", maxWidth: "400px", margin: "0px auto", display: "block", padding: "20px", border: "4px solid white" }

    return(
      <div style={senContainer}>

        <h4>Who is the junior senator for the state of Florida?</h4>
        <button onClick={this.onButtonClick}>Show Senator</button>
        <br/><br/>

        <img src={this.state.pic} alt="Missing Pic."/>
        <div><strong>Name:</strong> {this.state.name}</div>
        <div><strong>Party:</strong> {this.state.party}</div>
        <div><strong>B-Day:</strong> {this.state.birthday}</div>

      </div>
    )
  }

}

export default Congress;
