export interface HistoryItem {
  id: number;
  originalText: string;
  processedText: string;
  shift: number;
  mode: 'encrypt' | 'decrypt';
}