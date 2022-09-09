import React from "react";
import facebook from "../../assets/facebook.png";
import zalo from "../../assets/zalo-1 1.png";
import unflash from "../../assets/unsplash_jAt6cN6zl8M.png";
import unflashh from "../../assets/unsplash_xDLEUTWCZdc.png";
import "./programing.css";
import MemberCards from "../MembersCard/Group7900";

function Program() {
  return (
    <div className="Program">
      <div className="program-left">
        <div className="Group67">
          <h2>23/12/2021</h2>
          <h1>Chương Trình A</h1>
          </div>
        <div className="Group61">
            <img className="fb" src={facebook} />
            <img className="zl" src={zalo} />
          </div>
        <div className="Frame66">
          <p className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat
            nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec
            egestas amet, odio in. Nullam tincidunt at condimentum praesent quis
            maecenas nulla consequat. Sit convallis molestie feugiat nulla
            convallis metus interdum. Netus mattis mauris eu magna et enim sed.
            Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper
            aenean tristique at imperdiet proin. Nulla tristique eu nisi
            viverra.{" "}
          </p>
          <img className="unf" src={unflash} />
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat
            nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec
            egestas amet, odio in. Nullam tincidunt at condimentum praesent quis
            maecenas nulla consequat. Sit convallis molestie feugiat nulla
            convallis metus interdum. Netus mattis mauris eu magna et enim sed.
            Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper
            aenean tristique at imperdiet proin. Nulla tristique eu nisi
            viverra. Tempus, ultrices porttitor orci nibh Egestas sed vitae
            libero sit tellus scelerisque duis dolor nam. Ipsum, elementum proin
            pellentesque tellus amet, sociis. Justo, velit enim ipsum nulla duis
            in. At mattis cursus et habitant purus augue enim, lorem risus.
            Vestibulum, eu nec at tortor amet diam in ac.
          </p>
          <img className="unff" src={unflashh} />
        </div>
      </div>
      <div className="program-right">
        <h1 className="text-right">Các Chương Trình</h1>    
      </div>
    </div>
  );
}

export default Program;
