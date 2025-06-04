import React, { useState, useEffect } from 'react';
import { Song, getSongs, getSongDetails, calculateAverage } from '../services/songService';
import SongList from './SongList';
import SelectedSongs from './SelectedSongs';
import VisualizationCanvas from './VisualizationCanvas';
import './SongVisualizer.css';

const SongVisualizer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visualizationData, setVisualizationData] = useState<any>(null);
  const [isVisualizing, setIsVisualizing] = useState(false);

  useEffect(() => {
    const loadedSongs = getSongs();
    setSongs(loadedSongs);
    setFilteredSongs(loadedSongs);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSongs(songs);
    } else {
      const filtered = songs.filter(
        song => 
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSongs(filtered);
    }
  }, [searchTerm, songs]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSongSelect = (song: Song) => {
    if (selectedSongs.length < 5 && !selectedSongs.some(s => s.title === song.title)) {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  const handleSongRemove = (song: Song) => {
    setSelectedSongs(selectedSongs.filter(s => s.title !== song.title));
  };

  const generateVisualization = () => {
    if (selectedSongs.length !== 5) return;

    const songDetails = selectedSongs.map(song => getSongDetails(song.title));
    const avgTempo = Math.round(calculateAverage(songDetails.map(detail => detail.tempo)));
    const avgVocalRange = Math.round(calculateAverage(songDetails.map(detail => detail.vocalRangeRange)));
    
    setVisualizationData({
      songDetails,
      avgTempo,
      avgVocalRange
    });
    
    setIsVisualizing(true);
  };

  const resetVisualization = () => {
    setIsVisualizing(false);
    setVisualizationData(null);
    setSelectedSongs([]);
  };

  return (
    <div className="song-visualizer">
      {!isVisualizing ? (
        <div className="selection-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="曲名、アーティスト名、ジャンルで検索..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          
          <div className="song-selection">
            <div className="available-songs">
              <h2>選択可能な曲</h2>
              <SongList 
                songs={filteredSongs} 
                onSongSelect={handleSongSelect} 
                selectedSongs={selectedSongs}
              />
            </div>
            
            <div className="selected-songs-container">
              <h2>選択した曲 {selectedSongs.length}/5</h2>
              <SelectedSongs 
                songs={selectedSongs} 
                onSongRemove={handleSongRemove}
              />
              <button 
                className={`visualize-button ${selectedSongs.length === 5 ? 'active' : 'disabled'}`}
                disabled={selectedSongs.length !== 5}
                onClick={generateVisualization}
              >
                可視化を生成
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="visualization-container">
          <VisualizationCanvas 
            data={visualizationData}
          />
          <button 
            className="reset-button"
            onClick={resetVisualization}
          >
            最初からやり直す
          </button>
        </div>
      )}
    </div>
  );
};

export default SongVisualizer;