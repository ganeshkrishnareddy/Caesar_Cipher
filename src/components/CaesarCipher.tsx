import React, { useState, useEffect } from 'react';
import { encrypt, decrypt } from '../utils/cipherUtils';
import CipherVisualizer from './CipherVisualizer';
import CipherHistory from './CipherHistory';
import CipherControls from './CipherControls';
import CipherResult from './CipherResult';
import { HistoryItem } from '../types';

const CaesarCipher: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (inputText.trim() === '') {
      setResult('');
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsProcessing(true);
      
      // Small delay to allow the processing animation to be visible
      setTimeout(() => {
        const newResult = mode === 'encrypt' 
          ? encrypt(inputText, shift)
          : decrypt(inputText, shift);
        
        setResult(newResult);
        setIsProcessing(false);
      }, 300);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputText, shift, mode]);

  const handleProcess = () => {
    if (!inputText.trim() || !result) return;
    
    const newHistoryItem: HistoryItem = {
      id: Date.now(),
      originalText: inputText,
      processedText: result,
      shift,
      mode
    };

    setHistory(prev => [newHistoryItem, ...prev.slice(0, 4)]);
  };

  const clearInput = () => {
    setInputText('');
    setResult('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <CipherControls 
          inputText={inputText}
          setInputText={setInputText}
          shift={shift}
          setShift={setShift}
          mode={mode}
          setMode={setMode}
          clearInput={clearInput}
        />

        <div className="mt-8">
          <CipherVisualizer shift={shift} mode={mode} />
        </div>

        <CipherResult 
          result={result} 
          isProcessing={isProcessing}
          handleProcess={handleProcess}
        />
      </div>

      {history.length > 0 && (
        <div className="mt-8">
          <CipherHistory history={history} setHistory={setHistory} />
        </div>
      )}
    </div>
  );
};

export default CaesarCipher;