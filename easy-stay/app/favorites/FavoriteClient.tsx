'use client';
import React, { useCallback, useState } from 'react'
import { SafeUser, safeListings, safeReservations } from '../types';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { error } from 'console';
import ListingCard from '../components/listings/ListingCard';

interface FavoriteClientProps {
    listings: safeListings[];
    currentUser?: SafeUser| null;
}

const FavoriteClient:React.FC<FavoriteClientProps> = ({
    listings,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string)=>{
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(()=>{
            toast.success('Reservation Cancelled');
            router.refresh();
        })
        .catch((error)=>{
            toast.error(error?.response?.data?.error);
        })
        .finally(()=>{
            setDeletingId('');
        })
    },[router])

  return (
    <Container>
        <Heading
            title='Favorites'
            subtitle="List of Places you have favorited!"
        />
        <div className='
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            kg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        '>
            {listings.map((listing)=>(
                <ListingCard
                    key={listing.id}
                    data={listing}
                    currentUser={currentUser}
                />
            ))}
        </div>
    </Container>
  );
};

export default FavoriteClient;