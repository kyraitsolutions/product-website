import { Outlet } from "react-router-dom";

export function AppLayout() {

  return (
    <div className="flex h-screen w-screen ">
      <main className="w-full flex flex-col">
        <div className="flex-1 h-[calc(100vh-64px)] w-full overflow-y-auto hide-scrollbar ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}