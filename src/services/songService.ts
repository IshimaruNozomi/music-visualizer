// Song data types
export interface Song {
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  musicFileURL: string;
  tempo: number;
  key: string;
  vocalRangeRange: number;
}

interface ColorInfo {
  scale: string;
  color: string;
  r: number;
  g: number;
  b: number;
}

// interface TextureInfo {
//   tempo: number;
//   textureStyle: string;
// }

interface BrightnessSaturation {
  releaseYear: number;
  brightnessPercent: number;
  saturationPercent: number;
}

// Mock database tables
const songInfoTable: Song[] = [
  { artist: 'Artist 1', title: 'Song A', releaseYear: 2025, genre: 'Pop', musicFileURL: 'http://example.com/songA.mp3', tempo: 120, key: 'C Major', vocalRangeRange: 12 },
  { artist: 'Artist 2', title: 'Song B', releaseYear: 2025, genre: 'Rock', musicFileURL: 'http://example.com/songB.mp3', tempo: 140, key: 'G Major', vocalRangeRange: 19 },
  { artist: 'Artist 3', title: 'Song C', releaseYear: 2025, genre: 'Jazz', musicFileURL: 'http://example.com/songC.mp3', tempo: 90, key: 'D Minor', vocalRangeRange: 7 },
  { artist: 'Artist 4', title: 'Song D', releaseYear: 2025, genre: 'Hip-hop', musicFileURL: 'http://example.com/songD.mp3', tempo: 100, key: 'A Minor', vocalRangeRange: 12 },
  { artist: 'Artist 5', title: 'Song E', releaseYear: 2024, genre: 'EDM', musicFileURL: 'http://example.com/songE.mp3', tempo: 128, key: 'E Minor', vocalRangeRange: 19 },
  { artist: 'Artist 6', title: 'Song F', releaseYear: 2024, genre: 'Classical', musicFileURL: 'http://example.com/songF.mp3', tempo: 60, key: 'B Major', vocalRangeRange: 28 },
  { artist: 'Artist 7', title: 'Song G', releaseYear: 2023, genre: 'Country', musicFileURL: 'http://example.com/songG.mp3', tempo: 85, key: 'F# Major', vocalRangeRange: 7 },
  { artist: 'Artist 8', title: 'Song H', releaseYear: 2023, genre: 'Folk', musicFileURL: 'http://example.com/songH.mp3', tempo: 108, key: 'A Major', vocalRangeRange: 12 },
  { artist: 'Artist 9', title: 'Song I', releaseYear: 2023, genre: 'R&B', musicFileURL: 'http://example.com/songI.mp3', tempo: 95, key: 'C# Minor', vocalRangeRange: 19 },
  { artist: 'Artist 10', title: 'Song J', releaseYear: 2022, genre: 'Soul', musicFileURL: 'http://example.com/songJ.mp3', tempo: 110, key: 'G Minor', vocalRangeRange: 12 },
  { artist: 'Artist 11', title: 'Song K', releaseYear: 2022, genre: 'Pop', musicFileURL: 'http://example.com/songK.mp3', tempo: 115, key: 'D Major', vocalRangeRange: 19 },
  { artist: 'Artist 12', title: 'Song L', releaseYear: 2022, genre: 'Rock', musicFileURL: 'http://example.com/songL.mp3', tempo: 135, key: 'E Minor', vocalRangeRange: 19 },
  { artist: 'Artist 13', title: 'Song M', releaseYear: 2021, genre: 'Jazz', musicFileURL: 'http://example.com/songM.mp3', tempo: 100, key: 'F Minor', vocalRangeRange: 7 },
  { artist: 'Artist 14', title: 'Song N', releaseYear: 2021, genre: 'Hip-hop', musicFileURL: 'http://example.com/songN.mp3', tempo: 105, key: 'A# Major', vocalRangeRange: 12 },
  { artist: 'Artist 15', title: 'Song O', releaseYear: 2021, genre: 'EDM', musicFileURL: 'http://example.com/songO.mp3', tempo: 127, key: 'C Major', vocalRangeRange: 19 },
  { artist: 'Artist 16', title: 'Song P', releaseYear: 2020, genre: 'Classical', musicFileURL: 'http://example.com/songP.mp3', tempo: 70, key: 'D# Minor', vocalRangeRange: 28 },
  { artist: 'Artist 17', title: 'Song Q', releaseYear: 2020, genre: 'Country', musicFileURL: 'http://example.com/songQ.mp3', tempo: 88, key: 'G Major', vocalRangeRange: 12 },
  { artist: 'Artist 18', title: 'Song R', releaseYear: 2019, genre: 'Folk', musicFileURL: 'http://example.com/songR.mp3', tempo: 112, key: 'B Minor', vocalRangeRange: 7 },
  { artist: 'Artist 19', title: 'Song S', releaseYear: 2019, genre: 'R&B', musicFileURL: 'http://example.com/songS.mp3', tempo: 92, key: 'C# Major', vocalRangeRange: 19 },
  { artist: 'Artist 20', title: 'Song T', releaseYear: 2019, genre: 'Soul', musicFileURL: 'http://example.com/songT.mp3', tempo: 105, key: 'E Minor', vocalRangeRange: 12 },
  { artist: 'Artist 21', title: 'Song U', releaseYear: 2018, genre: 'Pop', musicFileURL: 'http://example.com/songU.mp3', tempo: 118, key: 'F# Minor', vocalRangeRange: 19 },
  { artist: 'Artist 22', title: 'Song V', releaseYear: 2018, genre: 'Rock', musicFileURL: 'http://example.com/songV.mp3', tempo: 130, key: 'G# Major', vocalRangeRange: 19 },
  { artist: 'Artist 23', title: 'Song W', releaseYear: 2017, genre: 'Jazz', musicFileURL: 'http://example.com/songW.mp3', tempo: 85, key: 'A Minor', vocalRangeRange: 7 },
  { artist: 'Artist 24', title: 'Song X', releaseYear: 2017, genre: 'Hip-hop', musicFileURL: 'http://example.com/songX.mp3', tempo: 95, key: 'B Major', vocalRangeRange: 12 },
  { artist: 'Artist 25', title: 'Song Y', releaseYear: 2016, genre: 'EDM', musicFileURL: 'http://example.com/songY.mp3', tempo: 125, key: 'C Minor', vocalRangeRange: 19 },
  { artist: 'Artist 26', title: 'Song Z', releaseYear: 2016, genre: 'Classical', musicFileURL: 'http://example.com/songZ.mp3', tempo: 55, key: 'D Major', vocalRangeRange: 28 },
  { artist: 'Artist 27', title: 'Song AA', releaseYear: 2015, genre: 'Country', musicFileURL: 'http://example.com/songAA.mp3', tempo: 90, key: 'E Major', vocalRangeRange: 7 },
  { artist: 'Artist 28', title: 'Song AB', releaseYear: 2015, genre: 'Folk', musicFileURL: 'http://example.com/songAB.mp3', tempo: 102, key: 'F Minor', vocalRangeRange: 12 },
  { artist: 'Artist 29', title: 'Song AC', releaseYear: 2014, genre: 'R&B', musicFileURL: 'http://example.com/songAC.mp3', tempo: 108, key: 'G# Minor', vocalRangeRange: 19 },
  { artist: 'Artist 30', title: 'Song AD', releaseYear: 2014, genre: 'Soul', musicFileURL: 'http://example.com/songAD.mp3', tempo: 85, key: 'A Major', vocalRangeRange: 7 },
];

