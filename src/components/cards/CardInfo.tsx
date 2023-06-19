import Image from "next/image";
import Link from "next/link";
import copa from "../../public/copa.png";

type Props = {
  title: string;
  children: React.ReactNode;
};

function CardInfo({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-3 shadow-lg shadow-rose-500 bg-zinc-900 max-w-sm h-64">
        <h3 className="text-3xl text-red-600 font-bold pb-2">{title}</h3>
        <p className="h-36 text-zinc-200 text-xl">{children}</p>
        <Link
          href="/torneos/crear"
          className="py-1 bg-rose-600 w-full text-2xl block text-center"
        >
          CREAR
        </Link>
      </div>
      <div className="w-2/3 sm:w-72 pt-5">
        <Image src={copa} alt="copa" />
      </div>
    </div>
  );
}

export default CardInfo;
