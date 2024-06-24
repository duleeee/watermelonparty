import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction-page">
      <div className="contentw">
        <h1>Watermelon Beach Party</h1>
        <h2>What is it?</h2>
        <p>It's a <b>drinking game, or as some call it, a drinking sport</b>. Two mixed-gender teams compete to see who can drink more of the <b>icy, refreshing Vodka and Fanta mix</b> from a big, juicy watermelon on the beach.  Team Beach and Hostel Mint have <b>24 contestants</b> total, 12 in each team, 6 male and 6 female. Each contestant has a number written on their shoulder from 1 to 12 and their drinking name written on their arm.</p>
        <h2>How it Works:</h2>
        <p>The coach picks a number, and the contestants with that number from both teams run across the beach (like 7 meters, don't worry) to drink from the watermelon placed between the two teams, with a <b>STRAW</b>. <b>Whoever gets drunk, wins.</b> Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
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