const scaleToColorTable: ColorInfo[] = [
  { scale: 'C Major', color: 'Red', r: 255, g: 0, b: 0 },
  { scale: 'C# Major', color: 'Orange', r: 255, g: 165, b: 0 },
  { scale: 'D Major', color: 'Yellow', r: 255, g: 255, b: 0 },
  { scale: 'D# Major', color: 'Light Green', r: 144, g: 238, b: 144 },
  { scale: 'E Major', color: 'Green', r: 0, g: 128, b: 0 },
  { scale: 'F Major', color: 'Cyan', r: 0, g: 255, b: 255 },
  { scale: 'F# Major', color: 'Light Blue', r: 173, g: 216, b: 230 },
  { scale: 'G Major', color: 'Blue', r: 0, g: 0, b: 255 },
  { scale: 'G# Major', color: 'Indigo', r: 75, g: 0, b: 130 },
  { scale: 'A Minor', color: 'Violet', r: 138, g: 43, b: 226 },
  { scale: 'A# Minor', color: 'Magenta', r: 255, g: 0, b: 255 },
  { scale: 'B Minor', color: 'Charcoal', r: 54, g: 69, b: 79 },
  { scale: 'C Minor', color: 'Crimson', r: 220, g: 20, b: 60 },
  { scale: 'D Minor', color: 'Olive', r: 128, g: 128, b: 0 },
  { scale: 'E Minor', color: 'Teal', r: 0, g: 128, b: 128 },
  { scale: 'G Minor', color: 'Navy', r: 0, g: 0, b: 128 },
  { scale: 'A# Major', color: 'Lavender', r: 230, g: 230, b: 250 },
  { scale: 'B Major', color: 'Magenta', r: 255, g: 0, b: 255 },
  { scale: 'C# Minor', color: 'Dark Orange', r: 255, g: 140, b: 0 },
  { scale: 'D# Minor', color: 'Sea Green', r: 46, g: 139, b: 87 },
  { scale: 'F# Minor', color: 'Steel Blue', r: 70, g: 130, b: 180 },
  { scale: 'F Minor', color: 'Sky Blue', r: 135, g: 206, b: 235 },
  { scale: 'G# Minor', color: 'Purple', r: 128, g: 0, b: 128 },
  { scale: 'E# Major', color: 'Gold', r: 255, g: 215, b: 0 },
  { scale: 'F# Major', color: 'Light Coral', r: 240, g: 128, b: 128 },
  { scale: 'G# Major', color: 'Dark Violet', r: 148, g: 0, b: 211 },
  { scale: 'A# Major', color: 'Dark Slate Blue', r: 72, g: 61, b: 139 },
  { scale: 'B# Major', color: 'Dark Olive Green', r: 85, g: 107, b: 47 }, 
];


