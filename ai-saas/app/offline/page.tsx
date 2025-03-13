import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Fallback() {
    return (
        <main className="h-full bg-[#111827] overflow-auto px-1">
            <div className="h-full flex flex-col gap-y-10 justify-center items-center text-white">
                <div className={"text-center space-y-5 font-extrabold"}>
                    <h1 className={"text-5xl sm:text-5xl md:text-6xl lg:text-7xl"}>OOPS!</h1>
                    <h2 className={"text-3xl sm:text-3xl md:text-4xl lg:text-5xl"}>You are offline</h2>
                </div>
                <p className={"text-center text-sm text-muted"}>
                    Currently you can&apos;t view this page without a connection.
                </p>
                <Button>
                    <Link href={"/"}>Go to the Homepage</Link>
                </Button>
            </div>
        </main>
    );
}
