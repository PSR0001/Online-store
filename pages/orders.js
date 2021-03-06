import React from 'react'
import Order from '../models/Order'
import mongoose from "mongoose";

const Orders = () => {
    return (
    <div>
        <div className='container mx-auto'>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <h2 className='font-bold text-xl p-8'>Orders :</h2>
                            <table className="min-w-full">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            First
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Last
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @mdo
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Larry
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Wild
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

//use getserversideprops to fetch from DB
export async function getServerSideProps(context) {
    // console.log("hi guys");

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URL)
    }

    let Orders = await Order.find()




    return {
        props: { Orders: Orders }
    }

}

export default Orders