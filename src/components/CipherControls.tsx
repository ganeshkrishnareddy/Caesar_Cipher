import React from 'react';
import { RotateCcw, Lock, Unlock } from 'lucide-react';

interface CipherControlsProps {
  inputText: string;
  setInputText: (text: string) => void;
  shift: number;
  setShift: (shift: number) => void;
  mode: 'encrypt' | 'decrypt';
  setMode: (mode: 'encrypt' | 'decrypt') => void;
  clearInput: () => void;
}

const CipherControls: React.FC<CipherControlsProps> = ({
  inputText,
  setInputText,
  shift,
  setShift,
  mode,
  setMode,
  clearInput
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Message
          </label>
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-24 bg-gray-900 border border-gray-700 rounded-lg p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              placeholder="Enter text to encrypt or decrypt..."
            ></textarea>
            {inputText && (
              <button
                onClick={clearInput}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-300 focus:outline-none"
                aria-label="Clear input"
              >
                <RotateCcw size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Shift Value (1-25)
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="25"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <span className="ml-4 bg-gray-900 px-3 py-1 rounded-md min-w-10 text-center">
              {shift}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Mode
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setMode('encrypt')}
              className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all ${
                mode === 'encrypt'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Lock size={16} />
              <span>Encrypt</span>
            </button>
            <button
              onClick={() => setMode('decrypt')}
              className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all ${
                mode === 'decrypt'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Unlock size={16} />
              <span>Decrypt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipherControls;