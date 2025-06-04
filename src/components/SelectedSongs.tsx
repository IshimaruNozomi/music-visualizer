import React from 'react';
import { Song } from '../services/songService';
import { Music, X } from 'lucide-react';
import './SelectedSongs.css';

interface SelectedSongsProps {
  songs: Song[];
  onSongRemove: (song: Song) => void;
}

const SelectedSongs: React.FC<SelectedSongsProps> = ({ songs, onSongRemove }) => {
  return (
    <div className="selected-songs">
      {songs.length === 0 ? (
        <div className="no-selection">
          5曲選択すると、あなたの音楽の好みを可視化できます
        </div>
      ) : (
        songs.map(song => (
          <div key={song.title} className="selected-song-item">
            <div className="selected-song-icon">
              <Music size={16} />
            </div>
            <div className="selected-song-info">
              <div className="selected-song-title">{song.title}</div>
              <div className="selected-song-artist">{song.artist}</div>
            </div>
            <button 
              className="remove-song-button"
              onClick={() => onSongRemove(song)}
              aria-label="曲を削除"
            >
              <X size={16} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedSongs;