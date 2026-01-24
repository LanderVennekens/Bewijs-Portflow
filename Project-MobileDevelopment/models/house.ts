export type HouseType = 'house' | 'apartment'

export interface House {
  id: string
  name: string
  type: HouseType
  street: string
  number: string
  city: string
  zip: string
  state: string
}