import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

interface DataItem {
  id: string;
  name: string;
  address: string;
  contact: string;
}

const Hospital = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box className="p-4">
      <Heading as="h1" className="text-2xl mb-4">
        Data
      </Heading>
      <VStack spacing={4} align="stretch">
        {data.map((item) => (
          <Box key={item.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <Text className="font-bold">Name: {item.name}</Text>
            <Text>Address: {item.address}</Text>
            <Text>Contact: {item.contact}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Hospital;