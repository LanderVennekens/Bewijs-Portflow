import {FunctionComponent} from 'react'
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import {House as HouseIcon, Building as BuildingIcon} from 'lucide-react-native'
import {House} from '@/models/house'
import {Pressable} from 'react-native'
import {useRouter} from 'expo-router'

interface HouseCardProps {
  house: House
}

const HouseCard: FunctionComponent<HouseCardProps> = ({house}) => {
  const router = useRouter()
  const fullAddress = `${house.street} ${house.number}, ${house.zip} ${house.city} (${house.state})`
  const Icon = house.type === 'house' ? HouseIcon : BuildingIcon;

  return (
    <Pressable onPress={() => router.push(`/home/${house.id}`)}>
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">{house.name}</Heading>
        <Icon size={20} color="#666" />
        <Text size="sm">{fullAddress}</Text>
      </Card>
    </Pressable>

  )
}

export default HouseCard