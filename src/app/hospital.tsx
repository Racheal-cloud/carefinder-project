// services/hospitalService.ts
import { db } from '@/app/firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';

export interface Hospital {
  name: string;
  address: string;
  contact: string;
  description?: string; // Optional field for markdown content
}

export const fetchHospitals = async (): Promise<Hospital[]> => {
  const hospitalsCollection = collection(db, 'hospitals');
  const hospitalsSnapshot = await getDocs(hospitalsCollection);
  const hospitalsList = hospitalsSnapshot.docs.map(doc => doc.data() as Hospital);
  return hospitalsList;
};

  // return (
  //   <Box className="p-4">
  //     <Heading as="h1" className="text-2xl mb-4">
  //       Data
  //     </Heading>
  //     <VStack spacing={4} align="stretch">
  //       {data.map((item) => (
  //         <Box key={item.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
  //           <Text className="font-bold">Name: {item.name}</Text>
  //           <Text>Address: {item.address}</Text>
  //           <Text>Contact: {item.contact}</Text>
  //         </Box>
  //       ))}
  //     </VStack>
  //   </Box>
  // );


// export default Hospital;