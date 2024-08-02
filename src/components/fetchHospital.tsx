// pages/index.tsx
import { GetServerSideProps } from 'next';
import { prisma } from '../../lib/prisma';

type Hospital = {
  id: number;
  name: string;
  address: string;
  phone: string;
};

interface HomeProps {
  hospitals: Hospital[];
}

export default function Home({ hospitals }: HomeProps) {
  return (
    <div>
      <h1>Hospital Finder</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            {hospital.name} - {hospital.address} - {hospital.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const hospitals = await prisma.hospital.findMany();
  return { props: { hospitals } };
};