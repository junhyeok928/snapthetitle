const Booking = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-5 mx-auto">
                {/* Reservation Section */}
                <div className="space-y-8">
                    {/* Reservation Article Example */}
                    <article>
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Reservation Title</h2>
                        <p className="leading-relaxed mb-4">
                            This is a short description or detail about the reservation. It provides a concise explanation.
                        </p>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src="https://via.placeholder.com/50"
                                alt="User Avatar"
                            />
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-gray-900">User Name</h3>
                                <p className="text-gray-500">User Role/Position</p>
                            </div>
                        </div>
                    </article>

                    {/* Another Reservation Article */}
                    <article>
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Another Reservation</h2>
                        <p className="leading-relaxed mb-4">
                            Additional details or highlights about another reservation. Make this section adaptable.
                        </p>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src="https://via.placeholder.com/50"
                                alt="User Avatar"
                            />
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-gray-900">Another User</h3>
                                <p className="text-gray-500">Role/Position</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Booking;
