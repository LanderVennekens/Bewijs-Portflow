import { FunctionComponent, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Text } from '@/components/ui/text'
import { Input, InputField } from '@/components/ui/input'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Button } from '@/components/ui/button'
import { Box } from '@/components/ui/box'
import { ScrollView, Alert } from 'react-native'
import { addExpenseToHouse } from '@/api/firestoreUtils'

const AddExpense: FunctionComponent = () => {
  const { id } = useLocalSearchParams()
  const houseId = Array.isArray(id) ? id[0] : id;
  const router = useRouter()

  const [shop, setShop] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('')


  const handleAddExpense = async () => {
    if (!houseId) {
      return
    }

    const newExpense = {
      shop,
      price: parseFloat(price),
      description,
      date,
      type,
    }

    try {
      await addExpenseToHouse(houseId, newExpense)
      router.push(`/home/${houseId}`)
    } catch (error) {
      console.error('Error saving expense:', error)
      Alert.alert('Error', 'Could not save expense. Please try again.')
    } finally {
      setShop('')
      setPrice('')
      setDescription('')
      setDate('')
      setType('')
    }
  }


  return (

    <Box
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading size="lg" style={{ marginBottom: 24 }}>
          Add New Expense
        </Heading>

        <VStack space="md">
          <Input>
            <InputField
              placeholder="Shop"
              value={shop}
              onChangeText={setShop}
            />
          </Input>

          <Input>
            <InputField
              placeholder="Price"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </Input>

          <Input>
            <InputField
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
          </Input>

          <Input>
            <InputField
              placeholder="Date (YYYY-MM-DD)"
              value={date}
              onChangeText={setDate}
            />
          </Input>

          <Input>
            <InputField
              placeholder="Type"
              value={type}
              onChangeText={setType}
            />
          </Input>

          <Button
            variant="solid"
            onPress={() => handleAddExpense()}
            style={{ marginTop: 30 }}
          >
            <Text style={{ color: 'white' }}>
             Save Expense
            </Text>
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default AddExpense
