import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CipherResultProps {
  result: string;
  isProcessing: boolean;
  handleProcess: () => void;
}

const CipherResult: React.FC<CipherResultProps> = ({ 
  result, 
  isProcessing,
  handleProcess 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!result) return;
    
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-1">
        <label className="block text-sm font-medium text-gray-400">
          Result
        </label>
        {result && (
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>

      <div 
        className="bg-gray-900 border border-gray-700 rounded-lg p-4 min-h-24 relative overflow-hidden"
        onClick={() => result && handleProcess()}
      >
        {isProcessing ? (
          <div className="flex justify-center items-center h-16">
            <div className="animate-pulse flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  style={{ 
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '1s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            {result ? (
              <p className="font-mono break-words">{result}</p>
            ) : (
              <p className="text-gray-500 italic">Result will appear here...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CipherResult;