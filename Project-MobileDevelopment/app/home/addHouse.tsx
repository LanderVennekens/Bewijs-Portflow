import { FunctionComponent, useState } from 'react'
import { useRouter } from 'expo-router'
import { getCurrentUser } from '@/api/auth'
import { HouseType } from '@/models/house'
import { Text } from '@/components/ui/text'
import { InputField, Input } from '@/components/ui/input'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Button } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import {Select, SelectTrigger, SelectInput, SelectPortal, SelectContent, SelectItem, SelectIcon,} from '@/components/ui/select'
import { ChevronDownIcon } from 'lucide-react-native'
import {Alert, ScrollView} from 'react-native'
import { saveHouseForUser } from '@/api/firestoreUtils'

const AddHouse: FunctionComponent = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [type, setType] = useState<HouseType>('house')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleAddHouse = async () => {
    const user = getCurrentUser()
    if (!user) return

    const newHouse = {
      name,
      type,
      street,
      number,
      zip,
      city,
      state,
    }

    try{
      await saveHouseForUser(user.uid, newHouse)
    }
    catch (error) {
      console.error('Error saving house:', error)
      Alert.alert('Error', 'Could not save house. Please try again.')
    }
    finally {
      setName('')
      setType('house')
      setStreet('')
      setNumber('')
      setZip('')
      setCity('')
      setState('')
    }

    router.push('/home/tabs/list')
  }

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: 'white',  // consistent background
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading size="lg" style={{ marginBottom: 24 }}>
          Add New House
        </Heading>

        <VStack space="md">
          <Input>
            <InputField placeholder="Name" value={name} onChangeText={setName} />
          </Input>

          <Select selectedValue={type} onValueChange={value => setType(value as HouseType)}>
            <SelectTrigger>
              <SelectInput placeholder="Select Type" />
              <SelectIcon as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectContent>
                <SelectItem label="House" value="house" />
                <SelectItem label="Apartment" value="apartment" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Input>
            <InputField placeholder="Street" value={street} onChangeText={setStreet} />
          </Input>

          <Input>
            <InputField placeholder="Number" value={number} onChangeText={setNumber} />
          </Input>

          <Input>
            <InputField
              placeholder="ZIP Code"
              keyboardType="numeric"
              value={zip}
              onChangeText={setZip}
            />
          </Input>

          <Input>
            <InputField placeholder="City" value={city} onChangeText={setCity} />
          </Input>

          <Input>
            <InputField placeholder="State" value={state} onChangeText={setState} />
          </Input>

          <Button variant="solid" onPress={handleAddHouse} style={{ marginTop: 30 }}>
            <Text style={{color: 'white'}}>Save House</Text>
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default AddHouse
