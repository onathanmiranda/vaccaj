import { useEffect } from "react";

import abcjs from "abcjs";

const elementId = "sheetsWrapper";

const abcNotation = {
  X: 1,
  T: "Escala Diatônica",
  C: "Nicola Vaccaj",
  K: "D",
  notes: [
    ["D4 E2 F2 | G2 A2 B2 z2 | E4 F2 ^G2 | A2 B2 =C'2 z2 |"],
    ["E'4 D'2 =C'2 | B2 A2 G2 z2 | B4 A2 G2 | F2 E2 D2 z2 |"],
    ["D4 E2 F2 | G2 A2 B2 C'2 | D'4 E'3. | E' F'4. z2 |"],
    ["F'4 E'2 D'2 | C'2 B2 A2 G2 | F4 E3. | E D4. z2 |]"],
  ],
};

function stringfyNotation(notation) {
  return Object.entries(notation).reduce((acc, curr) => {
    const [key, value] = curr;
    if (key === "notes") {
      let notes = "";
      value.forEach((arr) => {
        arr.forEach((note) => {
          return (notes += note);
        });
      });
      return `${acc}\n${notes}`;
    }
    return `${acc}\n${key}:${value}`;
  }, "");
}

export default function Sheet() {
  useEffect(() => {
    const [visuals] = abcjs.renderAbc(
      elementId,
      stringfyNotation(abcNotation),
      {
        wrap: { minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 },
        staffwidth: 740,
      }
    );
    if (typeof window !== "undefined") {
      var audio = new window.AudioContext();
      var synth = new abcjs.synth.CreateSynth();
      synth
        .init({
          audioContext: audio,
          visualObj: visuals,
          millisecondsPerMeasure: 3000,
          options: {
            soundFontUrl:
              "https://paulrosen.github.io/midi-js-soundfonts/abcjs/",
            pan: [-0.3, 0.3],
          },
        })
        .then(function (results) {
          synth.prime().then((response) => {
            //synth.start();
          });
        })
        .catch(function (reason) {
          console.log(reason);
        });
    }
  }, []);

  return <div id={elementId} />;
}
