/* eslint-disable react/prop-types */


export default function Comments({
    userId,
    text
}) {

    return (
        <>
            <div>
                {/* <!-- Примерен коментар --> */}
                <div className="border-t-2 border-gray-200 pt-4">
                    <p className="text-gray-600">From: <span className="font-semibold">{userId?.username}</span></p>
                    <p className="mt-2">{text}</p>
                </div>

                {/* <!-- Други коментари могат да бъдат добавени тук --> */}
            </div>
            
        </>
    )
}