import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import Typed from "react-typed";

function Question() {
  const [displayWordOne, setDisplayWordOne] = useState(true);
  const [displayWordTwo, setDisplayWordTwo] = useState(true);
  const [displayWordThree, setDisplayWordThree] = useState(true);
  const [buttonOneDisplay, setButtonOneDisplay] = useState(false);
  const [buttonTwoDisplay, setButtonTwoDisplay] = useState(false);
  const [buttonThreeDisplay, setButtonThreeDisplay] = useState(false);

  const showResultOne = () => {
    setDisplayWordOne(false);
    setButtonOneDisplay(true);
  };
  const showResultTwo = () => {
    setDisplayWordTwo(false);
    setButtonTwoDisplay(true);
  };
  const showResultThree = () => {
    setDisplayWordThree(false);
    setButtonThreeDisplay(true);
  };
  const hiddenResultOne = () => {
    setDisplayWordOne(true);
    setButtonOneDisplay(false);
  };
  const hiddenResultTwo = () => {
    setDisplayWordTwo(true);
    setButtonTwoDisplay(false);
  };
  const hiddenResultThree = () => {
    setDisplayWordThree(true);
    setButtonThreeDisplay(false);
  };

  return (
    <div className="text-center bg-blue-800 p-4  border-red-800 max-w-[700px] ml-auto mr-auto lg:max-w-[1000px]">
      <h1 className="text-white font-bold text-2xl">
        Frequently Asked Questions
      </h1>
      <div className="bg-white p-3 mt-4">
        <div className="flex justify-between p-2">
          <h4 className="font-bold">Is this a good product?</h4>
          <div className="bg-blue-800 p-3 text-center cursor-pointer">
            <IoIosAdd
              className={
                buttonOneDisplay === true
                  ? "hidden"
                  : "block text-purple-100 font-bold"
              }
              onClick={showResultOne}
              size={20}
            />
            <IoIosRemove
              className={
                buttonOneDisplay === false
                  ? "hidden text-purple-100 font-bold"
                  : "text-white"
              }
              onClick={hiddenResultOne}
              size={20}
            />
          </div>
        </div>

        <p
          className={
            displayWordOne === true
              ? "hidden text-left p-2"
              : displayWordOne === false
              ? "text-left p-2"
              : ""
          }
        >
          <Typed
            strings={[
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facerein labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
            ]}
            typeSpeed={10}
          />
        </p>
      </div>

      <div className="bg-white p-3 mt-4">
        <div className="flex justify-between p-2">
          <h4 className="font-bold">How much does it cost?</h4>
          <div className="bg-blue-800 p-3 text-center cursor-pointer">
            <IoIosAdd
              className={
                buttonTwoDisplay === true
                  ? "hidden"
                  : "block text-purple-100 font-bold"
              }
              onClick={showResultTwo}
              size={20}
            />
            <IoIosRemove
              className={
                buttonTwoDisplay === false
                  ? "hidden text-purple-100 font-bold"
                  : "text-white"
              }
              onClick={hiddenResultTwo}
              size={20}
            />
          </div>
        </div>
        <p
          className={
            displayWordTwo === true
              ? "hidden text-left p-2"
              : displayWordTwo === false
              ? "text-left p-2"
              : ""
          }
        >
          <Typed
            strings={[
              "Lorem ipsum doloorr, sit amet consecesstetur adipisicing elit. Qui faagcerein labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! ldleQuidem.",
            ]}
            typeSpeed={10}
          />
        </p>
      </div>

      <div className="bg-white p-3 mt-4">
        <div className="flex justify-between p-2">
          <h4 className="font-bold">When can I get it?</h4>
          <div className="bg-blue-800 p-3 text-center cursor-pointer">
            <IoIosAdd
              className={
                buttonThreeDisplay === true
                  ? "hidden"
                  : "block text-purple-100 font-bold"
              }
              onClick={showResultThree}
              size={20}
            />
            <IoIosRemove
              className={
                buttonThreeDisplay === false
                  ? "hidden text-purple-100 font-bold"
                  : "text-white"
              }
              onClick={hiddenResultThree}
              size={20}
            />
          </div>
        </div>

        <p
          className={
            displayWordThree === true
              ? "hidden text-left p-2"
              : displayWordThree === false
              ? "text-left p-2"
              : ""
          }
        >
          <Typed
            strings={[
              "Loremest ipssuum dolor, sit amet consectetur adipisicing elit. Qui facerein labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
            ]}
            typeSpeed={10}
          />
        </p>
      </div>
    </div>
  );
}

export default Question;
