import Link from "next/link";

export default function ShowAllUsers() {
    return (
        <>
            <Link href="users/1">User 1</Link>
            <br></br>
            <Link href="users/2">User 2</Link>
            <br></br>
            <Link href="users/3">User 3</Link>
            <br></br>
            <Link href="users/4">User 4</Link>
            <br></br>
            <Link href="users/5">User 5</Link>
            <br></br>
        </>
    );
}