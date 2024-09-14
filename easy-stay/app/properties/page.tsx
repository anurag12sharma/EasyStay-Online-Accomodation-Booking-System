import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () => {
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

    const listings = await getListings({
        userId: currentUser.id
    });

    if(listings.length===0){
        return (
            <ClientOnly>
                <div className="p-12">
                <EmptyState
                    title="No Properties Found!"
                    subtitle="Looks like you have no properties"
                />
                </div>
                
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <div className="p-12">
            
            <PropertiesClient
                listings = {listings}
                currentUser = {currentUser}
            />
            </div>

            
        </ClientOnly>
    )
}

export default PropertiesPage;