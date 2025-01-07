import { Suspense } from "react";

import SiderbarNoteList from "@components/sidebarNoteList";
import EditButton from "@components/editButton";
import Logo from "@components/logo";
import SidebarSearchField from "@components/sidebarSearchField";
import SidebarNoteListSkeleton from "@components/sidebarNoteListSkeleton";

const Sidebar = async () => {
  return (
    <>
      <section className="col sidebar">
        <Logo />
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<SidebarNoteListSkeleton />}>
            <SiderbarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
};

export default Sidebar;