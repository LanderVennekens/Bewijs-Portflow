import { useState, useEffect } from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'
import { ISong } from '@/interface/ISong'
import { SongCard } from '@/components/songCard'

export default function Search() {
  const [songData, setSongData] = useState<ISong[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [likedSongs, setLikedSongs] = useState<ISong[]>([])

  useEffect(() => {
    const loadMusiclist = async () => {
      try {
        const response = await fetch('src/data/songs.json')
        if (!response.ok) {
          throw new Error(`Could not fetch data: ${response.status}`)
        }
        const data = (await response.json()) as ISong[]
        setSongData(data)
      } catch (error) {
        console.error('Error fetching music list data:', error)
      }
    }

    loadMusiclist()

    const storedLikedSongs = localStorage.getItem('likedSongs')
    if (storedLikedSongs) {
      setLikedSongs(JSON.parse(storedLikedSongs))
    }
  }, [])

  const filteredSongs = songData.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLike = (song: ISong) => {
    const newLikedSongs = likedSongs.some((s) => s.title === song.title)
      ? likedSongs.filter((s) => s.title !== song.title)
      : [...likedSongs, song]
    setLikedSongs(newLikedSongs)
    localStorage.setItem('likedSongs', JSON.stringify(newLikedSongs))
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Search</h1>
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="search">
              <Form.Control type="text" placeholder="Search song" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
      </Row>
      <Row className="g-4">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <Col md={4} key={index}>
              <SongCard song={song} onLike={handleLike} isLiked={likedSongs.some((s) => s.title === song.title)}/>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No songs found.</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}