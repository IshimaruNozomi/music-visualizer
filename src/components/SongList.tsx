import React from 'react';
import { Song } from '../services/songService';
import { Music } from 'lucide-react';
import './SongList.css';

interface SongListProps {
  songs: Song[];
  onSongSelect: (song: Song) => void;
  selectedSongs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs, onSongSelect, selectedSongs }) => {
  const isSelected = (song: Song) => {
    return selectedSongs.some(s => s.title === song.title);
  };

  return (
    <div className="song-list">
      {songs.length === 0 ? (
        <div className="no-songs">検索条件に一致する曲が見つかりませんでした。</div>
      ) : (
        songs.map(song => (
          <div 
            key={song.title}
            className={`song-item ${isSelected(song) ? 'selected' : ''}`}
            onClick={() => !isSelected(song) && onSongSelect(song)}
          >
            <div className="song-icon">
              <Music size={20} />
            </div>
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-details">{song.artist} • {song.genre} • {song.releaseYear}</div>
            </div>
            <div className="song-action">
              {isSelected(song) ? (
                <span className="selected-badge">選択済み</span>
              ) : (
                selectedSongs.length < 5 && <span className="select-badge">選択する</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SongList;