import { useState, useEffect } from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'
import { ISong } from '@/interface/ISong'
import { SongCard } from '@/components/songCard'

export default function Favorites() {
  const [likedSongs, setLikedSongs] = useState<ISong[]>([])
  const [filteredSong, setFilteredSongs] = useState<ISong[]>([])
  const [selectedGenre, setSelectedGenre] = useState<string>('All')

  useEffect(() => {
    const storedLikedSongs = localStorage.getItem('likedSongs')
    if (storedLikedSongs) {
      setLikedSongs(JSON.parse(storedLikedSongs))
      setFilteredSongs(JSON.parse(storedLikedSongs))
    }
  }, [])

  const handleUnlike = (song: ISong) => {
    const newLikedSongs = likedSongs.filter((s) => s.title !== song.title)
    setLikedSongs(newLikedSongs)
    localStorage.setItem('likedSongs', JSON.stringify(newLikedSongs))
    setFilteredSongs(newLikedSongs.filter((song) => selectedGenre === 'All' ? true : song.genre === selectedGenre))
  }

  const handleGenreChange = (genre: string) =>{
    setSelectedGenre(genre)
    setFilteredSongs(likedSongs.filter((song) => genre === 'All' ? true: song.genre === genre))
  }

  const uniqueGenres = Array.from(new Set(likedSongs.map((song) => song.genre)))
  
  return (
<Container className="mt-5">
      <h1 className="text-center mb-4">Favorites</h1>
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Form.Select
            value={selectedGenre}
            onChange={(e) => handleGenreChange(e.target.value)}>
            <option value="All">All Genres</option>
            {uniqueGenres.map((genre, index) => (
              <option value={genre} key={index}>
                {genre}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="g-4">
        {filteredSong.length > 0 ? (
          filteredSong.map((song, index) => (
            <Col md={6} lg={4} key={index}>
              <SongCard song={song} onLike={handleUnlike} isLiked={true} />
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>Search a song and give it a like!</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}