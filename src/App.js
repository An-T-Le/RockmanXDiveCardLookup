import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchTools from './SearchTools';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import data from "./Cards.json";
import Images from "./Images.js";
function EffectParser(effect) {
  //console.log(effect);
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
    var imageName = effect.substring(0, effect.indexOf(".png ") + 4).replace(/ /g, "_").replace(/\(/g,"%40").replace(/\)/g,"%41");
    var requirementImagesTag = [];

    //Check if the effect has an S in requirement(s): due to inconsistency in JSON
    var requirementsText = cardEffectText.includes("Requirements:") ? cardEffectText.substring(cardEffectText.indexOf("Requirements:")) : cardEffectText.substring(cardEffectText.indexOf("Requirement:"));
    var requirementsSplit = cardEffectText.includes("Requirements:") ? requirementsText.split("Requirements:") : requirementsText.split("Requirement:");
    cardEffectText = cardEffectText.includes("Requirements:") ? cardEffectText.substring(0,cardEffectText.indexOf("Requirements:")+"Requirements:".length) : cardEffectText.substring(0,cardEffectText.indexOf("Requirement:")+"Requirement:".length);
    console.log(requirementsText);
    
    if (requirementsSplit.length > 1) {
      requirementsSplit = requirementsSplit[1].split("1");
      requirementsSplit = requirementsSplit.filter(element => element !== '' && element !== ' ');
      console.log(requirementsSplit);
    }
    console.log(imageName);
    imageTag = <img src={'/images/' + imageName} alt={imageName} width={64} height={64}></img>;

    requirementsSplit.forEach(element => {
      if (element.toLowerCase().includes("mug.png")) {
        var mugFileName = element.substring(0, element.toLowerCase().indexOf("mug.png") + 7).replace(/ /g, "_").replace(/\(/g,"%40").replace(/\)/g,"%41");
        console.log(mugFileName);
        requirementImagesTag.push(
          <img src={'/images/' + mugFileName} alt={mugFileName} width={64} height={64}></img>
        )
      }
      else
        if (element.includes("Yellow")) {
          requirementImagesTag.push(cardTypeYellowImageTag);
        }
        else if (element.includes("Blue")) {
          requirementImagesTag.push(cardTypeBlueImageTag);
        }
        else if (element.includes("Green")) {
          requirementImagesTag.push(cardTypeGreenImageTag);
        }
        else if (element.includes("Red")) {
          requirementImagesTag.push(cardTypeRedImageTag);
        }

    });

    return (
      <tr>
        <td>
          {imageTag}
          </td>
        <td>{cardEffectText}
        {requirementImagesTag}
        </td>
      </tr>
    );

  }

}

function App() {
  const jsonData = require('./Cards.json');
  const [searchTerm, setSearchTerm] = useState("");

  //const data = [{"name":"test1"},{"name":"test2"}];
  const listItems = data.map((d) => {
    //console.log(Images);
    //<img src={require('./images/'+d.CardImage.replace(/\ /g,"_"))} alt={d.CardImage}></img>
    //if(d.Attack > 10)
    if ((d.Effect1.toLocaleLowerCase().includes(searchTerm.toString().toLocaleLowerCase()) > 0 || d.Effect2.toLocaleLowerCase().includes(searchTerm.toString().toLocaleLowerCase()) > 0) /*&& d.Colour.includes("Blue")*/) {
      var filepath = '/images/' + d.CardImage.replace(/ /g, "_");
      //console.log(filepath);
      //console.log("outside function:"+ d.Effect1.substring(0, d.Effect1.indexOf(".png ") + 4).replace(/ /g, "_"));
      //console.log("outside function:"+d.Effect2.substring(0, d.Effect2.indexOf(".png ") + 4).replace(/ /g, "_"));
      return (
        <table>
          <tbody>
            <tr key={d.ID}>
              <td className="cardImageBox" >
                <div className="clear"></div>

                <img src={filepath} alt={d.CardImage.replace(/ /g, "_")} className="cardImage" width={256} height={256}>
                </img>
                <img src={'/images/Card_' + d.Colour + ".png"} alt={d.Colour} className="cardColour" width={56} height={56}></img>

                <div className="clear"></div>
              </td>
              <td className="cardData">
                <div>{d.Name}</div>
                <div>
                  Attack:{d.Attack} Defense:{d.Defense} HP:{d.HP}
                </div>
                <table>
                  <tbody>
                    {/* {d.Effect1.includes(".png") ? <tr><td><img src={'/images/' + d.Effect1.substring(0, d.Effect1.indexOf(".png ") + 4).replace(/ /g, "_")} alt={d.Effect1.substring(0, d.Effect1.indexOf(".png ") + 4).replace(/ /g, "_")} width={64} height={64}></img></td><td>{d.Effect1.substring(d.Effect1.indexOf(".png ") + 4)}</td></tr> : <tr>{d.Effect1}</tr>}
                    {d.Effect2.includes(".png") ? <tr><td><img src={'/images/' + d.Effect2.substring(0, d.Effect2.indexOf(".png ") + 4).replace(/ /g, "_")} alt={d.Effect2.substring(0, d.Effect2.indexOf(".png ") + 4).replace(/ /g, "_")} width={64} height={64} ></img></td><td>{d.Effect2.substring(d.Effect2.indexOf(".png ") + 4)}</td></tr> : <tr>{d.Effect2}</tr>} */}
                    {EffectParser(d.Effect1)}
                    {EffectParser(d.Effect2)}

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
        <SearchTools searchTerm={searchTerm} setSearchTerm = {setSearchTerm}/>
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
