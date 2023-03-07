import Link from "next/link";

export default function Home() {
    return (
        <main className="py-4 px-48">
            <Link className="bg-teal-700 font-medium py-2 px-4 rounded-sm" href={"/dashboard"}>
                Go to dashboard
            </Link>
        </main>
    );
}
