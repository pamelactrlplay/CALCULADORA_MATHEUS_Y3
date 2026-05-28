import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      if (!input) return;
      setResult(evaluate(input).toString());
    } catch (error) {
      setResult("Error");
      console.error(error);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => setInput((prev) => prev.slice(0, -1));

  return (
    <div className="grid shadow-2xl w-[360px] text-2xl font-bold rounded-2xl overflow-hidden border-4 border-[#e65f2b] bg-[#1a1a1a]">
      
      
      <div className="bg-black text-[#ff6b00] min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4 font-mono relative border-b-4 border-[#e65f2b]">
        <span className="absolute top-3 left-4 text-xs tracking-widest text-zinc-600">24s SHOT CLOCK</span>
        <span className="flex w-fit justify-self-end text-xl opacity-70 tracking-wider">{input || "0"}</span>
        <div className="flex justify-between w-full items-center text-5xl">
          <span className="text-zinc-700 text-3xl">=</span>
          <span className="flex h-fit tracking-wider">{result || "00"}</span>
        </div>
      </div>

      <div className="bg-[#f4a261] grow h-[480px] grid grid-cols-4 p-2 gap-2">
        <button
          className="flex justify-center items-center hover:bg-red-600 bg-red-500 text-white rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={handleClear}
        >
          C
        </button>
        
        <button
          className="flex justify-center items-center hover:bg-[#b84314] bg-[#d64e13] text-white rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("*")}
        >
          .
        </button>
        
        <button
          className="flex justify-center items-center hover:bg-[#b84314] bg-[#d64e13] text-white rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#b84314] bg-[#d64e13] text-white rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <div className="flex justify-center items-center bg-[#b84314]/20 rounded-xl border border-[#b84314]/30" />

        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <div className="flex justify-center items-center bg-[#b84314]/20 rounded-xl border border-[#b84314]/30" />

        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <div className="flex justify-center items-center bg-[#b84314]/20 rounded-xl border border-[#b84314]/30" />

        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <div className="flex justify-center items-center bg-[#b84314]/20 rounded-xl border border-[#b84314]/30" />
      
        <button
          className="flex justify-center items-center hover:bg-[#fceade] bg-[#fefae0] text-zinc-800 rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        
        <button
          className="flex justify-center items-center hover:bg-zinc-700 bg-zinc-800 text-white rounded-xl text-sm transition ease-in-out duration-200 active:scale-95 shadow-md"
          onClick={handleDelete}
        >
          DEL
        </button>
        
        <button
          className="flex justify-center items-center hover:bg-emerald-600 bg-emerald-500 text-white rounded-xl transition ease-in-out duration-200 active:scale-95 shadow-md text-3xl"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}