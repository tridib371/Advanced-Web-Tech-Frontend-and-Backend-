import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h5>Hello world</h5>

      <Link href="about">about use link</Link>
      <br></br>

      <a href="about">about use anchor</a>
      <br></br>

      <Image src="/Screenshot 2025-08-25 130050.png" alt="Picture of the author" width={50} height={50} />
    </>
  );
}
