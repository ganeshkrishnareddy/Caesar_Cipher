import React from 'react';

interface CipherVisualizerProps {
  shift: number;
  mode: 'encrypt' | 'decrypt';
}

const CipherVisualizer: React.FC<CipherVisualizerProps> = ({ shift, mode }) => {
  // Create the alphabet
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Create the shifted alphabet
  const actualShift = mode === 'encrypt' ? shift : (26 - shift) % 26;
  const shiftedAlphabet = [
    ...alphabet.slice(actualShift),
    ...alphabet.slice(0, actualShift)
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-400 mb-2">
        Cipher Visualization
      </label>
      <div className="overflow-x-auto pb-2">
        <div className="flex justify-center">
          <div className="border border-gray-700 rounded-lg bg-gray-900 p-4">
            <div className="flex">
              <div className="text-gray-400 pr-3 text-right w-24">Original:</div>
              <div className="flex space-x-2 font-mono">
                {alphabet.map((letter, index) => (
                  <div 
                    key={`original-${index}`}
                    className={`w-7 h-7 flex items-center justify-center rounded-md bg-gray-800 border ${
                      index === 0 ? 'border-cyan-500' : 'border-gray-700'
                    } text-sm transition-all hover:bg-gray-700`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex mt-3">
              <div className="text-gray-400 pr-3 text-right w-24">{mode === 'encrypt' ? 'Encrypted:' : 'Decrypted:'}</div>
              <div className="flex space-x-2 font-mono">
                {shiftedAlphabet.map((letter, index) => (
                  <div 
                    key={`shifted-${index}`}
                    className={`w-7 h-7 flex items-center justify-center rounded-md bg-gray-800 border ${
                      index === 0 ? 'border-cyan-500' : 'border-gray-700'
                    } text-sm transition-all hover:bg-gray-700`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipherVisualizer;