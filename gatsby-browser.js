import React from 'react';
import { render } from 'react-dom';
import SequenceDiagram from 'react-sequence-diagram';

export function onRouteUpdate({ location, prevLocation } = {}, options){
  function onError(error) {
    console.log(error);
  }
  var sequenceElements = document.getElementsByClassName("sequence");
  var c = sequenceElements.length;
  for (var i = 0; i < c; i++) {
    render(<SequenceDiagram input={sequenceElements[i].childNodes[0].nodeValue} options={options} onError={onError} />, sequenceElements[i])
  }
}
