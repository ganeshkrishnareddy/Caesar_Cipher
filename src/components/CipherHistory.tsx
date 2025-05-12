import React from 'react';
import { ClockIcon, TrashIcon } from 'lucide-react';
import { HistoryItem } from '../types';

interface CipherHistoryProps {
  history: HistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}

const CipherHistory: React.FC<CipherHistoryProps> = ({ history, setHistory }) => {
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center">
          <ClockIcon size={18} className="mr-2 text-cyan-400" />
          Recent Operations
        </h3>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center"
          >
            <TrashIcon size={14} className="mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900/60 p-3 rounded-lg border border-gray-700 transition-all hover:border-gray-600"
          >
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400">
                {item.mode === 'encrypt' ? 'Encrypted' : 'Decrypted'} with shift: {item.shift}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(item.id).toLocaleTimeString()}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">Original:</span>
                <p className="text-sm truncate">{item.originalText}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Result:</span>
                <p className="text-sm font-mono truncate">{item.processedText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CipherHistory;