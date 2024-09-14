import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";
// import TripsClient from "./TripsClient";


const ReservationPage = async () => {
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
        authorId: currentUser.id
    });

    if(reservations.length===0){
        return (
            <ClientOnly>
                <div className="p-12">
                <EmptyState
                    title="No Reservations Found!"
                    subtitle="Looks like you have no reservations on your property"
                />
                </div>
                
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <div className="p-12">
            <ReservationClient
                reservations = {reservations}
                currentUser = {currentUser}
            />
            </div>

            
        </ClientOnly>
    )
}

export default ReservationPage;