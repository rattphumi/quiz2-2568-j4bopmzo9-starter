import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";
import Footer from "../components/Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Footer>
        <Footer 
        fullName="Ratthaphumi tayati"
        courseName="CPE261207"
        year="2025"
        studentId={670610726}
        />
      </AppShell.Footer>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
