import Header from "~/components/Header";
import { Toast } from "./components/Commons/Toast";
import { Modal } from "./components/Commons/Modal";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Toast
        options={{
          content: "By using our site, you agree to eat our cookies.",
          actions: {
            buttons: {
              enable: true,
              single: false,
              textOne: "Accept cookies",
              textTwo: "Go to settings",
            },
          },
        }}
      /> */}
      <Modal />
      <Footer />
    </>
  );
}

export default App;
