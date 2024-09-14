import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";


const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();
     
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

    if(listings.length===0){
        return (
            <ClientOnly>
                <div className="p-12">
                <EmptyState
                    title="No Favorite Found!"
                    subtitle="Looks like you haven no favorite places"
                />
                </div>
                
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <div className="p-12">
            
            <FavoriteClient
                listings = {listings}
                currentUser = {currentUser}
            />
            </div>

            
        </ClientOnly>
    )
}

export default ListingPage;