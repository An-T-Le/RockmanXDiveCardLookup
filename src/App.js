import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import data from "./Cards.json";
import Images from "./Images.js";
function EffectParser(effect) {
  //Return nothing if effect is empty
  if (effect.includes("N/A")) {
    return;
  }
  else {
    var imageTag = null;
    var cardEffectText = effect.substring(effect.indexOf(".png ") + 4);
    var cardTypeBlueImageTag = <img src={'/images/Card_Blue.png'} alt={'Card_Blue.png'} width={64} height={64}></img>;
    var cardTypeYellowImageTag = <img src={'/images/Card_Yellow.png'} alt={'Card_Yellow.png'} width={64} height={64}></img>;
    var cardTypeRedImageTag = <img src={'/images/Card_Red.png'} alt={'Card_Red.png'} width={64} height={64}></img>;
    var cardTypeGreenImageTag = <img src={'/images/Card_Green.png'} alt={'Card_Green.png'} width={64} height={64}></img>;
    var imageName = effect.substring(0, effect.indexOf(".png ") + 4).replace(" ", "_");
    var requirementImagesTag = [];
    var requirementsText = cardEffectText.substring(cardEffectText.indexOf(":"));
    var requirementsSplit = requirementsText.split("1");
    imageTag = <img src={'/images/' + imageName} alt={imageName} width={64} height={64}></img>;

    if (requirementsText.includes("mug.png")) {
      requirementImagesTag.push()
    }


  }

}
function App() {
  const jsonData = require('./Cards.json');

  //const data = [{"name":"test1"},{"name":"test2"}];
  const listItems = data.map((d) => {
    //console.log(Images);
    //<img src={require('./images/'+d.CardImage.replace(/\ /g,"_"))} alt={d.CardImage}></img>
    //if(d.Attack > 10)
    if (d.Effect1.search("Yellow") > 0 || d.Effect2.search("Yellow") > 0) {
      var filepath = '/images/' + d.CardImage.replace(/\ /g, "_");
      console.log(filepath);
      return (
        <table>
          <tbody>
            <tr key={d.ID}>
              <td className="cardImage">
                <div className="clear"></div>
                <img src={filepath} alt={d.CardImage} width={256} height={256}></img>
                <div className="clear"></div>
              </td>
              <td className="cardData">
                <div>{d.Name}</div>
                <div>
                  Attack:{d.Attack} Defense:{d.Defense} HP:{d.HP}
                </div>
                <table>
                  <tbody>
                    {d.Effect1.includes(".png") ? <tr><td><img src={'/images/' + d.Effect1.substring(0, d.Effect1.indexOf(".png ") + 4).replace(" ", "_")} alt={d.Effect1.substring(0, d.Effect1.indexOf(".png ") + 4)} width={64} height={64}></img></td><td>{d.Effect1.substring(d.Effect1.indexOf(".png ") + 4)}</td></tr> : <tr>{d.Effect1}</tr>}
                    {d.Effect2.includes(".png") ? <tr><td><img src={'/images/' + d.Effect2.substring(0, d.Effect2.indexOf(".png ") + 4).replace(" ", "_")} alt={d.Effect2.substring(0, d.Effect2.indexOf(".png ") + 4)} width={64} height={64} ></img></td><td>{d.Effect2.substring(d.Effect2.indexOf(".png ") + 4)}</td></tr> : <tr>{d.Effect2}</tr>}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody></table>
      )
    }
  })
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <table className="SearchResults">
          <tbody>
            {listItems}
          </tbody>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
