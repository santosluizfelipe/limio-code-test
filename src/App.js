// @flow
import React, { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Header";
import { LimioProvider } from "@limio/sdk";
import LimioHeader from "./components/limio-header";
import GroupedOffers from "./components/grouped-offers";
import LimioFooter from "./components/limio-footer";
import Modal from "./components/modal/components/Modal";
import "./App.css";

function App() {
  const endpoint = "https://localhost:9002";


  const [basket, setBasket] = useState({ items: [] });
  // modal state variable to handle the openning and closing the modal
  const [modal, setModal] = useState(false)

  // helper function to deal with the modal state variable
  const handleModalOpen = () => {
    setModal(!modal)
  }

  const addToBasket = (item) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      items: [...prevBasket.items, item],
    }));
  };

  // helper functions that gonna be called inside the modal component to manage the basket state 

    const removeFromBasket = (itemToRemove) => {
      setBasket((prevBasket) => ({
        ...prevBasket,
        items: prevBasket.items.filter((item) => item !== itemToRemove),
      }));
    };
  
    const clearBasket = () => {
      setBasket({ items: [] });
    };

  return (
    <div>
      <Header endpoint={endpoint} />
      <div>
        <ErrorBoundary>
        {modal && (
          <Modal
          // modal as external component with a boolean prop to use the helper function that deals with opening the modal
          closeModal={handleModalOpen}
          basket={basket}
          removeFromBasket={removeFromBasket}
          clearBasket={clearBasket}
        />
        )}
          <LimioProvider>
            <LimioHeader basket={basket} openModal={handleModalOpen} />
            <GroupedOffers addToBasket={addToBasket} />
            <LimioFooter />
          </LimioProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
