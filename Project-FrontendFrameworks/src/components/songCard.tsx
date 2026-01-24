import { Card, Button } from 'react-bootstrap'
import { Heart } from 'lucide-react'
import { ISong } from '@/interface/ISong'

interface SongCardProps {
  song: ISong
  onLike: (song: ISong) => void
  isLiked: boolean
}

export function SongCard({ song, onLike, isLiked }: SongCardProps) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-2 text-dark">{song.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{song.artist}</Card.Subtitle>
        <Card.Text className="text-secondary mb-4">{song.length}</Card.Text>
        <Card.Text className="text-secondary mb-4">{song.genre}</Card.Text>
        <Button
          variant={isLiked ? "danger" : "outline-secondary"}
          onClick={() => onLike(song)}
          className="d-flex align-items-center">
          <Heart className="me-2" /> {isLiked ? 'Unlike' : 'Like'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SongCard