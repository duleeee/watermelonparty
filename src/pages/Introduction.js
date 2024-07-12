import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction-page">
      <div className="contentw">
      <h1>Watermelon Beach Party</h1>
      <p><b>The new taste of Dalmatia.</b></p>
        <h2>What is it?</h2>
        <p>It's a <b>drinking game, or as some call it, a drinking sport</b>.</p>
    <p>Two mixed-gender teams "compete" to see who <b>can drink</b> </p>
    <p>more of the <b>icy, refreshing Vodka and Fanta mix</b> </p>
    <p>from a big, juicy watermelon, on a beach.  </p>
    
        <h2>How it Works:</h2>

<p><strong>Beach game with two teams.</strong></p><p> Contestants
have numbers and letters on their
shoulders.</p><p>Vodka-spiked watermelon
with Fanta, </p><p>cut on top, placed in
the middle, between the two teams.</p>

<p><strong>Referee calls a letter and a number.</strong></p>
<p>The called contestants run to the watermelon,</p>
<p>then crouch, kneel, lay, or stand on 
all fours,</p>

<p><strong>then use their mouths, teeth, or lips</strong></p>
<p>to pick the straws inserted in the rind</p>
<p>of the watermelon. <p></p>Then skillfully</p>
<p>insert their straw into the red cut</p>
<p>opening on top of the watermelon <b>(no hands allowed)</b></p>
<p>and drink the refreshing mixture as fast as
they can </p> <p><b>without using their hands</b></p>
<p>until the referee says "STOP".</p>
<p>Then calls the next pair.</p>
<p>It's like:</p>
<p><h1>Run, drink, swim, repeat.</h1></p>

<p> </p>
    
    <h2><b>Rules are basic: </b></h2>
    <p><b>No hands.</b> </p>
    <p>You run only after your number is called. </p>
    <p>You use your mouth to pick and direct the straw inside the watermelon.</p>
    <p> You enjoy yourself and socialize.</p>
    <p><strong>Whoever gets drunk - wins.</strong></p>
    <p><strong>- Whoever socializes - wins.</strong></p> 
    <p>Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
    
        <h2>Schedule:</h2>
        <p>
          <p><strong>Start Time:</strong></p><p></p>The outing starts at <b>1PM</b>. </p>
          <p>We will begin gathering on the beach to get some sun and hydrate or something.<br />
         <p> <strong>Game Start:</strong></p> <p><b>The games will begin at 7:45PM.</b></p>
        </p>
        <h2>Event Location:</h2>
        <p><strong>Location:</strong> Our next event is in Split, Croatia.</p>
<p> Please choose the date during the signup. </p>
        <h2>Post-Event Plans:</h2>
        <p>
          <strong>After-Event:</strong> After the event, we will go to the Bacvice night club where the participants will get </p>
  <p> the FREE ENTRY (worth €10 in value) and a FREE COCKTAIL of your own choosing (additional €7 in value)  </p>
  <p> In total, €17 worth of FREE STUFF with this signup. </p>
        <h2>Price:</h2>
        <p>
          <strong>€12.99 per person.</strong> <p><i>Regular Price:</i></p><p><i>€14.99 per person.</i></p><br />
          <strong>There are only a few spots left so</strong>
         <p><strong>SIGN UP NOW!</strong></p> 
        </p>
      </div>
      <div className="button-container">
        <Link to="/home"><button className="signup-button">Sign me up</button></Link>
      </div>
    </div>
  );
};

export default Introduction;
