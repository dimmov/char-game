import Footer from "../../components/Footer/Footer";
import Games from "../../components/Games/Games";
import Heading from "../../components/Heading/Heading";
import SingleGame from "../../components/SingleGame/SingleGame";
import GamesContextProvider from "../../store/games-context";
import UsersContextProvider from "../../store/users-context";

export default function Home() {
  return (
    <>
      <UsersContextProvider>
        <Heading />
        <GamesContextProvider>
          <Games />
        </GamesContextProvider>
      </UsersContextProvider>
      <SingleGame />
      <Footer />
    </>
  );
}
