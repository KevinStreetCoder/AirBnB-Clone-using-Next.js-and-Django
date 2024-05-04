import Image from "next/image";
import Reservationsidebar from "@/app/components/properties/Reservationsidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-8">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src= "/beach_01.png"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-2">
                        <Image 
                        src= "/profile.png"
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="beach house"
                        />
                        <p><strong>John Does</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam vero rem accusantium, odit tempore vel omnis dolorem atque mollitia. 
                        Sunt assumenda eum veritatis quo provident nihil reiciendis, nemo magnam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis cupiditate deserunt nihil ipsum voluptatem quam, iure magni autem harum, vitae quidem doloribus sit exercitationem, recusandae atque! Quas excepturi cupiditate facere?
                    </p>
                </div>
                <Reservationsidebar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;