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
    <p>Two mixed-gender teams "compete" to see who <b>can drink</b> </p>
    <p>more of the <b>icy, refreshing Vodka and Fanta mix</b> </p>
    <p>from a big, juicy watermelon on a beach.  </p>
    <p>Each contestant has a NUMBER written on their shoulder.</p>
        <h2>How it Works:</h2>
        <p>The referee calls a number, (let's imagine it's yours)</p>
    <p>you realize it's your number, and instantly feel the adrenaline start rushing through your body, </p>
    <p>your heart starts pumping, and you are breatheing faster. You hear the shout "Go!".</p>
    <p>Your legs instannly push you forward, as you feel the sandy beach below your feet movefaster, taking you running towards the watermelon (don't worry is like 7 meters away).</p>
    <p>Your steps speed up as you her your team cheering for you. As you approach the melon </p>
    <p>you see, almost in slow motion, the other participant already kneeling in front of the melon and taking her straw inside the opening on the top, taking the first sip.</p>
    <p>She chose the classic frontal kneel down position. (legitimate on sandy beaches).</p>
<p>You slow down a bit, and decide to put your straw inside your mouth, and slightly biting on it in an attempt to try the famous two palms plant, lying on the stomach position.</p>
  <p> Your your palms and your stomach hit the soft sand, and you manage to hit the opening with a straw in the first try.</p>
      <p>It's a success. You start gulping on the icy citrusy freshness from the melon.</p>
      <p>You feel a slight buzz kicking in, alcohol doing its thing, relaxing, floating, looking at your 'opponent', smiling, as you hear your temamtes cheer you on, you hear the referee say 'STOP'. </p>
<p> You go back and rejoin your team, as you hear the referee call another number.</p>
    <h2><b>Rules are basic: </b></h2>
    <p>You have fun and socialize. You run only after your number is called. You use your mouth to direct the straw inside the watermelon. You drink as fast as you can (or not). You are respectful and makes sure everyone's safe.</p>
    <p>Whoever gets drunk, wins. Whoever socializes, wins. </p> 
    <p>Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
    
        <h2>Schedule:</h2>
        <p>
          <strong>Start Time:</strong> You will get notified about the location at noon. The outing starts at <b>4PM</b>. We will begin gathering on the beach to get some sun and hydrate or something.<br />
          <strong>Game Start:</strong> <b>The games will begin at 7:30PM</b> .
        </p>
        <h2>Event Location:</h2>
        <p><strong>Location:</strong> Our next event is in Split, Croatia,</p>
        <p>on <b>on Friday, June the 28th on a secret beach location but close to the hostel.</b></p>
<p> (The participants will get the exact GPS coordinates via an email.) </p>
        <h2>Post-Event Plans:</h2>
        <p>
          <strong>After-Event:</strong> After the event, we will visit some cool bars in the Old Town, near the Diocletian's Palace.
        </p>
        <h2>Price:</h2>
        <p>
          <strong>€9.99 per person.</strong> <strong><p>Regular Price €12.99.</p></strong><br />
          <strong>Sign Up Now because there are only a few spots left.</strong>
        </p>
      </div>
      <div className="button-container">
        <Link to="/home"><button className="signup-button">Sign me up</button></Link>
      </div>
    </div>
  );
};

export default Introduction;
