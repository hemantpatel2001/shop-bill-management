// Skeleton.tsx
const Skeleton = () => {
    return (
        <div className="animate-pulse  ">
            <div className="flex justify-between mb-4 ">
                <div className="w-1/3 h-8 bg-gray-300 rounded"></div>
                <div className="w-1/6 h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="overflow-auto max-h-[500px]">
                <table className="min-w-full bg-white table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100"></th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100"></th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100"></th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100"></th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, index) => (
                            <tr key={index}>
                                <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-300">
                                    <div className="h-6 bg-gray-300 rounded"></div>
                                </td>
                                <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-300">
                                    <div className="h-6 bg-gray-300 rounded"></div>
                                </td>
                                <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-300">
                                    <div className="h-6 bg-gray-300 rounded"></div>
                                </td>
                                <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-300">
                                    <div className="h-6 bg-gray-300 rounded"></div>
                                </td>
                                <td className="px-4 py-3 whitespace-no-wrap border-b border-gray-300">
                                    <div className="h-6 bg-gray-300 rounded"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Skeleton;

