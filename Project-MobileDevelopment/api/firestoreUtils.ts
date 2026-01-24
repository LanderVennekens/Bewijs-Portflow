import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
} from '@/models/firebaseTypes'
import firestore from '@react-native-firebase/firestore'
import {House} from '@/models/house'
import {Expense} from '@/models/expense'

export function getCollectionRef<T extends DocumentData>(collection: string): CollectionReference<T> {
  return firestore().collection<T>(collection)
}

export function getDocumentRef<T extends DocumentData>(collection: string, documentId: string): DocumentReference<T> {
  return getCollectionRef<T>(collection).doc(documentId)
}

export async function documentData<T extends DocumentData>(
  collection: string,
  documentId: string,
  idField: Extract<keyof T, string>,
): Promise<T | undefined> {
  const documentSnapshot = await getDocumentRef<T>(collection, documentId).get()
  return getDataFromDocumentSnapshot<T>(documentSnapshot, idField)
}

export function getDataFromDocumentSnapshot<T extends DocumentData>(
  snapshot: DocumentSnapshot<T>,
  idField: Extract<keyof T, string>,
): T | undefined {
  const data: T | undefined = snapshot.data()

  if (data) {
    return {
      ...data,
      [idField]: snapshot.id,
    }
  }

  return undefined
}

export async function collectionData<T extends DocumentData>(collection: string, idField: Extract<keyof T, string>) {
  const collectionSnapshot = await getCollectionRef<T>(collection).get()
  return getDataFromQuerySnapshot<T>(collectionSnapshot, idField)
}

export function getDataFromQuerySnapshot<T extends DocumentData>(
  snapshot: QuerySnapshot<T>,
  idField: Extract<keyof T, string>,
): T[] {
  return snapshot.docs.map(doc => {
    return {
      ...doc.data(),
      [idField]: doc.id,
    }
  })
}

// Data toevoegen aan Firestore van een specifieke gebruiker
export async function saveHouseForUser(uid: string, house: Omit<House, 'id'>) {
  await firestore().collection(`users/${uid}/houses`).add(house)
}

// Data ophalen van Firestore van een specifieke gebruiker
export async function getHousesForUser(uid: string): Promise<House[]> {
  const snapshot = await firestore().collection(`users/${uid}/houses`).get()
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as House[]
}

// Data verwijderen
export async function deleteHouse(userId: string, houseId: string): Promise<void> {
  await firestore()
    .collection('users')
    .doc(userId)
    .collection('houses')
    .doc(houseId)
    .delete()
}

// Huis ophalen op basis van ID
export async function getHouseById(houseId: string): Promise<House | null> {
  try {
    const houseDoc = await firestore()
      .collectionGroup('houses') // als huizen in subcollecties 'houses' onder gebruikers zitten
      .where('id', '==', houseId)
      .limit(1)
      .get()

    if (!houseDoc.empty) {
      const doc = houseDoc.docs[0]
      return { id: doc.id, ...doc.data() } as House
    }
    return null
  } catch (error) {
    console.error('Error fetching house:', error)
    return null
  }
}

// Uitgaven toevoegen aan een huis
export async function addExpenseToHouse(houseId: string, expense: any): Promise<void> {
  try {
    await firestore()
      .collection('houses')
      .doc(houseId)
      .collection('expenses')
      .add(expense)
  } catch (error) {
    console.error('Error adding expense:', error)
    throw error
  }
}

// Uitgaven ophalen voor een specifiek huis
export async function getExpensesForHouse(houseId: string): Promise<Expense[]> {
  const snapshot = await firestore()
    .collection('houses')
    .doc(houseId)
    .collection('expenses')
    .orderBy('date', 'desc')
    .get()

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as Expense))
}
// Uitgave verwijderen
export async function deleteExpense(userId: string, expenseId: string): Promise<void> {
  await firestore()
    .collection('users')
    .doc(userId)
    .collection('expenses')
    .doc(expenseId)
    .delete()
}

