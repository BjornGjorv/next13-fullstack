import Link from "next/link";

// async function getPosts() {
//     const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
//     console.log("res ohoi: ", res);
//     // const data = await res.json();

//     if (!res.ok) {
//         console.log("error", res);
//     }
//     return res.json();
// }

export default async function Home() {
    // const data = await getPosts();
    // console.log("data: ", data);
    return (
        <main className="py-4 px-48">
            <Link className="bg-teal-700 font-normal py-2 px-4 rounded-sm" href={"/dashboard"}>
                Go to dashboard
            </Link>
        </main>
    );
}