const releaseYearTable: BrightnessSaturation[] = [
  { releaseYear: 2025, brightnessPercent: 100, saturationPercent: 100 },
  { releaseYear: 2024, brightnessPercent: 100, saturationPercent: 100 },
  { releaseYear: 2023, brightnessPercent: 100, saturationPercent: 100 },
  { releaseYear: 2022, brightnessPercent: 98, saturationPercent: 98 },
  { releaseYear: 2021, brightnessPercent: 98, saturationPercent: 98 },
  { releaseYear: 2020, brightnessPercent: 98, saturationPercent: 98 },
  { releaseYear: 2019, brightnessPercent: 95, saturationPercent: 95 },
  { releaseYear: 2018, brightnessPercent: 95, saturationPercent: 95 },
  { releaseYear: 2017, brightnessPercent: 95, saturationPercent: 95 },
  { releaseYear: 2016, brightnessPercent: 95, saturationPercent: 95 },
  { releaseYear: 2015, brightnessPercent: 95, saturationPercent: 95 },
  { releaseYear: 2014, brightnessPercent: 95, saturationPercent: 95 },
];

// Get all songs
export const getSongs = (): Song[] => {
  return [...songInfoTable];
};

// Get song details with color, brightness, and texture information
export const getSongDetails = (songTitle: string) => {
  const song = songInfoTable.find(s => s.title === songTitle);
  
  if (!song) {
    throw new Error(`Song with title "${songTitle}" not found`);
  }
  
  const colorInfo = scaleToColorTable.find(c => c.scale === song.key);
  const yearInfo = releaseYearTable.find(y => y.releaseYear === song.releaseYear);
  
  if (!colorInfo) {
    throw new Error(`Color information for key "${song.key}" not found`);
  }
  
  if (!yearInfo) {
    throw new Error(`Year information for year "${song.releaseYear}" not found`);
  }
  
  return {
    title: song.title,
    artist: song.artist,
    tempo: song.tempo,
    vocalRangeRange: song.vocalRangeRange,
    r: colorInfo.r,
    g: colorInfo.g,
    b: colorInfo.b,
    brightnessPercent: yearInfo.brightnessPercent,
    saturationPercent: yearInfo.saturationPercent,
  };
};

// Helper function to calculate average
export const calculateAverage = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
};

// Filter functions
export const filterSongsByGenre = (genre: string): Song[] => {
  return songInfoTable.filter(song => song.genre === genre);
};

export const filterSongsByKey = (key: string): Song[] => {
  return songInfoTable.filter(song => song.key === key);
};

export const filterSongsByYear = (year: number): Song[] => {
  return songInfoTable.filter(song => song.releaseYear === year);
};