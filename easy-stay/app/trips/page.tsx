import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";


const TripsPage = async () => {
    const currentUser = await getCurrentUser();
     
    if (!currentUser) {
        return (
            <ClientOnly>
                <div className="p-12">
                <EmptyState
                    title="Unauthorised"
                    subtitle="Please Login"
                />
                </div>
                
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if(reservations.length===0){
        return (
            <ClientOnly>
                <div className="p-12">
                <EmptyState
                    title="No Trips Found!"
                    subtitle="Looks like you haven't reserved any places"
                />
                </div>
                
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <div className="p-12">
            
            <TripsClient
                reservations = {reservations}
                currentUser = {currentUser}
            />
            </div>

            
        </ClientOnly>
    )
}

export default TripsPage;