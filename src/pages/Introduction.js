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
        <p>The referee calls a number, (imagine yours)</p>
    <p>you realize you're on. You instantly feel the adrenaline rushing through your body, </p>
    <p>you becomes involontarily faster. You hear your heart pumping. </p>
    <p>The referee shouts: "Go!". Your feel your legs instannly pushing you forward, running towards the watermelon in the middle of th beach (don't worry is like 7 meters away).</p>
    <p>Your steps speed up as you hear your team cheering for you. As you approach the melon </p>
    <p>you see, almost in slow motion, the participant of the opposing team already kneeling in front of the melon and taking her straw with in her mouth, and inside the opening of the watermelon on the top,</p>
    <p>and takig the first long sip. She choose the classic frontal kneel down position, with her palms on the sand. (legitimate on sandy beaches).</p>
<p>You're almost there. You choose a lay down, stomach planting position - the sipping cobra. You grab the straw with your teeth and plant yourself in front of it.</p>
  <p> Your palms and your stomach hit the soft sand, and you manage to hit the opening with a straw in the first try. (those yoga classes show their worth)</p>
      <p>It's a success. You start gulping on the citrusy icy freshness, the mix of ice, Vodka and Fanta with a slight taste of watermelon..</p>
      <p>You feel a slight buzz kicking the back of your legs. Quick alcohol doing its thing - relaxing, floating, smiling at your 'opponent', as you hear your temamtes cheer you on. You hear the referee call 'STOP'. </p>
<p> You go back and rejoin your team, as you hear the referee call the next number.</p>
    <h2><b>Rules are basic: </b></h2>
    <p>You have fun and socialize. You run only after your number is called. You use your mouth to pick, and direct the straw inside the watermelon. (no hands) You drink at your own pace. You are respectful and makes sure everyone's safe.</p>
    <p>Whoever gets drunk, wins - Whoever socializes - wins. </p> 
    <p>Needless to say, <b>we are expecting many winners and lots of fun.</b> :)</p>
    
        <h2>Schedule:</h2>
        <p>
          <strong>Start Time:</strong>The outing starts at <b>4PM</b>. We will begin gathering on the beach to get some sun and hydrate or something.<br />
          <strong>Game Start:</strong> <b>The games will begin at 7:30PM</b> .
        </p>
        <h2>Event Location:</h2>
        <p><strong>Location:</strong> Our next event is in Split, Croatia.</p>
<p> (The participants get notified about the location at noon) </p>
        <h2>Post-Event Plans:</h2>
        <p>
          <strong>After-Event:</strong> After the event, we will go to the Bacvice night club where the participants get </p>
  <p> the FREE ENTRY (worth €10 in value) and a FREE COCKTAIL of their own choosing (additional approx. €7 in value)  </p>
  <p> Totaling €17 worth of FREE STUFF in value for the participants of this outing. </p>
        <h2>Price:</h2>
        <p>
          <strong>€15.99 per person.</strong> <strong><p>Regular Price €19.99.</p></strong><br />
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
