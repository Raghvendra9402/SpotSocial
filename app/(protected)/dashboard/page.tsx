import { auth } from "@/auth";
import { ContentWrapper } from "@/components/ContentWrapper";
import FetchComponent from "@/components/FetchComponent";

export default async function Dashboard() {
  const session = await auth();
  return (
    <>
      <div className="flex justify-between p-3 md:p-5 lg:p-10">
        <h1 className="text-2xl hidden lg:block">
          Welcome , {session?.user?.name}
        </h1>
        <div className="flex gap-2">
          <ContentWrapper />
        </div>
      </div>

      <FetchComponent />
    </>
  );
}
