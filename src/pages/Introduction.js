



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
    <p>from a big, juicy watermelon on the beach.  </p>
    <p>Each contestant has a NUMBER written on their shoulder.</p>
        <h2>How it Works:</h2>
        <p>The referee calls a number,</p>
    <p>you realize it's your number, and instantly feel the adrenaline start rushing through your body, </p>
    <p>your breathing speeds up, as your heart starts pumping.</p>
    <p>Your legs instanly push you forward, as you feel the sandy beach below your feet move, taking you running towards the watermelon in the middle.</p>
    <p>Your steps speed up. As you approach the mellon (don't worry the whole track is like 7 meters) you start seeing, almost in slow motion, </p>
    <p>the other participant kneeling in front of the mellon in front of you and taking her straw inside the opening on the top.</p>
    <p>She's already quickly gulping the sweet nectar from it. She chose the classic frontal kneel down position. (legitimate on sandy beaches).</p>
<p>You slow down a bit, and put your straw inside your mouth slightly biting on it, in an attempt to try </p>
  <p>the famous two palms plant, lying on the stomach position. Your stomach hits the sand.</p>
      <p>It's a success. You are managig to hit the opening with the straw too, and start gulping on the icy citrusy freshness from the mellon.</p>
      <p>You feel a slight buzz kicking in, as you hear your temates cheering you on, and the referee call 'TIME'. </p>

    <h2><b>Rules are basic: </h2>
    <p>You have fun and socialize. You run only after your number is called. You use your mouth to direct the straw inside the watermelon. You drink as fast as you can (or not). You are respectul and makes sure everyone's safe.</p>
    <p>Whoever gets drunk, wins. Whoever socializes, wins.</b> </p> 
    <p>Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
        <h2>Schedule:</h2>
        <p>
          <strong>Start Time:</strong> <b>The outing starts at about 16:00.</b>. <br />
          <strong>Game Start:</strong> We will begin gathering on the beach to get some sun and hydrate or something before the game that starts at 19:30.
        </p>
        <h2>Event Location:</h2>
        <p><strong>Location:</strong> Our next event is in Split, Croatia,</p>
        <p>on <b>Wednesday, June 26th, and then on Friday, June the 28th, both at a secret location. (participants will get notified)</p>
  
        <h2>Post-Event Plans:</h2>
        <p>
          <strong>After-Event:</strong> After the event, we will visit some cool bars in the Old Town, near the Diocletian's Palace.
        </p>
        <h2>Participation Details:</h2>
        <p>
          <strong>Sign-Up:</strong> Please ask at the front desk if there are any spots left (our DB is down for the moment), and show them the screenshot of the confirmation page after you finish sign up here, to sign up.<br />
          <strong>Cost:</strong> <b>The cover is 12 euros per person </b>. and it includes lots of fun, socializing, and some refreshing watermelon bubbles.
        </p>
  <To sign up, please press the signup button and send the confirmation screensot to watermelonpartysplit@gmail.com. (Our DB is down at the moment)
      </div>
      <div className="button-container">
        <Link to="/home"><button className="signup-button">Sign me up</button></Link>
      </div>
    </div>
  );
};

export default Introduction;

