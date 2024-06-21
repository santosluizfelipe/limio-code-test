// GroupedOffers.js

import React, { useState } from "react";
import { useLimio } from "@limio/sdk";
import { groupOffers } from "@limio/utils/offers";
import OfferGroup from "./components/OfferGroup.js";
import "./index.css";

const groupLabels = [
  { id: "digital", label: "Digital" },
  { id: "bundle", label: "Physical" },
];

export function GroupedOffers({ addToBasket }) {
  const { shop: { offers } } = useLimio();
  const offerGroups = groupOffers(offers, groupLabels);
  const [selectedGroup, setSelectedGroup] = useState("digital");

  return (
    <div id={"grouped-offers-component"} className="grouped-offers">
      <div className="grouped-offers-wrapper">
        {offerGroups.map((offerGroup, index) => {
          const { groupId, id, label, offers, thumbnail } = offerGroup;
          return (
            <OfferGroup
              key={`offer-group-${index}`}
              groupId={groupId}
              id={id}
              label={label}
              offers={offers}
              bestValueText={"Best Value"}
              // added the promo code in the component to advertise the user about the discount
              promoCode={"SUMMER20"}
              buttonText={"Subscribe"}
              buttonUrl={"/"}
              thumbnail={thumbnail}
              preselectFirstOfferInGroup={true}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              // prop to add the selected offers into the basket state variable in App.js
              addToBasket={addToBasket}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GroupedOffers;
