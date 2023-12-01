import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <main className="relative h-72 overflow-hidden ">
        <div className="absolute inset-0">
          <Image
            src={"https://media.giphy.com/media/Ev4gQixBkzGAzbpttl/giphy.gif"}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
