import React, { useState } from "react";

const BubbleSort = () => {
  const generateRandomNumbers = () => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
  };
  const [inputValues, setInputValues] = useState(generateRandomNumbers());
  const [isSorting, setIsSorting] = useState(false);

  
  const bubbleSort = async (arr) => {
    let newArr = [...arr];
    let len = newArr.length;
    setIsSorting(true);

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (newArr[j] > newArr[j + 1]) {
        
          let temp = newArr[j];
          newArr[j] = newArr[j + 1];
          newArr[j + 1] = temp;
          
          setInputValues([...newArr]);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    setIsSorting(false);
  };

  const handleSort = () => {
    bubbleSort(inputValues);
  };

  return (
    <div className="bubble">
      <h3>Bubble Sort</h3>
      <div className="bars-container">
        {inputValues.map((value, index) => (
          <div
            key={index}
            className="bar">
            {value}
          </div>
        ))}
      </div>
          <div className="bubble_btn">
               <button className="btn" onClick={handleSort} disabled={isSorting}>
        {isSorting ? "Sorting..." : "Sort Array"}
      </button>
          </div>
   
    </div>
  );
};

export default BubbleSort;
