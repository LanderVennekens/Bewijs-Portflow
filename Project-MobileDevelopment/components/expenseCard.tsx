import {FunctionComponent} from 'react'
import {Expense} from '@/models/expense'
import {Card} from '@/components/ui/card'
import {View} from 'react-native'
import {Heading} from '@/components/ui/heading'
import { Text } from "@/components/ui/text"

interface ExpenseCardProps {
  expense: Expense
}

const ExpenseCard: FunctionComponent<ExpenseCardProps> = ({expense}) => {
  return (
    <Card size="md" variant="elevated" className="mb-3 p-4 flex-row items-center justify-between">
      <View className="flex-1 pr-3">
        <Heading size="sm">{expense.shop}</Heading>
        <Text size="sm" className="text-gray-600">{expense.type} - €{expense.price.toFixed(2)}</Text>
        <Text size="xs" className="text-gray-400">
          {new Date(expense.date).toLocaleDateString()}
        </Text>
        <Text size="sm" className="mt-1">{expense.description}</Text>
      </View>
    </Card>
  )
}

export default ExpenseCard