import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction-page">
      <div className="contentw">
        <h1>Watermelon Beach Party</h1>
        <h2>What is it?</h2>
        <p>It's a <b>drinking game, or as some call it, a drinking sport</b>.</p>
    <p>Two mixed-gender teams compete to see who <b>can drink more</b> </p>
    <p>of the <b>icy, refreshing Vodka and Fanta mix</b> </p>
    <p>from a big, juicy WATERMELON on the beach.  </p>
    <p>Team Beach and Hostel Mint have <b>24 PARTICIPANTS total, 12 in each TEAM, 6 MALE and 6 FEMALE.</b></p> 
    <p>Each contestant has a NUMBER written on their shoulder, 1 to 12, </p>
    <p>and their DRINKING NAME below it.</p>
        <h2>How it Works:</h2>
        <p>The coach picks a number, </p>
    <p>and the participants with the chosen number, of both teams, leap across the beach running (for like 7 meters, don't worry) </p>
    <p>to drink from the watermelon placed in the center, </p>
    <p><b>THROUGH A STRAW</b>.</p>
    <p><b>Whoever gets drunk, wins.</b> </p> 
    <p>Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
        <h2>Schedule:</h2>
        <p>
          <strong>Start Time:</strong> The outing starts at about <b>16:00</b>. We will begin gathering on the beach to get some sun and hydrate or something.<br />
          <strong>Game Start:</strong> <b>The games will begin at 19:30</b> .
        </p>
        <h2>Event Location:</h2>
        <p><strong>Location:</strong> Our next event is in Split, Croatia,</p>
        <p>on <b>Wednesday, June 26th, at Kasjuni Beach.</b> </p> 
        <p>It is <b>a must-see beach </b> located west of the city, right next to Marjan Hill.</p>
        <p>The place features <b>a DJ on the beach, beds, and a bar.</b></p>
      
        <h2>Post-Event Plans:</h2>
        <p>
          <strong>After-Event:</strong> After the event, we will visit some cool bars in the Old Town, near the Diocletian's Palace.
        </p>
        <h2>Participation Details:</h2>
        <p>
          <strong>Sign-Up:</strong> The signup sheet is at the front desk.<br />
          <strong>Cost:</strong> The cover is 20 euros per person (<b>12 euros for hostel guests</b> of the Beach and Mint hostels). and it includes lots of refreshing watermelon bubbles.
        </p>
      </div>
      <div className="button-container">
        <Link to="/home"><button className="signup-button">Sign me up</button></Link>
      </div>
    </div>
  );
};

export default Introduction;
