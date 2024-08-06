// components/SearchComponent.tsx
import React, { useState, useEffect } from 'react';
import { Input, Box, VStack, Text, Spinner, Button, HStack } from '@chakra-ui/react';
import { collection, getDocs, query, where, limit, startAfter, orderBy } from 'firebase/firestore';
import { db } from './firebase';

const ITEMS_PER_PAGE = 10;

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const q = query(
      collection(db, 'hospitals'),
      where('field-name', '==', searchQuery),
      orderBy('field-name'),
      limit(ITEMS_PER_PAGE)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setResults(data);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setHasMore(querySnapshot.docs.length === ITEMS_PER_PAGE);
    setLoading(false);
  };

  const handleLoadMore = async () => {
    if (!lastVisible) return;
    setLoading(true);
    const q = query(
      collection(db, 'hospitals'),
      where('field-name', '==', searchQuery),
      orderBy('field-name'),
      startAfter(lastVisible),
      limit(ITEMS_PER_PAGE)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setResults((prevResults) => [...prevResults, ...data]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setHasMore(querySnapshot.docs.length === ITEMS_PER_PAGE);
    setLoading(false);
  };

  useEffect(() => {
    setResults([]);
    setLastVisible(null);
    setHasMore(false);
  }, [searchQuery]);

  return (
    <VStack spacing={4} align="stretch">
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-4"
      />
      <Button colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
      {loading && <Spinner />}
      <Box className="mt-4 w-full">
        {results.map((result, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" className="mb-4">
            <Text>{JSON.stringify(result)}</Text>
          </Box>
        ))}
        {hasMore && (
          <HStack justify="center">
            <Button onClick={handleLoadMore} isLoading={loading}>
              Load More
            </Button>
          </HStack>
        )}
      </Box>
    </VStack>
  );
};

export default SearchComponent;
