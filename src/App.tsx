import React from 'react';
import SongVisualizer from './components/SongVisualizer';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>音楽の好み可視化ツール</h1>
        <p>好きな曲を5つ選んで、あなたの音楽の好みを視覚化してみましょう</p>
      </header>
      <main>
        <SongVisualizer />
      </main>
      <footer>
        <p>&copy; 2025 音楽の好み可視化ツール</p>
      </footer>
    </div>
  );
}

export default App;