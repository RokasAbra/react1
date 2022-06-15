import { useState } from "react";
import randColor from "../../Functions/randColor";

function Animal({ name, img }) {
  let color = randColor();

  return (
    <>
      <div className="an">
        <figure>
        <figcaption style={{ backgroundColor: color }}>{name}</figcaption>
          <img src={img} alt={name + "animal"} className="animal" style={{width: "400px"}} />
          
        </figure>
      </div>
    </>
  );
}
export default Animal;
