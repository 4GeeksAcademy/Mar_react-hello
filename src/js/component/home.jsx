import React from "react";

//include images into your bundle
import Sea from "../../img/Sea.svg";
// Navbar
import { Navbar } from "./navbar";
//Jumbotron
import { Jumbotrom } from "./jumbotrom";
import Card from "./card";
// Footer
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotrom />
      <div className="d-flex container justify-content-between flex-wrap">
        <Card title={"Whispers of the Tides"} description={"In the stillness of the shore, the ocean carries ancient secrets, murmuring them to those who dare listen."} imageURL={"https://picsum.photos/id/13/300/200"} />
        <Card title={"Chronicles of the Deep"} description={"A journey through the hidden realms of the ocean, where untold stories and ancient mysteries await beneath the waves."} imageURL={"https://picsum.photos/id/14/300/200"} />
        <Card title={"Songs of the Sirens"} description={"The haunting melodies of the sirens echo across the seas, luring hearts into a realm of beauty, danger, and untold desires."} imageURL={"https://picsum.photos/id/16/300/200"} />
        <Card title={"Lost in the Blue"} description={"Adrift in an endless ocean, where the horizon blurs and the soul seeks meaning in the vast expanse of azure."} imageURL={"https://picsum.photos/id/10/300/200"} />
        <Card title={"Ripples in the Horizon"} description={"Where the sea meets the sky, each ripple tells a story of journeys begun and destinations yet to be discovered."} imageURL={"https://picsum.photos/id/12/300/200"} />
        <Card title={"Songs of the Sirens"} description={"A symphony of allure and mystery, their voices weave enchantments that linger long after the waves have stilled."} imageURL={"https://picsum.photos/id/27/300/200"} />
        <Card title={"Currents of Fate"} description={"The ever-shifting tides pull lives together and apart, weaving destinies through the deep's unseen hands."} imageURL={"https://picsum.photos/id/77/300/200"} />
        <Card title={"The Eternal Sea"} description={"An endless expanse where time fades, and the whispers of the waves hold the secrets of eternity and infinite dreams."} imageURL={"https://picsum.photos/id/50/300/200"} />
        <Card title={"The Depths of Memory"} description={"BBeneath the surface lies a hidden world, where fragments of the past drift like shadows in the deep, waiting to be rediscovered."} imageURL={"https://picsum.photos/id/100/300/200"} />
        <Card title={"Tides of Change"} description={"The relentless ebb and flow reshape the shores, carrying with them the promise of transformation and renewal."} imageURL={"https://picsum.photos/id/125/300/200"} />
        <Card title={"Echoes from the Abyss"} description={"From the shadowy depths rise whispers of forgotten worlds, resonating with secrets only the brave dare to uncover."} imageURL={"https://picsum.photos/id/37/300/200"} />
        <Card title={"Beneath the Azure Waves"} description={"A hidden realm of wonder awaits, where light dances with mystery and magic in the endless blue depths."} imageURL={"https://picsum.photos/id/131/300/200"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
